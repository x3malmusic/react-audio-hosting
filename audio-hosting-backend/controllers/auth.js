import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from 'express-validator'
import { asyncHandler } from "../middlewares/async";
import { createUser, getUserByEmail } from "../services/dbService"
import {
  USER_NOT_FOUND,
  USER_EXIST,
  EMAIL_PASSWORD_WRONG,
} from "../helpers/errorTypes";

export const register = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(errors.array()[0].msg)

  const candidate = await getUserByEmail(email);
  if (candidate) return next(USER_EXIST);

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await createUser(email, hashedPassword);

  const { __v, password: p, ...data } = user.toObject();

  const token = jwt.sign({ userId: user.id, email }, process.env.JWT_SECRET, { expiresIn: "24h" });
  res.send({ user: data, token });
});

export const login = asyncHandler( async (req, res, next) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);
  if (!user) return next(USER_NOT_FOUND);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return next(EMAIL_PASSWORD_WRONG);

  const { __v, password: p, ...data } = user.toObject();

  const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET,{ expiresIn: "24h" });
  res.send({ user: data, token });
});

export const silentLogin = async (req, res, next) => {
  const { email } = req.user;

  const user = await getUserByEmail(email).populate('playlists');
  if (!user) return next(USER_NOT_FOUND);

  const { __v, password: p, ...data } = user.toObject();

  res.send(data)
}
