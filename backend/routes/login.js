var express = require('express');
var router = express.Router();
const Auth = require("../controllers/auth-controller");
const AuthController = require("../controllers/login");


/* POST login listing. */
// middleware to verify id and login
router.post('/', Auth.verify_google_id_token, AuthController.login);
router.post('/logout', AuthController.logout);
router.post('/verify', Auth.is_logged_in, Auth.send_logged_in_info);

module.exports = router;
