const body = document.body;

let waitingForGreen = false;
let greenTimestamp = 0;

function RandomTimer(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
    body.style.backgroundColor = '#FF9F87';
    waitingForGreen = false;
    let time = RandomTimer(4, 7);
    setTimeout(function() {
        body.style.backgroundColor = 'green';
        greenTimestamp = Date.now();
        waitingForGreen = true;
    }, time * 1000);
}

const result = document.querySelector('.result');

body.addEventListener('click', function() {
    if (!waitingForGreen) {
        startGame();
        if (result) {
            result.textContent = 'Wait for Green';
        }
    } else {
        let reaction = Date.now() - greenTimestamp;
        if (result) {
            result.textContent = 'Your reaction time: ' + reaction + ' ms';
        }
        waitingForGreen = false;
        body.style.backgroundColor = '';
    }
});

// Start the first round
startGame();