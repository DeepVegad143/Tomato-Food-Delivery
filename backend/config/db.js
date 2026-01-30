import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://DeepVegad:143@cluster0.q8fenbd.mongodb.net/Tomato').then(()=>console.log('DB Conneted'));
}

