import mongoose from 'mongoose';
import findOrCreate from 'mongoose-findorcreate';
const { Schema } = mongoose;


const userSchema = new Schema({
  googleId:{
    type: String,
    required: true,
    unique: true
  },
  username:  {
      type: String,
      unique: true,
      trim: true,
      minlength: 3
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
  // coverPhoto: {
  //   type: String,
  //   required: true,
  // }
}, {
    timestamps: true,
}
);


userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);

export default User;