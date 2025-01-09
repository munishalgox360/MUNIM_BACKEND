import UserModel from "../models/user.schema.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import path from "path";
import fs from 'fs';


export async function GetUserById(req, res) {
    try {
        const user = await UserModel.findById(req.user.id);
        if(!user) return res.status(404).json({ success : false, message : "User Not Found" });

        res.status(200).json({ success : true, message : "User Fetched Successfully", data : user });
    } catch (error) {
        res.status(500).json({ message : "🔴 INTERNAL_SERVER_ERROR 🔴", error : error });
    }
}


export async function UpdateProfilePic(req, res) {
    try {
        const id = req.user.id;
        const { filename } = req.file;

        const userPreviousImage = await UserModel.findById(req.user.id);
        const imagePath = path.resolve(__dirname.replace('controllers','uploads'), userPreviousImage.image);
      
        if(fs.existsSync(imagePath)){
            fs.unlinkSync(imagePath);
        }
        
        const updatePic = await UserModel.findByIdAndUpdate(id, { image : filename }, { new : true });
        if(!updatePic) return res.status(404).json({ success : false, message : "User Not Found" });
        
        res.status(200).json({ success : true, message : "Changed Successfully" });
    } catch (error) {
        res.status(500).json({ message : "🔴 SERVER_ERROR 🔴", error : error });
    }
}
