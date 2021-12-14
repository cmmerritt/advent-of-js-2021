let time = 65;
setInterval(() => {
  if(time > 0) {
    time -= 1;
    const minutes = document.getElementsByClassName("minutes")[0];
    minutes.children[0].value = `${Math.floor(time / 60)}`;
    const seconds = document.getElementsByClassName("seconds")[0];
    seconds.children[0].value = `${time % 60}`;
  } 
}, 1000);

const startButton = document.getElementsByClassName("start")[0];
const ring = document.getElementsByClassName("ring")[0];

startButton.addEventListener('click', () => {
  if(startButton.textContent === "start") {
    startButton.textContent = "stop";
  } else {
    startButton.textContent = "start";
  }
});


  // startButton.textContent = startButton.textContent === "start" ? "stop" : "start";
  //   if(ring.classList.contains("ending")) {
  //     ring.classList.remove("ending");
  //   } else {
  //   ring.classList.add("ending");
  //   };

// events that will have to occur when we run timer
// - clicking start/stop button
// - clicking settings
// - selecting from settings
// - changing value of minutes
// - changing value of seconds
// set variable equal to time and make sure it hits zero (so we don't have to keep track of minutes and seconds separately)





