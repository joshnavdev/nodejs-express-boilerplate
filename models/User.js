import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: String,
    age: Number,
  },
  { timestamps: true },
);

mongoose.model('User', UserSchema);
