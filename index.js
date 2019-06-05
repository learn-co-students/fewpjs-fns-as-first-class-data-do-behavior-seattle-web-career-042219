/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string){
  let t = parseInt(string, 10);
  if (t < 12) {
    return "Good Morning";
  }
  else if (t < 17) {
    return "Good Afternoon";
  }
  else {
  return "Good Evening";
}
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let message = document.querySelector('#greeting')
  message.innerText = string;
}
