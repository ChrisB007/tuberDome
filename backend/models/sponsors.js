import mongoose from 'mongoose'

const { Schema } = mongoose;

const sponsorSchema =  new Schema({
    website: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    about: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    logo: {
        type: String,
        trim: true
    },
    coverPhoto: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    City: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    zip: {
        type: Number,
        required: true,
        trim: true
    }
});

const Sponsor = mongoose.model('Sponsor', sponsorSchema);

export default Sponsor;