const body = document.body;

function RandomTimer(min, max) { 
    // timer 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeColor() {
    //Make bg red, when bg is red, stay red for x(random) seconds
    body.addEventListener('click', function() {
        body.style.backgroundColor = '#FF9F87' 
        let time = RandomTimer(4,9);
        setTimeout(function() {
            body.style.backgroundColor = 'Green';
        }, time * 1000);
    })

}

changeColor();