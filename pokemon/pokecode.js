const getAPIData = async (url) => {
    try {
        const result = await fetch(url)
        return await result.json()
    } catch (error) {
        console.error(error)
    }
}

class Pokemon {
    constructor(name, height, weight, abilities, types) {
        this.id = 2022,
        this.name = name,
        this.height = height,
        this.weight = weight,
        this.abilities = abilities,
        this.types = types
    }
}

const pokeHeader = document.querySelector('header')
const pokeGrid = document.querySelector('.pokeGrid')
const newButton = document.createElement('button')
newButton.textContent = 'New Pokemon'
pokeHeader.appendChild(newButton)
newButton.addEventListener('click', () => {
    const pokeName = prompt('Name your new Pokemon!', 'Pokey McPokeface')
    const pokeHeight = prompt('How tall is your new Pokemon?', 100)
    const pokeWeight = prompt('What is the weight of your new Pokemon?', 1000)
    const pokeAbilities = prompt('What moves does your new pokemone have? (use a comma to separate moves)')
    const pokeTypes = prompt('Pick two types for your new Pokemon! (up to two types separated by a space)')

    const newPokemon = new Pokemon(
    pokeName,
    pokeHeight,
    pokeWeight,
    makeAbilitiesArray(pokeAbilities),
    makeTypesArray(pokeTypes))
    console.log(newPokemon)
    populatePokeCard(newPokemon)
})

function makeAbilitiesArray(commaString) {
    return commaString.split(',').map((abilityName) => {
        return { ability: {name: abilityName } }
    })
}

function makeTypesArray(spacedString) {
    return spacedString.split(' ').map((typeName) => {
        return { type: {name: typeName } }
    })
}

async function loadPokemon(offset = 0, limit = 25) {
    const data = await getAPIData(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    for (const nameAndUrl of data.results) {
        const singlePokemon = await getAPIData(nameAndUrl.url)
        populatePokeCard(singlePokemon)
    }
}

function populatePokeCard(pokemon) {
    const pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    const pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => pokeCard.classList.toggle('is-flipped'))
   // populate front of card
    pokeCard.appendChild(populateCardFront(pokemon))
    pokeCard.appendChild(populateCardBack(pokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    pokemon
    const pokeFront = document.createElement('figure')
    pokeFront.className = 'cardFace front'
    const pokeImg = document.createElement('img')
    if (pokemon.id === 2022) {
        pokeImg.src = '../images/masterBall.png'
    } else {
    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
    }
    const pokeCaption = document.createElement('figcaption')
    pokeCaption.textContent = pokemon.name

    pokeFront.appendChild(pokeImg)
    pokeFront.appendChild(pokeCaption)
    return pokeFront
}

function populateCardBack(pokemon) {
    const pokeBack = document.createElement('div')
    pokeBack.className = 'cardFace back'
    const label = document.createElement('h4')
    label.textContent = 'Abilities'
    pokeBack.appendChild(label)

    const abilityList = document.createElement('ul')
    pokemon.abilities.forEach((abliityItem) => {
        const listItem = document.createElement('li')
        listItem.textContent = abliityItem.ability.name
        abilityList.appendChild(listItem)
    })
    pokeBack.appendChild(abilityList)

    return pokeBack
}

loadPokemon(0, 5)