const router = require("express").Router();
const user = require('../controller/user.controller.js');
const session = require('express-session');
const product = require('../controller/product.controller');
const passport = require('passport');
var userProfile;

router.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET' 
  }));

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '919904759703-4h0c7i0v1ll9u13oshuklfamporm7081.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'r8r4UiVG637h3Ht41_mat7FT';


router.use(passport.initialize());
router.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));

// router.set('view engine', 'ejs');

router.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.
    res.redirect('/success');
    // res.render('pages/success');
  });


router.get('/success', (req, res) => {
    //res.send(userProfile);
    res.render('pages/success', {user: userProfile});
    });
router.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// public  route

// register route
router.post("/register", user.register);

// login route
router.post("/login", user.login);

router.get('/product', product.findAll);

router.get('/product/:Id', product.findOne);


module.exports = router;