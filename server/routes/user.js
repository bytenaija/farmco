let express = require('express');
let router = express.Router();
let user = require("../controllers/user")
const passport = require('passport');

router.post("/login", user.login);

//router.get("/profile:userId", passport.authenticate('jwt', {session: false}), user.profile)

router.post("/register", user.register);

//router.put("/profile/:userId", user.editProfile);

module.exports = router;