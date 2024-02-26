import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI;
export const connectToMongo=async()=>{
    if(MONGODB_URI){
        try {
            await mongoose.connect(MONGODB_URI)
            console.log("connected")
            
        } catch (error) {
            console.log("unable to connect to database",error)
        }
    }
    else{
        console.log("Mongo Db URL not found")
    }

}
