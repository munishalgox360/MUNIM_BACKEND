import mongoose from "mongoose";

const Education = new mongoose.Schema({
    qualification : { type: String, trim: true },
    qualifiedYear : { type: Number },    
    institute : { type: String, trim: true },
    additionalQualification : { type: String, trim: true }
});


const Address = new mongoose.Schema({
    address1 : { type: String, trim: true },
    address2 : { type: Number },    
    city : { type: String, trim: true },
    state : { type: String, trim: true },
    pincode : { type: String, trim : true }
});



const UserSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    company: { type: String, trim: true, required: true },
    mobile: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    image: { type : String, trim: true, default : 'https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png' },
    altMobile: { type: String, trim: true },
    altEmail: { type: String, trim: true },
    experience: { type: Number, min: [1, "Minimum Experience Should be 1 Year"] },
    gstNum: { type: Number },
    panNum: { type: String, trim: true },
    aadharNumber: { type: Number },
    service: { type: String, trim: true },
    software: { type: String, trim: true },
    oncloud: { type: Boolean },
    role: { type: String, default: 'client', enum: ['client', 'partner', 'admin'] },
    education: Education,
    address: Address
},{ timestamps : true });


const UserModel = new mongoose.model("User", UserSchema);
export default UserModel;













