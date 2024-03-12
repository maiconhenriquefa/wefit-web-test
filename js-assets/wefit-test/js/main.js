//------- MENU -------
const menuList = document.querySelector('.btn-group-vertical')
menuList.style.flexDirection = 'row'
menuList.style.gap = '4px'
menuList.style.whiteSpace = 'nowrap'
menuList.style.alignItems = 'inherit'

const menuListLessLastChild = menuList.querySelectorAll('.btn:not(:last-child):not(.dropdown-toggle)');
menuListLessLastChild.forEach((element) => element.style.borderRadius = '0.25rem');

const menuListLastChild = menuList.querySelectorAll('.btn:not(:first-child)');
menuListLastChild.forEach((element) => element.style.borderRadius = '0.25rem');

//------- HEADER -------
const header = document.querySelector('.jumbotron')
header.style.display = 'flex'
header.style.flexDirection = 'column'
header.style.alignItems = 'end'
header.style.backgroundColor = '#6B757E'
header.style.color = '#FFFFFF'

const lineOfHeader = header.querySelector('.my-4')
lineOfHeader.style.width = '100%'
lineOfHeader.style.color = '#BABBBE'

const descriptionHeader = header.querySelector('.my-4 + p')
descriptionHeader.style.textAlign = 'end'

const buttonHeader = header.querySelector('.btn')
buttonHeader.style.backgroundColor = '#28A844'
buttonHeader.style.borderColor = '#28A844'

//------- CARDS -------
const cardsElementList = document.querySelectorAll('.card')
const cardsParentElement = Array.from(document.querySelectorAll('.card')).map(element => element.parentElement)

function reorderCards ([...elements]) {
    cardsParentElement.forEach((cardElement, index) => {
        cardElement.appendChild(cardsElementList[elements[index]])  
    })
}

reorderCards([3,0,2,1])

const animalCardButton= document.querySelectorAll('.card > .card-body > .btn')[1]
animalCardButton.style.backgroundColor = '#28A844'
animalCardButton.style.borderColor = '#28A844'

//------- LIST -------
const listGroup = document.querySelector('.list-group')

const listGroupItems = document.querySelectorAll('.list-group > .list-group-item')
listGroupItems.forEach(element => element.classList.remove('active'))

const listItem = listGroupItems[0]

const fourthListItem = listItem.cloneNode(true);
fourthListItem.textContent = "Quarto item"
fourthListItem.classList.add('active')

const fifthListItem = listItem.cloneNode(true);
fifthListItem.textContent = "Quinto item"

listGroup.appendChild(fourthListItem)
listGroup.appendChild(fifthListItem)
