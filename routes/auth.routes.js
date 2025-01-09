import {Router} from "express";
const router = Router();
import {SignUpUser, SignInUser} from "../controllers/auth.controller.js";

// ------------  Routes ------------------ //

/**
 * @swagger
 * /api/auth/signup/:
 *   post:
 *     summary: User Registration
 *     description: Register a new user with the necessary details
 *     tags:
 *       - USERS
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
 *                 example: "9856321478"
 *               email:
 *                 type: string
 *                 description: Email address of the user
 *                 example: "amitalgoX360@gmail.com"
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: User created successfully
 *       400:
 *         description: Already registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Already registered
 *       409:
 *         description: Conflict in registration
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Failed to register
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: INTERNAL_SERVER_ERROR
 *                 error:
 *                   type: object
 *                   additionalProperties: true
 */

router.post("/signup", SignUpUser);
/**
 * @swagger
 *  components:
 *      schema: 
 *          SignIn:
 *              type: object
 *              properties:
 *                  id:
 *                      type: string
 *                  role:
 *                      type: string
 */

/**
 * @swagger
 * /api/auth/signin/:
 *   get:
 *     summary: Login User
 *     description: Login user with the required details
 *     tags:
 *         - USERS
 *     parameters:
 *       - in: query
 *         name: mobile
 *         description: Mobile Number of User
 *         required: true
 *         type: string
 *         example: '9856321478'
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: User logged in successfully
 *                 data:
 *                   $ref: '#/components/schema/SignIn'  # Correct reference with proper indentation
 *                 authToken:
 *                    type: string
 *                    example: Bearer xSEfea.........
 *
 *       400:
 *         description: Unauthorized or wrong credentials
 *       404:
 *         description: You Are Not Registered
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: INTERNAL_SERVER_ERROR
 *                 error:
 *                   type: object
 *                   additionalProperties: true
 */

router.get("/signin", SignInUser);

export default router;
