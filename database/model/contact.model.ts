import { Schema, model, models } from "mongoose";

const contactSchema= new Schema({
    firstName:String,
    lastName:String,
    email:String,
},
{
    timestamps: true
})
const ContactModel=models.contact || model('contact',contactSchema);
export default ContactModel;
