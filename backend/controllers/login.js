const User = require('../models/user.model')

exports.login = async (req, res, next) => {
    const payload = res.locals.payload;
    const email = payload["email"];

    let user = await User.findOne(email);

    if (user.Count == 0) {
        console.log("first sign in. creating new user account.");
        const firstName = payload["given_name"];
        const lastName = payload["family_name"];
        const googleId = payload['sub'];
        const profilePicUrl = payload['picture'];

        user = await User.create({
            googleId: googleId,
            email: email,
            firstName: firstName,
            lastName: lastName,
            profilePicUrl: profilePicUrl
        });
    }

    // create session cookie
    req.session.userId = email
    res.sendStatus(200);
}

exports.logout = (req, res, next) => {
    console.log("got here");
    req.session = null;
    console.log("got here 3");
    res.sendStatus(200);
}