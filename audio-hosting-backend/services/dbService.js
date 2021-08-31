import Stream from "stream";
import { User } from "../models/User";
import { Song } from "../models/Song";
import { cloudinary } from "../cloudinary.config";
import { UPLOAD_FAILED } from "../helpers/errorTypes";


export const getUserByName = (name) => {
  return User.findOne({ name })
}

export const getUserById = (id) => {
  return User.findOne({ _id: id })
}

export const createUser = async (name, password) => {
  const user = new User({ name, password });
  await user.save();

  return user
}

export const uploadTrack = (file) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: '',
        upload_preset: 'ml_default',
        resource_type: "video",
        filename: file.name,
        use_filename: true,
        unique_filename: false
      },
      (error, result) => {
        if (result) resolve(result);
        else reject(UPLOAD_FAILED);
      },
    );

    const stream = new Stream.PassThrough();
    stream.end(file.data);

    stream.pipe(uploadStream);
  });
}

export const addNewSong = async (file, userId) => {
  const { url, bytes, audio,  duration, original_filename } = await uploadTrack(file);

  const song = new Song({ url, bytes, bit_rate: audio.bit_rate, duration, original_filename });
  await song.save();

  return song
}

export const getSongs = () => {
  return Song.find()
}