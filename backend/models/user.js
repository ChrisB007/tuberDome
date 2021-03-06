import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
  channel_Name : {
      type: String,
      required: true,
      min:3,
      max: 20,
      unique: true
  },
  url : {
        type: String,
        required: true,
        unique: true
    },
  description : {
        type: String,
        required: true,
    },
  email: {
      type: String,
      required: true,
      unique: true,
      max:50
  },
  password: {
      type: String,
      required: true,
      min: 6
  },
  profileImage: {
      type: String,
      default: " "
  },
  coverImage: {
      type: String,
      default: " "
  },
  followers: {
      type: Array,
      default: []
  },
  following: {
      type: Array,
      default: []
  },
  isAdmin: {
      type: Boolean,
      default: false
  }
},
{timestamps: true}

)

const User = mongoose.model("User", userSchema);

export default User;