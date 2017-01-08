import mongoose from "mongoose"
import { mongooseDbConfig } from "../config/config"

mongoose.connect(mongooseDbConfig.url,(err)=>{
    if(!err){
        console.log("connect success")
    }
});

const teacherSchema = mongoose.Schema({
   name:{
       type:String,
       required:true
   }
});


export const Teacher = mongoose.model("teacher",teacherSchema);