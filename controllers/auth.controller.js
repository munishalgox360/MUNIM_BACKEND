import UserModel from '../models/user.schema.js'
import Bcrypt from 'bcryptjs';
import { loginToken } from '../middleware/auth.js';

// -------------- Auth Handler Functions -------------- //

export async function SignUpUser(req, res) {
    const { userName, companyName, mobile, email, password } = req.body;
    
    try {   
        const isExist = await UserModel.findOne({ email : email });
        //check
        if(isExist) return res.status(200).json({ status : 401, message : "Already Registered" });

        
        const hashedPassword = await Bcrypt.hash(password, 10);
        const payload = { ...req.body, password : hashedPassword };


        const response = await UserModel.create(payload); //sign up
        if(response){
            return res.status(200).json({ status : 201, success : true, data : response });    
        }else{
            return res.status(200).json({ status : 401, success : false, data : response });    
        }

    } catch (error) {
        res.status(500).json({ status : 500, message : "SERVER_ERROR", error : error });
    }
}


export async function SignInUser(req, res) {
    const { mobile, email, password } = req.query;

    try {
        const credential = [email, password].some(v => v.trim() === "")
        if(credential)  return res.status(200).json({ status : 401, success : false, message : "Empty Credentials" });

        const isUser = await UserModel.findOne({ email : email });
        
        if(!isUser) return res.status(200).json({ status : 401, success : false, message : "You Are Not Registered" });

        const match = await Bcrypt.compare(password, isUser.password);
        if(!match) return res.status(200).json({ status : 401, success : false, message : "Incorrect Credentials" });

        const token = await loginToken(isUser);
        if(token) {
            return res.status(200).json({ status : 200, success : true, data : isUser, token : token })
        }else{
            return res.status(200).json({ status : 401, success : false, message : "TOKEN NOT GENERATED" })
        }
        
        
    } catch (error) {
        res.status(500).json({ status : 500, message : "SERVER_ERROR", error : error });
    }
}


