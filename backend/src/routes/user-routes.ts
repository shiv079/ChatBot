import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controllers";
import {signupValidator, validate} from "../utils/validators.js";

const  userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(signupValidator), userSignup);

export default userRoutes;