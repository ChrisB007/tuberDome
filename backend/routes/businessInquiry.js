import express from 'express';
import Business from '../models/businessInq.js';
const router = express.Router()


router.get('/', async(req, res) =>{
    try{
        const campaign = await Business.find()
        res.json(campaign)
    } catch(err){
        console.log(err)
    }
});

router.get('/:id', async(req, res) =>{
    try{
        const singleCampaign = await Business.findById(req.params.id)
        res.json(singleCampaign);
    } catch(err){
        console.log(err)
    }
})

router.patch('/:id', async (req, res) => {
    try{
        const updateCampaign = await Business.findById(req.params.id)
        //Check for what changed
        const businessInq = await updateCampaign.save()
        res.json(businessInq)

    }catch(err){
        console.log(err)
    }
})

router.delete('/:id', async(req, res) =>{
    try{
        const deletCampaign = await Business.findById(req.params.id)
        const removeCampaign = deletCampaign.remove()
        res.json(removeCampaign)

    } catch(err){
        console.log(err)
    }
})


router.post("/add", async (req, res) => {
    const business = new Business({
        campaign: req.body.campaign,
        full_name: req.body.full_name,
        email: req.body.email,
        company: req.body.company,
        Product: req.body.product,
        subject: req.body.subject,
        message: req.body.message,
        start_date: Date.parse(req.body.start_date),
        end_date: Date.parse(req.body.end_date)
    })

    try{
        const businessInq = await business.save()
        res.json(businessInq)
    }catch(err){
        console.log(err)
    }
    
});

export default router;