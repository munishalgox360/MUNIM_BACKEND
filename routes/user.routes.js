import { Router } from 'express';
const router = Router();

import {GetUserById, UpdateProfilePic} from '../controllers/user.controller.js';
import upload from '../middleware/upload.js';
// -------------- USER ROUTES --------------- //

router.get('/', GetUserById);
router.patch('/', upload.single('profile'), UpdateProfilePic);

export default router;