import { asyncHandler } from "../middlewares/async";
import { NO_FILE_TO_UPLOAD } from "../helpers/errorTypes";
import { addNewSong } from "../services/dbService";

export const uploadSong = asyncHandler( async (req, res, next) => {
  if (!req.files) return next(NO_FILE_TO_UPLOAD);

  // const { userId } = req.user;
  const { song } = req.files;

  const newSong = await addNewSong(song);
  res.json(newSong)
});