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
    let time = RandomTimer(4, 9);
    setTimeout(function() {
        body.style.backgroundColor = 'green';
        greenTimestamp = Date.now();
        waitingForGreen = true;
    }, time * 1000);
}

body.addEventListener('click', function() {
    if (!waitingForGreen) {
        startGame();
    } else {
        let reaction = Date.now() - greenTimestamp;
        alert('Your reaction time: ' + reaction + ' ms');
        waitingForGreen = false;
        body.style.backgroundColor = '';
    }
});

// Start the first round
startGame();