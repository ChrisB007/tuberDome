const router = require('express').Router();
let Campaign = require('../modelS/businessInq');


router.get("/campaign", (req, res) => {
    
    const business = new Campaign({
        campaign: req.body.campaign,
        full_name: req.body.full_name,
        email: req.body.email,
        company: req.body.company,
        Product: req.body.product,
        subject: req.body.subject,
        message: req.body.message,
        start_date: req.body.start_date,
        end_date: req.body.end_date
    })

    business.save()
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log(error)
        })
});

module.exports = router;