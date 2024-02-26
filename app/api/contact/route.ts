import ContactModel from "@/database/model/contact.model";
import { connectToMongo } from "@/lib/mongo.lib";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    try {
        const {firstName,lastName,email}=await request.json();
        await connectToMongo();
        await ContactModel.create({firstName,lastName,email});
        await mongoose.connection.close();
        return NextResponse.json('{message:"Message sent successfully"}',{status:201});
    } catch (error) {
        console.log(error);
        await mongoose.connection.close();
        return NextResponse.json({message:"Failed to sent message"},{status:400})
    }
    
}