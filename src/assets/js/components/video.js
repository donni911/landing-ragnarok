const videoWrapper = document.querySelector(".js-video")
const videoBtn = videoWrapper.querySelector(".js-video-btn")

const video = videoWrapper.querySelector("video")

let isPlay = false

const handleVideo = ({ target }) => {
  const info = target.parentElement

  isPlay = !isPlay
  info.classList.toggle("hidden", isPlay)
  target.innerText = isPlay ? "Pause" : "Play"
  isPlay ? video.play() : video.pause()
}

videoBtn.addEventListener("click", handleVideo)
