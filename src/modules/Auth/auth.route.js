import { Router } from "express";
import * as authRouter from "./auth.contoller.js";
const route = Router();

route.post("/signup", authRouter.signUp);
route.post("/signin", authRouter.signIn);

export default route;
