const express = require('express');
const passport = require('passport');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/home', function (req, res, next) {
    res.render("home")
  })

router.get('/login', passport.authenticate('auth0', {
        scope: 'openid email profile'
    }),
    function (req, res) {
        res.redirect("/");
    });

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect("https://chewzy.auth0.com/v2/logout/?returnTo=http://localhost:3000/");

});

router.get('/callback',
    passport.authenticate('auth0', {
        failureRedirect: '/failure'
    }),
    function (req, res) {
        res.redirect(req.session.returnTo || '/home');
    }
);

router.get('/failure', function (req, res) {
    var error = req.flash("error");
    var error_description = req.flash("error_description");
    req.logout();
    res.render('failure', {
        error: error[0],
        error_description: error_description[0],
    });
});

module.exports = router;