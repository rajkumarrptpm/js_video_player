let playBtn = document.getElementById('play-btn');
let video = document.querySelector('.video');

let isVideoPlaying = false;

// functions

// lets play or pause the video
function playOrPauseVideo() {
    if (!isVideoPlaying){
        video.play();
        isVideoPlaying = true;
        playBtn.classList.replace("fa-play","fa-pause");
    }
    else{
        video.pause();
        isVideoPlaying=false;
        playBtn.classList.replace("fa-pause","fa-play");

    }

}

function playorpause(event){
    if(event.keyCode === 32){
        playOrPauseVideo();
    }
}

// add event Listners
playBtn.addEventListener('click',playOrPauseVideo);
video.addEventListener('click',playOrPauseVideo);
document.addEventListener('keydown',playorpause);