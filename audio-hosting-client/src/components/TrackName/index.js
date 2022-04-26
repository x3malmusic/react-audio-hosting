import { useSelector } from 'react-redux'

function TrackName() {
  const songId = useSelector(state => state.player.currentSong)
  const userSongs = useSelector(state => state.user.songs)

  const trackName = userSongs?.[songId]?.original_filename

  if (trackName) document.title = trackName
  return null
}

export default TrackName