import Oscilloscope from "oscilloscope"

export const initAnalyser = (canvasRef, audioRef) => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext)()
  const source = audioContext.createMediaElementSource(audioRef)
  const scope = new Oscilloscope(source)

  source.connect(audioContext.destination)
  scope.animate(canvasRef.current.getContext("2d"))
}