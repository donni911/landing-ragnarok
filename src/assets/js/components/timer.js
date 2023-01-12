const getTimerValues = (diff) => ({
  seconds: (diff / 1000) % 60,
  minutes: (diff / (1000 * 60)) % 60,
  hours: (diff / (1000 * 3600)) % 24,
  days: (diff / (1000 * 3600 * 24)) % 30,
})

const formatDate = (value) => (value < 10 ? `0${value}` : value)

const setTimerValues = (values) => {
  Object.entries(values).forEach(([key, value]) => {
    const timerValue = document.getElementById(key)
    timerValue.innerText = formatDate(Math.floor(value))
  })
}
const startTimer = (date) => {
  const id = setInterval(() => {
    const diff = new Date(date).getTime() - new Date().getTime()

    if (diff < 0) {
      clearInterval(id)
      return
    }

    setTimerValues(getTimerValues(diff))
  }, 1000)
}

startTimer("January 1, 2023 00:00:00")

// startTimer("December 21, 2022 00:00:00")
