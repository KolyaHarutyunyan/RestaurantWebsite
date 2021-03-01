import { Schema, model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { IAuth } from './interfaces';

const AuthSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  googleId: String,
  facebookId: String,
  twitterId: String,
  password: String,
  role: String,
});

const SALT_ROUNDS = 8;
AuthSchema.pre('save', hashPassword);

/** Private methods */
async function hashPassword(next) {
  //Check if the password is changed or is new
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const hash = await bcrypt.hash(this.password, SALT_ROUNDS);
    this.password = hash;
    return next();
  } catch (err) {
    console.log(err.message);
    next(err);
  }
}

/** if the supplied password matches the user password, this function returns true and false otherwise */
AuthSchema.methods.comparePassword = comparePassword;

async function comparePassword(password: string): Promise<boolean> {
  try {
    return bcrypt.compare(password, this.password);
  } catch (err) {
    throw err;
  }
}

// export type AuthDocument = AuthEntity & Document;
export const AuthModel = model<IAuth>('auth', AuthSchema);
