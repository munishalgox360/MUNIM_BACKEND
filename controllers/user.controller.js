import UserModel from "../models/user.schema.js";


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

        const updatePic = await UserModel.findByIdAndUpdate(id, {image : filename}, {new : true});
        if(!updatePic) return res.status(404).json({ success : false, message : "User Not Found" });
        
        res.status(200).json({ success : true, message : "Changed Successfully", data : updatePic });
    } catch (error) {
        res.status(500).json({ message : "🔴 SERVER_ERROR 🔴", error : error });
    }
}
