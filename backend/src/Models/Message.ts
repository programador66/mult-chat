import mongoose from '../database';

const MessageSchema = new mongoose.Schema({
   nickName: {
      type: String,
      required: true,
   },
   room: {
      type: String,
   },
   msg: {
      type: String,
      required: true,
   },
   createAt: {
      type: Date,
      default: Date.now
   }
});

const User = mongoose.model('Message', MessageSchema);

export default User;