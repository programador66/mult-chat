import mongoose from '../database';

const UserSchema = new mongoose.Schema({
   nickName: {
      type: String,
      required: true,
      unique: true
   },
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true
   },
   data_aniversario: {
      type: String,
      required: true,
   },
   createAt: {
      type: Date,
      default: Date.now
   }
});

const User = mongoose.model('User', UserSchema);

export default User;