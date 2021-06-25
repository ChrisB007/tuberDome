import express from 'express';
import { getUsers, singleUser, deleteUser, updateUser, createUser, unfollowUser, followUser } from '../controllers/users.js';
const router = express.Router();

//Get all
router.get('/', getUsers);
//Get one
router.get('/:id', singleUser);
//Delete one
router.delete('/:id', deleteUser);
//Update one
router.patch('/update/:id', updateUser);
//Create
router.post('/add', createUser);
//Follow
router.put('/:id/follow', followUser);
//Unfollow
router.put('/:id/unfollow', unfollowUser);

export default router;