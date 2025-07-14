// phone block

const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick =() => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML ="OK"
        phoneResult.style.color='green'
    }
        else {
            phoneResult.innerHTML ="ERROR"
            phoneResult.style.color="red"
        }
    }

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabParent =document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContentBlocks.forEach((item) =>{
        item.style.display ='none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (i=0) => {
    tabContentBlocks[i].style.display='block'
    tabs[i].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, index) => {
            if (event.target === tab) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}

let tabIndex = 0;

const autoTabSlider = (i=0) => {
    setInterval(() => {
        tabIndex = (tabIndex + 1) % tabContentBlocks.length;
        hideTabContent();
        showTabContent(tabIndex);
    }, 3000); 
};

autoTabSlider(); 

addEventListener('scroll')
removeEventListener('scroll')