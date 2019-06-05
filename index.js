/* Given Code, don't edit */

function handleClick(e) {
 
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(string){
  let t = parseInt(string.split('').slice(0,2).join(''))
  if (t < 12){
    return 'Good Morning';
  }
  else if (t < 17 ) {
    return'Good Afternoon';
  }
  else{
    return 'Good Evening';
  }
}

function displayMessage(f){
  const message = document.getElementById('greeting')
  console.log(message)
  message.textContent = f
}

  