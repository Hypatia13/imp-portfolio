var musicPlayer = document.getElementById("musicPlayer");

function playMusic() {
	musicPlayer.play();
}

function pauseMusic () {
	musicPlayer.pause();
}

function changeVolume() {
	musicPlayer.volume = document.getElementById("volumeCtrl").value;
}