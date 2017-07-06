function playSound(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return; //stops function running if hit key with no associated audio
    console.log(audio);
    audio.currentTime = 0; //rewinds audio to start so can play sound again before finished
    audio.play();
    key.classList.add('playing'); //adds animation via CSS class when key pressed
};

function removeTransition(event){
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
