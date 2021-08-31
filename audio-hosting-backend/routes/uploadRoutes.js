import { Router } from "express";
import fileUpload from "express-fileupload";
import { verifyToken } from "../middlewares/verifyTokenMiddleware";
import { uploadSong } from "../controllers/upload";

const router = Router();

const uploadOptions = {
  uploadTimeout: 10000,
}

router.post('/', fileUpload(uploadOptions), uploadSong);

// router.get('/:id', getSong);

export default router