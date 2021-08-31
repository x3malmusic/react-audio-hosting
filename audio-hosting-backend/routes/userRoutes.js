import { Router } from "express";
import { verifyToken } from "../middlewares/verifyTokenMiddleware";
import { getAllSongs } from "../controllers/user";

const router = Router();

router.get('/songs', getAllSongs);

export default router