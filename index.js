/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(input_time) {
  const time_array = input_time.split(":");
  let greeting = ""
  let time_hour = parseInt(time_array[0], 10);
  if (time_hour < 12) {
    greeting = "Good Morning";
  } else if (time_hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return greeting;
}

function displayMessage(greeting) {
  let greetingHeader = document.getElementById("greeting");
  greetingHeader.innerText = greeting;
}


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
