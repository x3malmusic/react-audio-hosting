import { Router } from "express";
import { check } from 'express-validator'
import { login, register, silentLogin } from "../controllers/auth";
import { verifyToken } from "../middlewares/verifyTokenMiddleware";

import {
  EMAIL_NOT_VALID,
  EMAIL_PASSWORD_EMPTY,
  PASSWORD_SHORT
} from "../helpers/errorTypes";

const router = Router();

router.post('/login',
  [check('email', EMAIL_PASSWORD_EMPTY).exists(),
  check('password', EMAIL_PASSWORD_EMPTY).exists()],
  login)

router.post('/register',
  [check('email', EMAIL_PASSWORD_EMPTY).exists(),
    check('email', EMAIL_NOT_VALID).isEmail(),
    check('password', EMAIL_PASSWORD_EMPTY).exists(),
    check('password', PASSWORD_SHORT).isLength({min: 6})
  ],
  register)

router.post('/silent-login', verifyToken, silentLogin)

export default router