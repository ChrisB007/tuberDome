import Sponsor from '../models/sponsors';


// , , createSponsors, updateSponsors, deleteSponsors


export const getAllSponsors = async(req, res) => {
    try{
        const getSponsors = await Sponsor.find();
        res.status(200).json(getSponsors);

    }catch (err){
        res.status(400).json(`Error: ${err}`)
        }
}



export const getOneSponsor = async(req,res) =>{
    try{
        const getOneSponsor = await Sponsor.findById(req.params.id)
        res.status(200).json(getOneSponsor);

    }catch(err){
        res.status(400).json(`Error: ${err}`);
    }
}




