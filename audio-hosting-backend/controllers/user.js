import { asyncHandler } from "../middlewares/async";
import { getSongs } from "../services/dbService";

export const getAllSongs = asyncHandler(async (req, res, next) => {
  // const { userId } = req.user
  const songs = await getSongs()
  res.json(songs)
})