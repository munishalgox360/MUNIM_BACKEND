import { Router } from 'express';
const router = Router();
import authRoutes from './auth.routes.js';
import userRoutes from './user.routes.js';

import { verifyUser } from '../middleware/auth.js';
// ------------ Index Routes ------------------ //

router.use('/auth', authRoutes);
router.use('/user', verifyUser, userRoutes);

export default router;
