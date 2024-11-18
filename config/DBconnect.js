import mongoose from "mongoose";
const connectionString = process.env.MONGO_URI

const DBConnection = ( async (uri) => {
    try {
        const connectionInstance = await mongoose.connect(uri);
        console.log(`MUNIM APP:: DATABASE CONNECTED :: HOST : ${connectionInstance.connection.host} :: PORT : ${connectionInstance.connection.port}`,)
    } catch (error) {
        console.log(`DATABASE CONNECTION ERROR ::- \n`, error)
    }
})(connectionString);

export default DBConnection;

