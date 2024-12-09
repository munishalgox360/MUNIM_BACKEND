import { Router } from 'express';
const router = Router();

import {GetUserById} from '../controllers/user.controller.js';

// -------------- USER ROUTES --------------- //

router.get('/', GetUserById);


export default router;