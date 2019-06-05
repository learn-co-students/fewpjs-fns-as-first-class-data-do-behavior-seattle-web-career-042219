/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  let greeting = "";
  let timeAr = timeString.split(":");
  let hours = parseInt(timeAr[0], 10);
  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours >= 12 && hours <= 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return greeting;
}

function displayMessage(greeting) {
  let greetingDiv = document.getElementById("greeting");
  greetingDiv.innerText = greeting;
}
