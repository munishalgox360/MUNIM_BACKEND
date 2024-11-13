import mongoose from "mongoose";



const education = new mongoose.Schema({
    qualification : {
        type : String,
        trim : true
    },
    qualifiedYear : {
        type : Number
    },
    institute : {
        type : String,
        trim : true
    },
    additionalQualification : {
        type : String,
        trim : true
    }
});



const UserSchema = new mongoose.Schema({
    userName : {
        type : String,
        trim : true,
        required : true
    },
    companyName : {
        type : String,
        trim : true,
        required : true
    },
    mobile : {
        type : String,
        trim : true,
        required : true
    },
    altMobile : {
        type : String,
        trim : true
    },
    email : {
        type : String,
        trim : true,
        required : true
    },
    altEmail : {
        type : String,
        trim : true
    },
    password : {
        type : String,
        trim : true
    },//-----------------//
    experience : {
        type : Number
    },
    gstNum : {
        type : Number
    },
    panNum : {
        type : String,
        trim : true
    },
    aadharNum : {
        type : Number
    },
    education : education
},{ timestamps : true });


const UserModel = new mongoose.model("User", UserSchema);
export default UserModel;













