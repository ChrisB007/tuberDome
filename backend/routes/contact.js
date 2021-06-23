import express from 'express';
import { getContacts, getOneContact,createContacts, updateContact, deleteContact  } from '../controllers/contacts.js'
const router = express.Router();

//Get all
router.get('/', getContacts);
//Get one
router.get('/:id', getOneContact);
//Create
router.post('/', createContacts);
//Update
router.patch('/:id', updateContact);
//Delete
router.delete('/:id', deleteContact);



export default router;