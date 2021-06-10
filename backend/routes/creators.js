const router = require('express').Router();
require('dotenv').config();
const axios = require('axios');
const baseURL = "https://www.googleapis.com/youtube/v3";


const api_KEY  = process.env.YOUTUBE_API;




router.get("/creators", async (req, res, next) => {
    try{
        const url = `${baseURL}`
        const res = await axios.get(url)

    } catch (err) {
        next(err)
    }
})



module.exports = router;



  