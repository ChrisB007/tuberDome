import mongoose from 'mongoose';
const { Schema } = mongoose;


const registerSchema = new Schema({
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
},
{timestamps: true}

)

const Register = mongoose.model("Register", registerSchema);

export default Register;