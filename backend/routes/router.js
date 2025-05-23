import express from "express";
import {
  loginValidation,
  signupValidation,
} from "../middlewares/authValidations.js";
import { login, signup } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/login", loginValidation, login);

router.post("/signup", signupValidation, signup);

export default router;
