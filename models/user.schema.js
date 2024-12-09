import mongoose from "mongoose";



const education = new mongoose.Schema({
    qualification : { type: String, trim: true },
    qualifiedYear : { type: Number },    
    institute : { type: String, trim: true },
    additionalQualification : { type: String, trim: true }
});



const UserSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    company: { type: String, trim: true, required: true },
    mobile: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    altMobile: { type: String, trim: true },
    altEmail: { type: String, trim: true },
    experience: { type: Number, min: [1, "Minimum Experience Should be 1 Year"] },
    gstNum: { type: Number },
    panNum: { type: String, trim: true },
    aadharNumber: { type: Number },
    service: { type: String, trim: true },
    software: { type: String, trim: true },
    oncloud: { type: Boolean },
    role: { type: String, default: 'user', enum: ['user', 'partner', 'admin'] },
    education: education
},{ timestamps : true });


UserSchema.pre('save',(next) => {
    this.email = this.email.toLowerCase();
    next();
})

const UserModel = new mongoose.model("User", UserSchema);
export default UserModel;













