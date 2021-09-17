import { Router } from "express";
import { verifyToken } from "../middlewares/verifyTokenMiddleware";
import { createPlaylist, saveSettings, editPlaylist, savePlayerSettings } from "../controllers/user";

const router = Router();

router.use(verifyToken)

router.post('/playlist', createPlaylist);
router.put('/playlist', editPlaylist);
router.patch('/playlist', editPlaylist);

router.post('/settings', saveSettings);
router.post('/player-settings', savePlayerSettings);

export default router