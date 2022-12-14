numClicks = 0;
numItems = 0;


function getUserInput() {

    let userInput = parseInt(prompt("Enter the sketchpad size. (e.g. for a 16*16 size, enter 16. DO NOT ENTER MORE THAN 100.", "16"));
    console.log(userInput);

    while (userInput > 100) {

        userInput = parseInt(prompt("DO NOT ENTER MORE THAN 100. Try again, you can do it", ));
        console.log(userInput);

        if (userInput < 100) {
            break;
        };
    }
    return userInput;
}


function removeExistingDom() {

    if (numClicks > 1) {
        const sketchpad = document.querySelector('.sketch-pad');
        for (let i = 0; i < numItems; i++) {
            const parentDiv = document.querySelector('.parentDiv');
            sketchpad.removeChild(parentDiv);
        }
    }
}


function stopDraw(e) {
    e.target.classList.remove('draw');
}


function drawAsMove(e) {
    console.log(e);
}

function drawSketch(e) {
    e.target.classList.add('draw');
}

function activateHover() {

    const buttons = document.querySelectorAll('.childDiv');

    buttons.forEach(button => {
        button.addEventListener('mouseover', drawSketch);
        // button.addEventListener('mouseout', removeSketch)
    });
}


function makeGrid(e) {
    numClicks++;

    // remove existing DOM.
    removeExistingDom();
    const numGrid = getUserInput();
    
    const widthHeight = 400 / numGrid;
    const widthHeightPx = widthHeight.toString() + 'px';
    const sketchpad = document.querySelector('.sketch-pad');

    for (let i = 0; i < numGrid; i++) {
        const parentDiv = document.createElement('div');
        parentDiv.classList.toggle('parentDiv');
        sketchpad.appendChild(parentDiv);

        for (let j = 0; j < numGrid; j++) {
            const div = document.createElement('div');
            div.classList.toggle('childDiv');
            parentDiv.appendChild(div);
        }
    }
    activateHover();
    numItems = numGrid;
}

// tests for makeGrid function.
// makeGrid(16);





const input = document.querySelector('.input');

input.addEventListener('click', makeGrid);


