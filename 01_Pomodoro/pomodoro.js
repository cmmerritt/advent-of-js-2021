// clicking on gear needs to allow you to select minutes/seconds
// need to see time change -- minutes decrement until zero and seconds decrement every second 
// how to implement?
// setTimeout function?
// when timer ends (time = 0), color of circle changes from green to red and alert message pops up 

const startButton = document.getElementsByClassName("start")[0];

const ring = document.getElementsByClassName("ring")[0];

startButton.addEventListener('click', () => {
  startButton.textContent = startButton.textContent === "start" ? "stop" : "start";
    if(ring.classList.contains("ending")) {
      ring.classList.remove("ending");
    } else {
    ring.classList.add("ending");
    };
});

// change ring color from green to red
// add already existing red ending circle css class to document class





