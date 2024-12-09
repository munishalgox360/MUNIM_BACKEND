import UserModel from "../models/user.schema.js";



export async function GetUserById(req, res) {
    try {
        const user = await UserModel.findById(req.user.id);

        if(!user) return res.status(200).json({ status : 401, success : false, message : "Not Found 😮" });
        res.status(200).json({ status : 200, success : true, message : "Fetched", data : user });
    } catch (error) {
        res.status(500).json({ status : 500, message : "🔴 SERVER_ERROR 🔴", error : error });
    }
}