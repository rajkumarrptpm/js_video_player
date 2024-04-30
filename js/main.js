let playBtn = document.getElementById('play-btn');
let video = document.querySelector('.video');
let progressBar = document.querySelector('.progress-bar');
let  progressRange = document.querySelector('.progress-range');

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
    let currentTime = event.target.currentTime;
    let duration = event.target.duration;
    progressBar.style.cssText =`
    width: ${(currentTime/duration)*100}%;

    `;

}

function updateSeekBar(event){
    let calculateWidth = progressRange.getBoundingClientRect();
    console.log(calculateWidth);
    // console.log(event.target);
    let currentPoint = event.offsetX;
    // let progressbarWidth = event.target.clientWidth;
    let progressbarWidth = this.clientWidth;// using this method(1st)
    let currentRange = (currentPoint / progressbarWidth) * video.duration;
    video.currentTime = currentRange;
}


// add event Listners
playBtn.addEventListener('click',playOrPauseVideo);
video.addEventListener('click',playOrPauseVideo);
document.addEventListener('keydown',playOrPauseSpace);

// progress bar
video.addEventListener('timeupdate',updateProgressbar);
progressRange.addEventListener('click',updateSeekBar);