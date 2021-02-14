import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  created: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  bcrypt.hash(user.password, 10, (_, encrypted) => {
    user.password = encrypted;
    return next();
  });
});

export default mongoose.model('User', UserSchema);
