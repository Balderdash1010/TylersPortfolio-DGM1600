import { starships } from '../data/starships.js'
import { getLastNumber } from "../utils/index.js"

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navlist')
const shipView = document.querySelector('.shipViewer')

function populateNav() {
    starships.forEach(starship => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        let listItem = document.createElement('li')
        listItem.textContent = starship.name

        anchorWrap.addEventListener('click', () => populateShipView(starship))

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
    })
}

populateNav()

function populateShipView(shipData) {

    let ShipImage = document.createElement('img')
    let shipNum = getLastNumber(shipData.url)
    ShipImage.src = `https://starwars-visualguide.com/assets/imag/starships/${shipNum}.jpg`
    shipView.appendChild(ShipImage)
}