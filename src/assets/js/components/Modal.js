import values from '../../data.json'
import { classes } from '../Utilities/Classes'

let valuesJson = values.values

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const modalTitle = document.querySelector('.modal-version')
const modalPrice = document.querySelector('.modal-total__price')
const modalClose = document.querySelector('.modal-close')
const buyButton = document.querySelectorAll('.buy-button')

const handleBuyButton = ({ currentTarget: target }) => {
    const { value } = target.dataset

    if (!value) return

    const { price, title } = valuesJson[value]

    modalTitle.innerText = title
    modalPrice.innerText = `${price}$`
    modal.classList.add(classes.opened)
    overlay.classList.add(classes.opened)
}

const closeModal = () => {
    modal.classList.remove(classes.opened)
    overlay.classList.remove(classes.opened)
}

modalClose.addEventListener('click', closeModal)

buyButton.forEach((btn) => btn.addEventListener('click', handleBuyButton))
