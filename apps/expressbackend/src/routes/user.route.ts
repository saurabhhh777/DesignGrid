import express, { RequestHandler, Router } from "express";

const router: Router = express.Router();
import { Signup, Signin, Signout } from "../controllers/user.controller";

router.route("/signup").post(Signup as RequestHandler);
router.route("/signin").post(Signin as RequestHandler);
router.route("/signout").post(Signout as RequestHandler);

//create the email :

export default router;