import User from '../models/user.js';
import bcrypt from 'bcrypt';

//Get all users
export async function getUsers(req, res){
    try{
        const allUser = await User.find()
        res.status(200).json(allUser);

    } catch (err){
        res.status(400).json(`Error: ${err}`)
    }
}


//Get single User
export async function singleUser(req, res) {
    try{
        const oneUser = await User.findById(req.params.id);
        res.status(200).json(oneUser);

    } catch(err) {
        res.status(400).json(`Error: ${err}`)
    }
}


//Delete
export async function deleteUser(req, res) {
    if( req.body.userId === req.params.id || req.body.isAdmin ){
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account deleted successfully")
        } catch (error) {
            res.status(500).json(`Error: ${error}`)
        }

    } else {
        res.status(403).json("You can delete only your account")
    }
}

//Update
export async function updateUser(req, res) {
    if( req.body.userId === req.params.id || req.body.isAdmin ){
        if (req.body.password){
            try {
                const salt = await bcrypt.genSalt(12);
                req.body.password = await bcrypt.hash(req.body.password, salt )
            } catch (error) {
                res.status(500).json(`Error: ${error}`)
            }
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json("Account updated successfully")
        } catch (error) {
            res.status(500).json(`Error: ${error}`)
        }

    } else {
        res.status(403).json("You can update only your account")
    } 
}


//Create
export async function createUser(req, res) {
    const createNewUser = req.body;
    const newUser = new User(createNewUser);

    try{
        const saveUser = await newUser.save()
        res.status(201).json(saveUser);

    } catch(err){
        res.status(409).json(`Error: ${err}`);
    }
}


export async function followUser(req, res) {
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if(!user.followers.includes(req.body.userId)){
                await user.findOneAndUpdate({ $push: {followers: req.body.userId}});
                await currentUser.findOneAndUpdate({ $push: {following: req.params.id}});
                res.status(200).json("User has been followed");
            } else{
                res.status(404).json("You already following User")
            }
        } catch (error) {
            res.status(500).json(`Error: ${error}`)
        }

    } else {
        res.status(403).json(`Error: You can't follow yourself`)
    }
    
}

export async function unfollowUser(req, res) {
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if(user.followers.includes(req.body.userId)){
                await user.findOneAndUpdate({ $pull: {followers: req.body.userId}});
                await currentUser.findOneAndUpdate({ $pull: {following: req.params.id}});
                res.status(200).json("User has been un-followed");
            } else{
                res.status(404).json("You've already un-followed User")
            }
        } catch (error) {
            res.status(500).json(`Error: ${error}`)
        }

    } else {
        res.status(403).json(`Error: You can't un-follow yourself`)
    }
    
}
