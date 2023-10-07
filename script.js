console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3")
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songsItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Abhi Abhi", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Alvida", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Aur Tanha", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Bas Ek Pal", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Dil Ibadat", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Hai Junoon", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "I Am In Love", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Kal Ki Hi Baat Hai", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Kya Mujhe Pyar Hai", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Labon Ko", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Mat Aazma Re", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Soniye", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Tu Hi Meri Shab Hai", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Tujhi Mein", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Zara Sa", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
  
]

songsItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // Update seeker
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    // console.log(progress);
    myProgressBar.value = progress;


})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })    


}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${songIndex+1}.mp3';
        mastrerSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove(fa-play-circle);
        masterPlay.classList.add(fa-pause-circle);

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=14){
        songIndex = 0
    }
    else{
        songIndex += 1;

    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    mastrerSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;

    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    mastrerSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

