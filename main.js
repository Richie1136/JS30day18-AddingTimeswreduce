// Converting the time nodelist into an array so that i can use the map method

const time = [...document.querySelectorAll('[data-time]')]
console.log(time)

const seconds = time.map((t => t.dataset.time)).map((timecode => {
  const [mins, seconds] = timecode.split(":")
  // console.log(mins, seconds)
  let minutes = parseInt(mins)
  let sec = parseInt(seconds)
  return (minutes * 60) + sec
})).reduce((total, videoSec) => total + videoSec)

let secondsLeft = seconds;
const hours = Math.floor((secondsLeft / 3600))


// % === remander 
secondsLeft = secondsLeft % 3600

console.log(secondsLeft)

const mins = Math.floor(secondsLeft / 60)

secondsLeft = secondsLeft % 60

console.log(hours, mins, secondsLeft)