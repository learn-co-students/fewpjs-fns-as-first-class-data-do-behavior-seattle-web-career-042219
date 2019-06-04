/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(date) {
  let dateArr = date.split(":")
  if(dateArr[0] < 12) {
    return "Good Morning"
  } else if(dateArr[0] > 17){
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }

  
}
/* Write your implementation of displayMessage() */

function displayMessage(str) {

 let greeting = document.querySelector("#greeting")
 greeting.innerText = str;

  

}
