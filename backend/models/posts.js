import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({

    userId : {
        type: String,
        required: true,
    },
    description: {
        type: String,
        max: 500
    },
    image: {
        type: String,
    },
    likes: {
        type: Array,
        default: []
    },
},
{timestamps: true}
)

const Posts = mongoose.model('Posts', postSchema)

export default Posts;