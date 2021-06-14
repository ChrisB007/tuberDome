const router = require('express').Router();
let Campaign = require('../modelS/businessInq');


router.get('/inquiry', async(req, res) =>{
    try{
        const campaign = await Campaign.find()
        res.json(campaign)
    } catch(err){
        console.log(err)
    }
});

router.get('/inquiry/:id', async(req, res) =>{
    try{
        const singleCampaign = await Campaign.findById(req.params.id)
        res.json(singleCampaign);
    } catch(err){
        console.log(err)
    }
})

router.patch('/inquiry/:id', async (req, res) => {
    try{
        const updateCampaign = await Campaign.findById(req.params.id)
        //Check for what changed
        const businessInq = await updateCampaign.save()
        res.json(businessInq)

    }catch(err){
        console.log(err)
    }
})

router.delete('inquiry/:id', async(req, res) =>{
    try{
        const deletCampaign = await Campaign.findById(req.params.id)
        const removeCampaign = deletCampaign.remove()
        res.json(removeCampaign)

    } catch(err){
        console.log(err)
    }
})


router.post("/inquiry", async (req, res) => {
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

    try{
        const businessInq = await business.save()
        res.json(businessInq)
    }catch(err){
        console.log(err)
    }
    
});

module.exports = router;