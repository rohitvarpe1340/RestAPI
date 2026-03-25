import express from 'express';
import{createUser,
       getUsers,
       getUserById,
       updateUser,
       patchUser,
       deleteUser} from '../controllers/usercontroller.js';


const router = express.Router();

router.post('/users',createUser);
router.get('/users',getUsers);
router.get('/users/:id',getUserById);
router.put('/users',updateUser);
router.patch('/users/:id',patchUser);
router.delete('/users/:id',deleteUser);

export default router;
