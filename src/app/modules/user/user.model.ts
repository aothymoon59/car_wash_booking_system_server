import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;

  return user;
};

export const User = model<TUser>('User', userSchema);
