
let userInput = 0


function makeGrid(numGrid) {

    if ()
    const widthHeight = 850 / numGrid;
    const widthHeightPx = widthHeight.toString() + 'px';
    const sketchpad = document.querySelector('.sketch-pad');
    console.log(sketchpad);

    for (let i = 0; i < numGrid; i++) {
        const parentDiv = document.createElement('div');
        // parentDiv.setAttribute('style', `width: ${850}; height: ${widthHeightPx};`);
        parentDiv.classList.toggle('parentDiv');
        sketchpad.appendChild(parentDiv);

        for (let j = 0; j < numGrid; j++) {
            const div = document.createElement('div');
            div.setAttribute('style', `width: ${widthHeightPx}; height: ${widthHeightPx};`);
            div.classList.toggle('childDiv');
            parentDiv.appendChild(div);
        }
    }

}

// tests for makeGrid function.
// makeGrid(16);



function getUserInput() {

    userInput = parseInt(prompt("Enter the sketchpad size. (e.g. for a 16*16 size, enter 16. DO NOT ENTER MORE THAN 100.", "16"));
    console.log(input);

    while (input > 100) {

        userInput = parseInt(prompt("DO NOT ENTER MORE THAN 100. Try again, you can do it", ));
        console.log(input);

        if (input < 100) {
            break;
        };
    }
    makeGrid(userInput);

}


const input = document.querySelector('.input');

input.addEventListener('click', getUserInput);