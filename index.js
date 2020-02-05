/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string){
  let greeting = "";
  let timeArr = string.split(":");
  let hours = parseInt(timeArr[0], 10);
  if (hours >= 12 && hours <= 17) {
    greeting = "Good Afternoon";
  } else if (hours > 17) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Morning";
  }
  return greeting
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
let message = document.getElementById('greeting');
message.innerText = string
}
