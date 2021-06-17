const router = require('express').Router;


router.get('/logout', (req,res) => {
    req.logout();
    req.session.destroy();
    //Redirect to homepage
});










module.exports = router;