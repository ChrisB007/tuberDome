// import passport from 'passport'
// import dotenv  from "dotenv";
// const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
// dotenv.config();



// const google_Client = process.env.GOOGLE_CLIENT_ID;
// const google_Secret = process.env.GOOGLE_CLIENT_SECRET;



// passport.use(new GoogleStrategy({
//     clientID:     google_Client,
//     clientSecret: google_Secret,
//     callbackURL: "/google/callback",
//     passReqToCallback   : true
//   },
//   function(request, accessToken, refreshToken, profile, done) {
//     //Register users here
//     // User.findOrCreate({ googleId: profile.id, username: profile.displayName, email: profile.email }, function (err, user) {
//     //   return done(err, user); //Handle error here
//     // });
//     console.log(profile);
//     done(null, profile);
//   }
// ));

// passport.serializeUser( (user, done) =>{
//     done(null, user)
// })

// passport.deserializeUser( (user, done) =>{
//     done(null, user)
// })

