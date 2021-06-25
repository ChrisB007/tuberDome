import express from 'express';
import bcrypt from 'bcrypt';
import Register from '../models/register.js';
const router = express.Router();



//Register
router.post('/register', async(req, res) =>{
    const userInfo = req.body;
    const newUser = await new Register(userInfo);

    try {
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = bcrypt.hash(req.body.password, salt);

        const savedUser = newUser.save();
        res.status(200).json(` You have been registered with this information ${savedUser}`);
        
    } catch (error) {
        res.status(500).json(error)
    }
})


//Login

router.post('/login', async (req, res) =>{
    try {
        const user = await Register.findOne( { email: req.body.email, password: req.body.password});
        !user && res.status(404).json("User not found");

        const matchPassword = await bcrypt.compare(req.body.password, user.password);
        !matchPassword && res.status(400).json('Invalid password');

        res.status(200).json(user);


    } catch (error) {

        res.status(500).json(`Error: ${error}`);
        
    }
})











export default router


