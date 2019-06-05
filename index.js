/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  let greeting = time;
  let hour = parseInt(time.split(":")[0]);
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour <= 17) {
    greeting = "Good Afternoon";
  } else if (hour > 17) {
    greeting = "Good Evening";
  }
  return greeting;

}

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}
