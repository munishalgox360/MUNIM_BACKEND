import { Router} from 'express';
const router = Router();
import authRoutes from './auth.route.js';

// ------------ Index Routes ------------------ //

router.use('/auth', authRoutes);


export default router;
