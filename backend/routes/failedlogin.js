import express from 'express';
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Sorry, login attempt failed. Please try again.')
})


export default router;