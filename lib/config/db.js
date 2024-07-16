import mongoose from "mongoose";

export const ConnectDB =async()=>{
    await mongoose.connect('mongodb+srv://lilyRoh:ZKwJJpgC0CVdmUgL@cluster0.whv6ppl.mongodb.net/blog-app')
console.log("DB connected")
}