import mongoose from 'mongoose';
const { Schema } = mongoose;


const contactSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
})

const Contact =  mongoose.model('Contact', contactSchema);

export default Contact;