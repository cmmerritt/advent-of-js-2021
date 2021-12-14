// clicking on gear needs to allow you to select minutes/seconds
// need to see time change -- minutes decrement until zero and seconds decrement every second 
// how to implement?
// setTimeout function?
// when timer ends (time = 0), color of circle changes from green to red and alert message pops up 

const startButton = document.getElementsByClassName("start");

startButton[0].addEventListener('click', () => {
  startButton[0].textContent = startButton[0].textContent === "start" ? "stop" : "start";
});