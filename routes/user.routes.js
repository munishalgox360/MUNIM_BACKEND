import { Router } from 'express';
const router = Router();

import {GetUserById, UpdateProfilePic} from '../controllers/user.controller.js';
import upload from '../middleware/upload.js';
// -------------- USER ROUTES --------------- //


/**
 * @swagger
 * api/user/:
 *  get:
 *      summary: Get LoggedIn User
 *      description: Fetch LoggedIn user by ID
 *      security:
 *          - bearerAuth: [] 
 *      response:
 *          200:
 *              description: User Fetched Successfully
 *          404:
 *              description: User Not Found
 *          500:
 *              description: 🔴 INTERNAL_SERVER_ERROR 🔴
*/
router.get('/', GetUserById);


/**
 * @swagger
 * api/user/:
 *  patch:
 *      summary: Update User Profile Image
 *      description: Update User Profile Image
 *      security:
 *          - bearerAuth: [] 
 *      response:
 *          200:
 *              description: Changed Successfully
 *          404:
 *              description: User Not Found
 *          500:
 *              description: 🔴 INTERNAL_SERVER_ERROR 🔴
*/
router.patch('/', upload.single('image'), UpdateProfilePic);

export default router;