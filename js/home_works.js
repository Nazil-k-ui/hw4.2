// phone block

const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const regExp = /^[a-zA-Z0-9._%+-]{3,}@gmail\.com$/;

gmailButton.onclick =() => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML ="OK"
        gmailResult.style.color='green'
    }
        else {
            gmailResult.innerHTML ="ERROR"
            gmailResult.style.color="red"
        }
}


//animation block
// let number = 0;
// const block = document.querySelector('.child_block');
// const parentBlock = document.querySelector('.parent_block')

const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

let positionX = 0;
let positionY = 0;
let direction = 'right';

const offsetWidth = parentBlock.clientWidth - childBlock.clientWidth;
const offsetHeight = parentBlock.clientHeight - childBlock.clientHeight;

const moveBlock = () => {
    if (direction === 'right') {
        if (positionX < offsetWidth) {
            positionX++;
        } else {
            direction = 'down';
        }
    } else if (direction === 'down') {
        if (positionY < offsetHeight) {
            positionY++;
        } else {
            direction = 'left';
        }
    } else if (direction === 'left') {
        if (positionX > 0) {
            positionX--;
        } else {
            direction = 'up';
        }
    } else if (direction === 'up') {
        if (positionY > 0) {
            positionY--;
        } else {
            direction = 'right';
        }
    }

    childBlock.style.left = `${positionX}px`;
    childBlock.style.top = `${positionY}px`;

    requestAnimationFrame(moveBlock);
};

moveBlock();

// const count = () => {
//     number++;
//     block.style.left = number + "px";

//     if (number < 447) {
//         requestAnimationFrame(count); 
//     }
// };

//  window.onload = () => {
//       count();
//  }


// let number=0
// const count = () => {
//     number++
//     console.log(number)
//     if (number < 450) {
//         count
//     }
// }

//ДЗ 2

const secondsBlock = document.querySelector('#seconds')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

let seconds = 0
let interval = null

startBtn.onclick = () => {
    if ( interval !== null ) return
    interval = setInterval ( () => {
        seconds++
        secondsBlock.innerText = seconds
    }, 1000)
}

stopBtn.onclick = () => {
    clearInterval(interval)
    interval = null
}

resetBtn.onclick = () => {
    clearInterval(interval)
    seconds=0
    secondsBlock.innerText=seconds
    interval=null
}

