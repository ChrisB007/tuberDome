import express from 'express';
import Sponsor from '../models/sponsors.js';
import { getAllSponsors, getOneSponsor, createSponsors, updateSponsors, deleteSponsors} from '../controllers';

const router = express.Router();

// router.get('/sponsors', )


export default router;