
function playSound(event) {
	console.log(event.keyCode);

	let drumAudio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
	let key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
	setTimeout( ()=> {
		key.classList.remove("playing");
	}, 250);
		if(drumAudio == null)
			return;
		drumAudio.currentTime = 0;
		drumAudio.play();
		key.classList.add("playing")
}


function rmTransition(event){
	if(event.propertyName !== "transform" )return;
		this.classList.remove("playing");
	
}

let keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", rmTransition));
window.addEventListener("keydown", playSound);