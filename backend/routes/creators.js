const router = require('express').Router();
require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const { google } = require('googleapis');
const base_APU_URL = "https://www.googleapis.com/youtube/v3";


const youtube = google.youtube({
    version: "v3",
    auth: process.env.YOUTUBE_API
})


//https://youtube.googleapis.com/youtube/v3/videoCategories?key=[YOUR_API_KEY]



const api_KEY  = process.env.YOUTUBE_API;




router.get("/creators", async(req, res, next) => {
    try{
        const response = await youtube.videoCategories.list({
            part: 'snippet'
        })
        console.log(api_KEY);
    } catch (err) {
        next(err)
    }
});



module.exports = router;



  