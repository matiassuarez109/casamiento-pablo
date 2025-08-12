// Script para el botón de música
// Asegúrate de que este archivo se incluya después de que el DOM esté cargado

document.addEventListener('DOMContentLoaded', function() {
    const musicBtn = document.getElementById('music-btn');
    const musicIcon = document.getElementById('music-icon');
    const audio = document.getElementById('bg-music');
    let isPlaying = false;
    musicBtn.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            musicBtn.classList.remove('playing');
            musicBtn.style.background = '#fff';
            musicIcon.classList.remove('fa-pause');
            musicIcon.classList.add('fa-music');
        } else {
            audio.play();
            musicBtn.classList.add('playing');
            musicBtn.style.background = '#f8d7da';
            musicIcon.classList.remove('fa-music');
            musicIcon.classList.add('fa-pause');
        }
        isPlaying = !isPlaying;
    });
});
