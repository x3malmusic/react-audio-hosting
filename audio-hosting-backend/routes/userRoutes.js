import { Router } from "express";
import { verifyToken } from "../middlewares/verifyTokenMiddleware";
import { getAllSongs, createPlaylist, saveSettings, editPlaylist } from "../controllers/user";

const router = Router();

router.use(verifyToken)

router.get('/songs', getAllSongs);

router.post('/playlist', createPlaylist);
router.put('/playlist', editPlaylist);
router.patch('/playlist', editPlaylist);

router.post('/settings', saveSettings);

export default router