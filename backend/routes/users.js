import express from 'express';
import { getUsers, singleUser, deleteUser, updateUser, createUser } from '../controllers/users.js';
const router = express.Router();


router.get('/', getUsers);

router.get('/:id', singleUser);

router.delete('/:id', deleteUser);

router.patch('/update/:id', updateUser);

router.post('/add', createUser);

export default router;