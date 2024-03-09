const width = 28;
const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score');
let score = 0;
let squares = [];


const upBtn = document.getElementById('up-btn');
const downBtn = document.getElementById('down-btn');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');


upBtn.addEventListener('click', (e) => contol(e));
downBtn.addEventListener('click', (e) => contol(e));
leftBtn.addEventListener('click', (e) => contol(e));
rightBtn.addEventListener('click', (e) => contol(e));



const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]


function createBoard() {
    for (let i = 0; i < layout.length; i++) {

        let square = document.createElement('div');

        grid.appendChild(square);

        squares.push(square);

        if (layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        } else if (layout[i] === 1) {
            squares[i].classList.add('wall');
        } else if (layout[i] === 2) {
            squares[i].classList.add('ghost-lair');
        } else if (layout[i] === 3) {
            squares[i].classList.add('power-pellet');
        }

    }
}

createBoard();
// console.log(squares);
// Starting Position of packman
let packmanCurrentIndex = 490;
squares[packmanCurrentIndex].classList.add('pacman');


function contol(e) {
    // if (e.keyCode ===  40 ) {
    //     console.log('Pressed Down');
    // }else if (e.keyCode === 38){
    //     console.log('pressedd Up');
    // }else if(e.keyCode === 37){
    //     console.log('Pressed Left');
    // }else if(e.keyCode === 39){
    //     console.log('Pressed right');
    // }

    // squares[packmanCurrentIndex].classList.remove('pacman');
    squares[packmanCurrentIndex].classList.remove('pacman');

    switch (e.keyCode) {

        case 40:
            console.log('Pressed Down');
            if (!squares[packmanCurrentIndex + width].classList.contains('ghost-lair') &&
                !squares[packmanCurrentIndex + width].classList.contains('wall') &&
                packmanCurrentIndex + width < width * width) {
                packmanCurrentIndex += width;
            }
            break;
        case 38:
            console.log('Pressed Up');
            if (
                !squares[packmanCurrentIndex - width].classList.contains('ghost-lair') &&
                !squares[packmanCurrentIndex - width].classList.contains('wall') &&
                packmanCurrentIndex - width >= 0) {
                packmanCurrentIndex -= width;
            }
            break;
        case 37:
            console.log('Pressed Left');
            if (!squares[packmanCurrentIndex - 1].classList.contains('ghost-lair') &&
                !squares[packmanCurrentIndex - 1].classList.contains('wall') &&
                packmanCurrentIndex % width !== 0) {
                packmanCurrentIndex -= 1;
            }
            if (packmanCurrentIndex === 364) {
                packmanCurrentIndex = 391
            }
            break;
        case 39:
            console.log('Pressed Right');
            if (!squares[packmanCurrentIndex + 1].classList.contains('ghost-lair') &&
                !squares[packmanCurrentIndex + 1].classList.contains('wall') &&
                packmanCurrentIndex % width < width - 1) {
                packmanCurrentIndex += 1;
            }
            if (packmanCurrentIndex === 391) {
                packmanCurrentIndex = 364
            }
            break;

    }

    switch (e.target) {
        case upBtn:
            // Handle up movement
            if (
                !squares[packmanCurrentIndex - width].classList.contains('ghost-lair') &&
                !squares[packmanCurrentIndex - width].classList.contains('wall') &&
                packmanCurrentIndex - width >= 0) {
                packmanCurrentIndex -= width;
            }
            console.log('Up');
            break;
        case downBtn:
            // Handle down movement
            if (!squares[packmanCurrentIndex + width].classList.contains('ghost-lair') &&
            !squares[packmanCurrentIndex + width].classList.contains('wall') &&
            packmanCurrentIndex + width < width * width) {
            packmanCurrentIndex += width;
        }
        console.log('down');
            break;
        case leftBtn:
            // Handle left movement
            if (!squares[packmanCurrentIndex - 1].classList.contains('ghost-lair') &&
                !squares[packmanCurrentIndex - 1].classList.contains('wall') &&
                packmanCurrentIndex % width !== 0) {
                packmanCurrentIndex -= 1;
            }
            if (packmanCurrentIndex === 364) {
                packmanCurrentIndex = 391
            }
            console.log('left');
            break;
        case rightBtn:
            // Handle right movement
            if (!squares[packmanCurrentIndex + 1].classList.contains('ghost-lair') &&
            !squares[packmanCurrentIndex + 1].classList.contains('wall') &&
            packmanCurrentIndex % width < width - 1) {
            packmanCurrentIndex += 1;
        }
        if (packmanCurrentIndex === 391) {
            packmanCurrentIndex = 364
        }
        console.log('right');
            break;
    }
    squares[packmanCurrentIndex].classList.add('pacman');
    pacDotEaten();
    powerPelletEaten()
    checkForWin();
    checkForGameOver();
}

document.addEventListener('keyup', contol);


function pacDotEaten() {
    if (squares[packmanCurrentIndex].classList.contains('pac-dot')) {

        squares[packmanCurrentIndex].classList.remove('pac-dot');
        score++;
        scoreDisplay.innerHTML = score;
    }
}


function powerPelletEaten() {
    if (squares[packmanCurrentIndex].classList.contains('power-pellet')) {

        squares[packmanCurrentIndex].classList.remove('power-pellet');
        score += 10;
        ghosts.forEach((ghost)=>{
            ghost.isScared = true;
        })
        setTimeout(unScareGhosts, 10000);
    }
}

function unScareGhosts() {
    ghosts.forEach((ghost)=>{
        ghost.isScared = false;
    })
}

class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className;
        this.startIndex = startIndex;
        this.speed = speed;
        this.currentIndex = startIndex;
        this.isScared = false;
        this.timeId = NaN;

    }
}

const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500),
];

ghosts.forEach((ghost) => {
    squares[ghost.currentIndex].classList.add(ghost.className);
    squares[ghost.currentIndex].classList.add('ghost');
})

ghosts.forEach((ghost) => {
    moveGhost(ghost);
})

function moveGhost(ghost) {
    console.log('Moved Ghost');
    const directions = [-1, +1, -width, +width];
    let direction = directions[Math.floor(Math.random() * directions.length)];
    console.log(direction);

    ghost.timeId = setInterval(() => {
        if (!squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')) {
            squares[ghost.currentIndex].classList.remove(ghost.className);
            squares[ghost.currentIndex].classList.remove("ghost", 'scared-ghost');
            ghost.currentIndex += direction;
            
            squares[ghost.currentIndex].classList.add(ghost.className);
            squares[ghost.currentIndex].classList.add("ghost");
        }else {
            direction = directions[Math.floor(Math.random() * directions.length)];
        }

        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add('scared-ghost');
        }

        if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')) {
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost' , 'scared-ghost');

            ghost.currentIndex = ghost.startIndex;
            score += 100;

            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
        }
        checkForGameOver()
    }, ghost.speed);
}

function checkForGameOver() {
    if (
        squares[packmanCurrentIndex].classList.contains('ghost') &&
        !squares[packmanCurrentIndex].classList.contains('scared-ghost')
    ) {
        ghosts.forEach((ghost)=>{
            clearInterval(ghost.timeId);
        })

        document.removeEventListener('keyup', contol);

        scoreDisplay.innerHTML = 'YOu Lose!';
    }
}

function checkForWin() {
    if (score >= 274) {
        ghosts.forEach((ghost)=>{
            clearInterval(ghost.timeId);
        })

        document.removeEventListener('keyup', contol);

        scoreDisplay.innerHTML = 'You Won!';
    }
}
// clearInterval(ghost.timeId);