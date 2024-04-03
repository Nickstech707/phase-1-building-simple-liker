// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Selects all elements with the class "like-glyph"
const articleHearts = document.querySelectorAll(".like-glyph");

// Callback function for the like action
const likeCallback = (event) => {
  const heart = event.target;
  
  // Simulates a server call
  mimicServerCall("bogusUrl")
    .then(() => {
      // Updates the heart icon based on its current state
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch((error) => {
      // Displays error message in modal if server call fails
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() => (modal.className = "hidden"), 3000);
    });
};

// Adds click event listeners to all heart icons
articleHearts.forEach((glyph) => {
  glyph.addEventListener("click", likeCallback);
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
