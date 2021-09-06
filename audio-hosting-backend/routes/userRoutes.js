import { Router } from "express";
import { verifyToken } from "../middlewares/verifyTokenMiddleware";
import { getAllSongs, createPlaylist } from "../controllers/user";

const router = Router();

router.use(verifyToken)

router.get('/songs', getAllSongs);

router.post('/create-playlist', createPlaylist);

export default router