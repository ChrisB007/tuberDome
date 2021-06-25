import mongoose from 'mongoose';
const { Schema } = mongoose;

const businessSchema =  new Schema({
    campaign: {type: String, required: true},
    full_name: {type: String, required: true},
    email: {type: String, required: true},
    company: {type: String, required: true},
    Product: {type: String, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true},
    start_date: { type: Date, default: Date.now, required: true },
    end_date: { type: Date, default: Date.now, required: true }
}, 
{timestamps: true})

const Business = mongoose.model('Business', businessSchema);

module.exports =Business;