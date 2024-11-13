import  { Router } from 'express';
const router = Router();
import { SignUpUser, SignInUser } from '../controllers/auth.controller.js';


// ------------  Routes ------------------ //

router.post('/signup', SignUpUser);
router.get('/signin', SignInUser);


export default router;