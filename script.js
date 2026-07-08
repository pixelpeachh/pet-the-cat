const petButton = document.querySelector('.pet-button');
let happiness = 0;
const cat = document.querySelector('.cat');
const innerFill = document.querySelector('.inner-fill');
const popup = document.querySelector('.popup');
const showmeButton = document.querySelector('.showme-button');

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
        showPopup();
    } ,3000)
}

function showPopup() {
    popup.style.display = 'flex';
}

petButton.addEventListener('click', function() {
    increasePurrMeter();
    
    if (happiness < 100) {
        makeCatHappy();
    }

    if (happiness === 100) {
        makeCatPermanentlyHappy();
    }
});

showmeButton.addEventListener('click', function() {
    window.location.href = 'birthday.html';
})