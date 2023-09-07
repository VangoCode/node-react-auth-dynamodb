const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.SERVER_GOOGLE_CLIENT_ID);
const User = require('../models/user.model');

exports.verify_google_id_token = (req, res, next) => {
    try {
        const idToken = req.headers.authorization.split(" ")[1];
        
        async function verify() {
            const ticket = await client.verifyIdToken({
                idToken: idToken,
                audience: [process.env.EXTENSION_GOOGLE_CLIENT_ID, process.env.WEBSITE_GOOGLE_CLIENT_ID]
            });
            res.locals.payload = ticket.getPayload();
        };

        verify().then(() => (
            next()
        )).catch(err => {
            console.log(err);
            return res.status(401).json({error: err});
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: err})
    }
}

exports.is_logged_in = (req, res, next) => {
    const userId = req.session.userId
    
    if (userId) {
        next()
    } else {
        return res.status(401).json({
            error: "No session cookie sent"
        })
    }
}

exports.send_logged_in_info = (req, res, next) => {
    res.status(200).json({
        verified: true
    })
}