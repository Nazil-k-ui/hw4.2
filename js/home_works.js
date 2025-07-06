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
let number = 0;
const block = document.querySelector('.child_block');

const count = () => {
    number++;
    block.style.left = number + "px";

    if (number < 447) {
        requestAnimationFrame(count); 
    }
};

 window.onload = () => {
      count();
 }

// let number=0
// const count = () => {
//     number++
//     console.log(number)
//     if (number < 450) {
//         count
//     }
// }
