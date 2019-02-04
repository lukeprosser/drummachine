// Runs when keydown event fires
function playSound(e) {
  // Store current keyCode
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if(!audio) return; // Stop the function from running altogether
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add('playing');
}

// Remove playing class to reset
function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // Skip if not a transform
  this.classList.remove('playing');
}

// Store node list of all keys
const keys = document.querySelectorAll('.key');
// Listen for transitionend before removing playing class
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Listen for keydown event and run playSound
window.addEventListener('keydown', playSound);