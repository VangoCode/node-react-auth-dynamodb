require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');

var cors = require('cors');

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cookieSession = require('cookie-session');

var app = express();

// allow CORS for origin localhost:3000
app.use(cors({credentials: true, origin: "http://localhost:3000"}));

var loginRouter = require('./routes/login');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
  const allowedOrigins = ["http://localhost:3000"];
  const origin = req.headers.origin;
  
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept, Author");
  res.header("Access-Control-Allow-Credentials", "true");
  
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  
  next();
});

// set up login cookie session
app.use(cookieSession({
  name: "trackr-session",
  secret: process.env.SESSION_COOKIE_SECRET,
  maxAge: 1000 * 60 * 60 * 24 * 3 // 3 days
}));

// reset cookie session when you visit the site again
app.use((req, res, next) => {
  if (req.session.userId) {
    req.session.lastAccessTime = Date.now() // reset cookie expiration
  }
  next()
});

app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
