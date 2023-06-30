var audio = document.getElementById('audioBack');
var playPauseButton = document.getElementById('playPauseBtn');
var pause = document.getElementById('pause')
var play = document.getElementById('play')
var jazz = document.getElementById('jazz')
var lofi = document.getElementById('lofi')
var rock = document.getElementById('rock')
var pop = document.getElementById('pop')
var isPlaying = false;


playPauseButton.addEventListener('click', function() {
  if (isPlaying) {
    audio.pause();
    
    pause.classList.add('d-none')
    pause.classList.remove('d-block')
    play.classList.add('d-block')
    play.classList.remove('d-none')
  } else {
    audio.play();
    pause.classList.add('d-block')
    pause.classList.remove('d-none')
    play.classList.add('d-none')
    play.classList.remove('d-block')
  }
  isPlaying = !isPlaying;
});

jazz.addEventListener('click',function(){
  audio.setAttribute('src','music/jazz.mp3')
})

lofi.addEventListener('click', function(){
  audio.setAttribute('src','https://youtu.be/cePfohVuD4I')
})
pop.addEventListener('click', function(){
  audio.setAttribute('src','music/pop.mp3')
})

rock.addEventListener('click', function(){
  audio.setAttribute('src','music/rock.mp3')
})