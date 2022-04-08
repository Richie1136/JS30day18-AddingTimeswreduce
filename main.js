// Converting the time nodelist into an array so that i can use the map method

const time = [...document.querySelectorAll('[data-time]')]
console.log(time)

const seconds = time.map((t => t.dataset.time)).map((timecode => {
  const [mins, seconds] = timecode.split(":")
  console.log(mins, seconds)
}))
