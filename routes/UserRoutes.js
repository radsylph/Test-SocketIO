import Express from "express";
import { landingPage } from "../controllers/UserControllers.js";
const router = Express.Router();

router.get("/", landingPage);

export default router;
