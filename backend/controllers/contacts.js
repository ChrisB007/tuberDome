import ContactData from '../models/contact.js'

export const getContacts = async (req, res) => {
    try {
        const allContacts =  await ContactData.find()
        res.status(200).json(allContacts)
        
    } catch (error) {
        res.status(400).json(`Error: ${error}`);
        
    }
    
}

export const getOneContact = async (req, res) => {
    try {
        const oneContact =  await ContactData.findById(req.params.id)
        res.status(200).json(oneContact)
        
    } catch (error) {
        res.status(400).json(`Error: ${error}`);
        
    }
    
}

export const createContacts = async (req, res) => {
    const incomingContact = req.body;
    const newContacts = new ContactData (incomingContact)
    try {
        const savedContact = await newContacts.save();
        res.status(201).json(savedContact)
        
    } catch (error) {
        res.status(409).json(`Error: ${error}`)
        
    }
    
}

export const updateContact = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
    
}

export const deleteContact = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}


