import Oscilloscope from "oscilloscope"
let source

export const initAnalyser = (canvasRef, audioRef) => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext)()
  if (!source) {
    source = audioContext.createMediaElementSource(audioRef)
    const scope = new Oscilloscope(source)

    source.connect(audioContext.destination)
    scope.animate(canvasRef.current.getContext("2d"))
  }
}