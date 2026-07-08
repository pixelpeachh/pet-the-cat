const petButton = document.querySelector('.pet-button');
let happiness = 0;
const cat = document.querySelector('.cat');
const innerFill = document.querySelector('.inner-fill');
const popup = document.querySelector('.popup');
const showmeButton = document.querySelector('.showme-button');

const clickSound = new Audio('assets/click.mp3');
const sparkleSound = new Audio('assets/sparkles.mp3');
const popSound = new Audio('assets/pop.mp3');

function increasePurrMeter() {
    if (happiness < 100) {
        happiness += 25;
        innerFill.style.width = `${happiness}%`;
    } 
}

function makeCatHappy() {
    cat.classList.add('happy');

    /* setTimeout delays the code written inside for given seconds */
    setTimeout(function() {
        cat.classList.remove('happy');
    } ,2000)
}

function makeCatPermanentlyHappy() {
    cat.classList.add('permanent-happy');

    setTimeout(function() {
        popSound.currentTime = 0;
        popSound.play();
        showPopup();
    } ,2000)
}

function showPopup() {
    popup.style.display = 'flex';
}

petButton.addEventListener('click', function() {
    clickSound.play();
    increasePurrMeter();
    
    if (happiness < 100) {
        makeCatHappy();
    }

    if (happiness === 100) {
        sparkleSound.currentTime = 0;
        sparkleSound.play();
        makeCatPermanentlyHappy();
    }
});

showmeButton.addEventListener('click', function() {
    clickSound.currentTime = 0;
    clickSound.play();
    setTimeout(function() {
        window.location.href = 'birthday.html';
    }, 300)
})