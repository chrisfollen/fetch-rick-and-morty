console.log('ahhhh we good')

const div = document.querySelector('.character-list')

const url = 'https://rickandmortyapi.com/api/character/?page=7'

const putCards = data => {
    console.log(data)
    data.results.forEach(character => {
        let el = document.createElement('div')
        el.className = 'card'

        let imageEl = document.createElement('div')
        imageEl.className = 'imageClass'

        let wordsEl = document.createElement('div')
        wordsEl.className = 'cardWords'

        let myImage = document.createElement('img')
        myImage.src = character.image 
        imageEl.append(myImage)

        let currentName = document.createElement('h2')
        currentName = character.name 
        wordsEl.append(currentName)

        let myStatus = document.createElement('h3')
        myStatus = character.status 
        wordsEl.append(`Status: ${myStatus}`)

        let myLocation = document.createElement('h3')
        myLocation = character.location.name
        wordsEl.append(`Last known location : ${myLocation}`)

        let myGender = document.createElement('h3')
        myGender = character.gender 
        wordsEl.append(`Gender: ${myGender}`)

        el.append(imageEl, wordsEl)
        
        div.append(el)
    })
}

fetch(url)
    .then(response => response.json())
    .then(putCards)
    .catch(error => console.log("THIS IS AN ERROR"))



