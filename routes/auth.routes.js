import  { Router } from 'express';
const router = Router();
import { SignUpUser, SignInUser } from '../controllers/auth.controller.js';


// ------------  Routes ------------------ //

/**
 * @swagger
 * api/auth/signup/:
 *   post:
 *     summary: New User Registration
 *     description: Register a new user with the required details
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - company
 *               - mobile
 *               - email
 *             properties:
 *               name:  
 *                 type: string
 *                 description: Full name of the user
 *                 example: "manishalgox"
 *               company:  
 *                 type: string
 *                 description: Name of the company the user works for
 *                 example: "Algox360"
 *               mobile:  
 *                 type: string
 *                 description: Mobile number of the user
 *                 example: "9856321400"
 *               email:  
 *                 type: string
 *                 description: Email address of the user
 *                 example: "amitalgoX360@gmail.com"
 *     responses:
 *       201:
 *         description: User created Successfully
 *       403:
 *         description: Already Registered
 *       409:
 *         description: Failed to Register
 *       500:
 *         description: 🔴 INTERNAL_SERVER_ERROR 🔴
 */
router.post('/signup', SignUpUser);



/**
 * @swagger
 * api/auth/signin/:
 *   get:
 *     summary: Login User
 *     description: Login user with the required details.
 *     parameters:
 *       - in: query
 *         name: mobile
 *         description: Mobile Number of User
 *         required: true
 *         type: string  # Or type: number if you expect only digits
 *         example: '1234567890'  # An example input for clarity
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Unauthorized or wrong credentials
 *       404:
 *         description: You Are Not Registered
 *       500:
 *         description: 🔴 INTERNAL_SERVER_ERROR 🔴
 */


router.get('/signin', SignInUser);


export default router;