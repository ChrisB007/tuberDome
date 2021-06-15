const router = require('express').Router();


router.get('/failed', (req, res) => {
    res.send('Sorry, login attempt failed. Please try again.')
})


module.exports = router;