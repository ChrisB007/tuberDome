import mongoose from 'mongoose'

const { Schema } = mongoose;

const sponsorSchema =  new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    company: {
        type: String,
        trim: true
    },
    contactName: {
        type: String,
        required: true,
        trim: true
    },
    product: {
        type: String,
        required: true,
        trim: true
    }
});

const Sponsor = mongoose.model('Sponsor', sponsorSchema);

export default Sponsor;