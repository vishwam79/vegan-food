import mongoose from "mongoose";

 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://vegan-food:vegan123@cluster0.aght0bj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
        console.log("DB connected")
    })
}