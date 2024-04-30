let playBtn = document.getElementById('play-btn');
let video = document.querySelector('.video');
let progressBar = document.querySelector('.progress-bar')

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

function playOrPauseSpace(event){
    if(event.keyCode === 32){
        playOrPauseVideo();
    }
}


function updateProgressbar(event){
    console.log(event.target.currentTime,event.target.duration);
    progressBar.style.cssText =`
    width: ${((event.target.currentTime/event.target.duration)*100)}%;

    `;

}


// add event Listners
playBtn.addEventListener('click',playOrPauseVideo);
video.addEventListener('click',playOrPauseVideo);
document.addEventListener('keydown',playOrPauseSpace);

// progress bar
video.addEventListener('timeupdate',updateProgressbar)