
// phone block

const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = "ERROR"
        phoneResult.style.color = "red"
    }
}

// Tabs

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContentBlocks[i].style.display = 'block'
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

let tabIndex = 0

const autoTabSlider = () => {
    setInterval(() => {
        tabIndex = (tabIndex + 1) % tabContentBlocks.length
        hideTabContent()
        showTabContent(tabIndex)
    }, 3000)
}

autoTabSlider()

// Card Switcher

const cardBlock = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

let numId = 0
const maxId = 200

function fetchAndDisplayCard(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            const { title, id, completed } = data
            cardBlock.innerHTML = `
              <p>${title}</p>
              <p>Completed: ${completed}</p>
              <span>ID: ${id}</span>
            `
        })
        .catch(() => {
            cardBlock.innerHTML = `<p>Error loading data</p>`
        })
}


fetchAndDisplayCard(numId)

btnNext.onclick = () => {
    numId++
    if (numId > maxId) numId = 1
    fetchAndDisplayCard(numId)
}

btnPrev.onclick = () => {
    numId--
    if (numId < 1) numId = maxId
    fetchAndDisplayCard(numId)
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        console.log('Posts:', posts)
    })
    .catch(err => {
        console.error('Error loading posts:', err)
    })
