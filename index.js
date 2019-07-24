/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time){
  if ((time.match(/^([0-9]?|1[0-1]):[0-5][0-9]/)) != null ){
    return "Good Morning"
  } else if ((time.match(/^1[2-6]:[0-5][0-9]/)) != null){
    return "Good Afternoon"
  } else if ((time.match(/^1([7-9]|2[0-2]):[0-5][0-9]/)) != null){
    return "Good Evening"
  } else {
    return time
  }
}

function displayMessage(test){
  document.getElementById("greeting").innerText = "TEST"
}


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
