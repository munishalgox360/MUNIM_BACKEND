import UserModel from '../models/user.schema.js'
import { loginToken } from '../middleware/auth.js';
import { sanitizeUser } from '../utils/common.js';

// -------------- Auth Handler Functions -------------- //

export async function SignUpUser(req, res) {
    const { name, company, mobile, email } = req.body;
    
    try {   
        const isExist = await UserModel.findOne({ $and : [{email : email},{mobile : mobile}]});
        //check
        if(isExist) return res.status(400).json({ success : false, message : "Already Registered" });

        const response = await UserModel.create(req.body); 
        if(response){
            return res.status(201).json({ success : true, message : "User created Successfully"});    
        }else{
            return res.status(409).json({ success : false, message : "Failed to Register"});    
        }

    } catch (error) {
        res.status(500).json({ message : "🔴 INTERNAL_SERVER_ERROR 🔴", error : error });
    }
}


export async function SignInUser(req, res) {
    const { mobile } = req.query;

    try {
        const check = mobile.trim() === "";
        if(check)  return res.status(400).json({ success : false, message : "Unauthorized or wrong credentials" });

        const isUser = await UserModel.findOne({ mobile : mobile });
        
        if(!isUser) return res.status(404).json({ success : false, message : "You Are Not Registered" });

        const token = await loginToken(isUser);
        if(token) {
            return res.status(200).json({ success : true, message : "User logged in successfully", data : sanitizeUser(isUser), authToken : token })
        }else{
            return res.status(500).json({ success : false, message : "AUTH_TOKEN NOT GENERATED" })
        }
    } catch (error) {
        res.status(500).json({ message : "🔴 SERVER_ERROR 🔴", error : error });
    }
}


