/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let hour = time.split(':', 2)[0];
  let greeting = document.getElementById('greeting');


  if (hour < 12) {
    return "Good Morning"
  }
  else if (hour >= 12 && hour < 17) {
    return "Good Afternoon"
  }
  else if (hour >= 17 && hour <= 24) {
    return "Good Evening"
  }
  else {
    return "That is an invalid input."
  }
}

function displayMessage(greeting) {

  document.getElementById('greeting').innerText = greeting

}
