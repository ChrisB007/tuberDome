// APP VARIABLES
import express from 'express';
import dotenv  from "dotenv"
import session from 'express-session';
import passport from 'passport';
import rowdyLogger from 'rowdy-logger';
import mongoose from 'mongoose';
import cors from 'cors';
import dashboardRouter from './routes/dashboard.js';
import aboutRouter  from './routes/about.js';
import creatorsRouter from './routes/creators.js';
// import sponsorsRouter from './routes/sponsors.js';
import investorsRouter from './routes/investors.js';
import contactRouter from './routes/contact.js';
// import inquiriesRouter from './routes/businessInquiry.js';
import searchRouter from './routes/search.js';
import failedRouter from './routes/failedlogin.js';
import userRouter from './routes/users.js';
import userLogin from './routes/login';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';



const app = express();
const google_Client = process.env.GOOGLE_CLIENT_ID;
const google_Secret = process.env.GOOGLE_CLIENT_SECRET;

const PORT = process.env.PORT || 4040;
const session_SECRET = process.env.SESSION_SECRET;

// MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());
const rowdy = rowdyLogger.begin(app);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({origin:'http://localhost:3000', credentials: true}));
dotenv.config();
app.use(session({ secret: session_SECRET, resave: true, saveUninitialized: true }));


//DATABASE
const userDB = process.env.TUBERDOME_CLUSTER;
mongoose.connect(userDB, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {
        console.log(`Connected to database successfully, and app is listening at port: ${PORT} 🤝`);
        rowdy.print();
    }))
    .catch((err) => console.log(err));


//ROUTES    
app.use('/dashboard', dashboardRouter);
app.use("/about", aboutRouter);
app.use('/creators', creatorsRouter);
// app.use('/sponsors', sponsorsRouter);
app.use('/investors', investorsRouter);
app.use('/contact', contactRouter);
app.use('/search', searchRouter);
// app.use('/inquiry', inquiriesRouter);
app.use('/failed', failedRouter);
app.use('/users', userRouter);
app.use('./login', userLogin);



//Authentication

passport.serializeUser( (user, done) =>{
    done(null, user)
})

passport.deserializeUser( (user, done) =>{
    done(null, user)
})

passport.use(new GoogleStrategy({
    clientID:     google_Client,
    clientSecret: google_Secret,
    callbackURL: "/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    //Uncomment below and Save users to DB here.
    // User.findOrCreate({ googleId: profile.id, username: profile.displayName, email: profile.email }, function (err, user) {
    //   return done(err, user); //Handle error here
    // });
    console.log(profile);
    done(null, profile);
  }
));


app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/dashboard',
        failureRedirect: '/failed'
}));
