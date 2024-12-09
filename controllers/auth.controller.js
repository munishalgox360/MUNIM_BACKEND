import UserModel from '../models/user.schema.js'
import Bcrypt from 'bcryptjs';
import { loginToken } from '../middleware/auth.js';

// -------------- Auth Handler Functions -------------- //

export async function SignUpUser(req, res) {
    const { mobile, email } = req.body;
    
    try {   
        const isExist = await UserModel.findOne({ $and : [{email : email},{mobile : mobile}]});
        //check
        if(isExist) return res.status(200).json({ status : 401, success : false, message : "Already Registered 😶" });

        const response = await UserModel.create(req.body); 
        if(response){
            return res.status(200).json({ status : 201, success : true, message : "Registered Successfully 👍", data : response });    
        }else{
            return res.status(200).json({ status : 401, success : false, message : "Failed to Register 👎"});    
        }

    } catch (error) {
        res.status(500).json({ status : 500, message : "🔴 SERVER_ERROR 🔴", error : error });
    }
}


export async function SignInUser(req, res) {
    const { mobile } = req.query;

    try {
        const credential = mobile.trim() === "";
        if(credential)  return res.status(200).json({ status : 401, success : false, message : "Invalid Credentials 😮" });

        const isUser = await UserModel.findOne({ mobile : mobile });
        
        if(!isUser) return res.status(200).json({ status : 401, success : false, message : "You Are Not Registered 😮" });

        const token = await loginToken(isUser);
        if(token) {
            return res.status(200).json({ status : 200, success : true, data : isUser, authToken : token })
        }else{
            return res.status(200).json({ status : 401, success : false, message : "AUTH_TOKEN NOT GENERATED" })
        }
    } catch (error) {
        res.status(500).json({ status : 500, message : "🔴 SERVER_ERROR 🔴", error : error });
    }
}


