/* Pomodoro Timer */
const displayOnSight = document.getElementById("minutesHeader");


//get elements 
const starter = document.getElementById("startTheEngine");
const stopper = document.getElementById("stopTheEngine");
const shortBreaker = document.getElementById("shortBreak");
const longBreaker = document.getElementById("longBreak");

let set = null;

//  functions
startPomo = () => pomodoroTimer(25 * 60); //25 Minutes 
shortBreakPomo = () => pomodoroTimer(5 * 60);//5 Minutes
longBreakPomo = () =>  pomodoroTimer(15 * 60);//15 Minutes
showStopTime = () => {
  clearInterval(set);
  set = null;
}
  pomodoroTimer = (seconds) => {
    clearInterval(set);
    const now = Date.now();
    if(!Date.now()) {
      Date.now = () => {
        return new Date().getTime(); 
      }
    }
    const before = now + seconds * 1000;
  
    showTime(seconds);
    set = setInterval(() => {
    const timeLeft = Math.round((before - Date.now()) / 1000);
    if (timeLeft < 0 ) {
      clearInterval(set);
      return;
  }
        showTime(timeLeft);    
      }, 1000)
}
  
 showTime = (seconds) => {
    const minutes = Math.floor(seconds /60);
    const secondsLeft = seconds % 60;
    const layzee_timerDisplay = `${minutes < 10 ? '0' :  ''}${minutes} : ${secondsLeft < 10 ? '0' :  ''}${secondsLeft}`;
    displayOnSight.textContent = layzee_timerDisplay;
  }