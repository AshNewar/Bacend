import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const connectDB=()=>{
    mongoose.connect(process.env.MONGOURL,{useNewUrlParser:true}).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})
};
export default connectDB;