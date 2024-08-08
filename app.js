const pomodoroApp = document.querySelector("#pomodoroApp");
const leapYearChecker = document.querySelector("#leapYearChecker");
const button = document.querySelectorAll(".links button");

function navigateTo(route) {
  if (route == "pomodoroApp") {
    leapYearChecker.classList.remove("visible");
    pomodoroApp.classList.add("visible");
    button[1].classList.remove("secondary");
    button[0].classList.add("secondary");
  }
  if (route == "leapYearChecker") {
    pomodoroApp.classList.remove("visible");
    leapYearChecker.classList.add("visible");
    button[1].classList.add("secondary");
    button[0].classList.remove("secondary");
  }
}