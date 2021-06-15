const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('dotenv').config();


const User = require('./routes/users');

const google_Client = process.env.GOOGLE_CLIENT_ID;
const google_Secret = process.env.GOOGLE_CLIENT_SECRET;


passport.use(new GoogleStrategy({
    clientID:     google_Client,
    clientSecret: google_Secret,
    callbackURL: "http://localhost:4040/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

passport.serializeUser( (user, done) =>{
    done(null, user)
})

passport.deserializeUser( (user, done) =>{
    done(null, user)
})











// What you will get in profile response ?

//    id
//    name
//    displayName
//    birthday
//    relationship
//    isPerson
//    isPlusUser
//    placesLived
//    language
//    emails
//    gender
//    picture
//    coverPhoto