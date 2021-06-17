import User from '../models/user.js'

export async function getUsers(req, res){
    try{
        const allUser = await User.find()
        res.status(200).json(allUser);

    } catch (err){
        res.status(400).json(`Error: ${err}`)
    }
}

export async function singleUser(req, res) {
    try{
        const oneUser = await User.findById(req.params.id);
        res.status(200).json(oneUser);

    } catch(err) {
        res.status(400).json(`Error: ${err}`)
    }
}

export async function deleteUser(req, res) {
    try{
        const deleteUser = User.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteUser);

    } catch(err){
        res.status(400).json(`Error: ${err}`);

    }
}

export async function updateUser(req, res) {
    const updateUser = User({
        username: req.body.username,
        email: req.body.email,
        description: req.body.description
    });

    try{
        const updatedUser = User.findByIdAndUpdate(req.params.id);
        const savedUpdates =  updatedUser.save()
        res.status(200).json(savedUpdates)

    }catch(err){
        res.status(400).json(`Error: ${err}`);
    }
}

export async function createUser(req, res) {
    const createUser = new User({
        username: req.body.username,
        email: req.body.email,
        description: req.body.description
    });

    try{
        const saveUser = await createUser.save()
        res.status(201).json(saveUser);

    } catch(err){
        res.status(400).json(`Error: ${err}`);
    }
}

