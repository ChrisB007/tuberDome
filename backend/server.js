// APP VARIABLES
const express = require('express');
const rowdyLogger = require('rowdy-logger');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();



require('dotenv').config();

const PORT = process.env.PORT || 4040;

// MIDDLEWARE
const rowdy = rowdyLogger.begin(app);
app.use(cors());
app.use(express.json());


//DATABASE
const userDB = process.env.TUBER_USERS
mongoose.connect(userDB, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then((res) => console.log("Connected to the database successfully 🤝 "))
    .catch((err) => console.log(err));


//ROUTES
const dashboardRouter = require('./routes/dashboard');
const aboutRouter  = require('./routes/about');
const creatorsRouter = require('./routes/creators');
const sponsorsRouter = require('./routes/sponsors');
const investorsRouter = require('./routes/investors');
const contactRouter = require('./routes/contact');
const inquiriesRouter = require('./routes/businessInquiry');
const searchRouter = require('./routes/search');


app.use('/dashboard', dashboardRouter);
app.use("/about", aboutRouter);
app.use('/creators', creatorsRouter);
app.use('/sponsors', sponsorsRouter);
app.use('/investors', investorsRouter);
app.use('/contact', contactRouter);
app.use('/search', searchRouter);
app.use('/inquiry', inquiriesRouter);


//APP LISTEN
app.listen(PORT, () => {
    console.log(`App is listening at port: ${PORT}`);
    rowdy.print();
})