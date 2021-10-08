import Stream from "stream";
import { User } from "../models/User";
import { Song } from "../models/Song";
import { Playlist } from "../models/Playlist";
import { Settings } from "../models/Settings";
import { cloudinary } from "../cloudinary.config";
import { UPLOAD_FAILED, USER_NOT_FOUND, FILE_EXIST, PLAYLIST_NOT_FOUND } from "../helpers/errorTypes";


export const getUserByEmail = (email) => {
  return User.findOne({ email }).populate('songs').populate('playlists').populate("settings", "defaultVolume rememberLastSong")
}

export const getPlaylistById = (id) => {
  return Playlist.findOne({ _id: id })
}

export const getUserSettingsById = (id) => {
  return Settings.findOne({ owner: id })
}

export const getUserById = (id) => {
  return User.findOne({ _id: id })
}

export const createUser = async (email, password) => {
  const user = new User({ email, password })
  await user.save()

  const userSettings = new Settings()
  userSettings.owner = user._id
  await userSettings.save()

  user.settings = userSettings._id
  await user.save().then(user => user.populate('settings').execPopulate())

  return user
}

export const uploadTrack = (file) => {
  return new Promise((resolve, reject) => {
    try {
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
    } catch (e) {
      reject(e)
    }
  });
}

export const addNewSong = async (file, userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await getUserById(userId);
      if (!user) return reject(USER_NOT_FOUND)

      const { url, bytes, audio, duration, original_filename, overwritten } = await uploadTrack(file);
      if (overwritten) return reject(FILE_EXIST)

      const song = new Song({ url, bytes, bit_rate: audio.bit_rate, duration, original_filename, owner: userId });
      await song.save();

      user.songs.push(song);
      await user.save();

      resolve(song);
    } catch (e) {
      reject(e)
    }
  })
}

export const createNewPlaylist = async (userId, name, songsArray) => {
  return new Promise(async (resolve, reject) => {
    const user = await getUserById(userId);
    if (!user) return reject(USER_NOT_FOUND);

    const playlist = new Playlist({ owner: userId, name, songs: songsArray });
    await playlist.save();

    user.playlists.push(playlist._id)
    await user.save();

    resolve(playlist)
  })
}

export const saveUserSettings = async (userId, settings) => {
  return new Promise(async (resolve, reject) => {
    const user = await getUserById(userId);
    if (!user) return reject(USER_NOT_FOUND);

    user.name = settings.name

    await user.save()
    resolve(user)
  })
}

export const saveUserPlayerSettings = async (userId, settings) => {
  return new Promise(async (resolve, reject) => {
    const userSettings = await getUserSettingsById(userId);
    if (!userSettings) return reject(USER_NOT_FOUND);

    userSettings.defaultVolume = settings.defaultVolume || 50
    userSettings.rememberLastSong = settings.rememberLastSong || false

    await userSettings.save()
    resolve(userSettings)
  })
}

export const editUserPlaylist = async (id, songs) => {
  return new Promise(async (resolve, reject) => {
    const playlist = await getPlaylistById(id);
    if (!playlist) return reject(PLAYLIST_NOT_FOUND);

    playlist.songs = songs

    await playlist.save()
    resolve(playlist)
  })
}