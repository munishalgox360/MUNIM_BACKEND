import { Router } from 'express';
const router = Router();

import { GetUserById, UpdateProfilePic } from '../controllers/user.controller.js';
import upload from '../middleware/upload.js';
// -------------- USER ROUTES --------------- //


/**
 * @swagger
 * components:
 *   schema:
 *     GetUser:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "6756bfd0eb7d966d5575aa8c"
 *         name:
 *           type: string
 *           example: "manishalgox"
 *         company:
 *           type: string
 *           example: "Algox360"
 *         mobile:
 *           type: string
 *           example: "9856321478"
 *         email:
 *           type: string
 *           example: "manishalgoX360@gmail.com"
 *         image:
 *           type: string
 *           example: "image-1736695724439image2.jpeg"
 *         role:
 *           type: string
 *           example: "client"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2024-12-09T10:00:48.753Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-01-08T08:23:33.999Z"
 *         __v:
 *           type: integer
 *           example: 0
 */

/**
 * @swagger
 * /api/user/:
 *   get:
 *     summary: Get LoggedIn User
 *     description: Fetch LoggedIn User
 *     tags:
 *       - USERS
 *     security:
 *       - bearerAuth: [] 
 *     responses:
 *       200:
 *         description: User Fetched Successfully
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
 *                   example: User Fetched Successfully
 *                 data:
 *                   $ref: '#/components/schema/GetUser'
 *       404:
 *         description: User Not Found
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
 *                   example: User Not Found
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



router.get('/', GetUserById);



/**
 * @swagger
 * /api/user/:
 *  patch:
 *      summary: Update User Profile Image
 *      description: Update User Profile Image
 *      tags:
 *          - USERS
 *      security:
 *          - bearerAuth: [] 
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          image:
 *                              type: string
 *                              format: binary
 *                              description: Select Image for Change
 *                      required:
 *                          - image
 *      responses:
 *          200:
 *              description: Changed Successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties: 
 *                              success:
 *                                  type: boolean
 *                                  example: true
 *                              message:
 *                                  type: string
 *                                  example: Changed Successfully
 *          404:
 *              description: User Not Found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties: 
 *                              success:
 *                                  type: boolean
 *                                  example: false
 *                              message:
 *                                  type: string
 *                                  example: User Not Found
 *          500:
 *              description: Internal server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                type: string
 *                                example: INTERNAL_SERVER_ERROR
 *                              error:
 *                                type: object
 *                                additionalProperties: true
*/

router.patch('/', upload.single('image'), UpdateProfilePic);

export default router;