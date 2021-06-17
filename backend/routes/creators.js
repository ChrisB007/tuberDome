import express from 'express';
import dotenv from 'dotenv'
const router = express.Router()
dotenv.config();
// const { google } = require('googleapis');
// const base_APU_URL = "https://www.googleapis.com/youtube/v3";




// const youtube = google.youtube({
//     version: "v3",
//     auth: process.env.YOUTUBE_API
// })


//https://youtube.googleapis.com/youtube/v3/videoCategories?key=[YOUR_API_KEY]


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



// const api_KEY  = process.env.YOUTUBE_API;




// router.get("/", async(req, res, next) => {
//     try{
//         const response = await youtube.videoCategories.list({
//             part: 'snippet'
//         })
//         res.json(response);
        
//     } catch (err) {
//         next(err)
//     }
// });



export default router;



  