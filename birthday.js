const clickSound = new Audio('assets/click.mp3');
const birthdaySound = new Audio("assets/happy-birthday.mp3");
birthdaySound.loop = true;

const overlay = document.querySelector(".overlay");
const revealButton = document.querySelector(".revealbutton");
const birthdayContent = document.querySelector('.birthday-content');

revealButton.addEventListener('click', function () {
    clickSound.currentTime = 0;
    clickSound.play();
    
    birthdaySound.play();
    overlay.style.display = 'none';
    birthdayContent.style.display = 'flex';
});