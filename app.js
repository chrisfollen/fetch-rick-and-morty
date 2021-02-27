console.log('ahhhh we good')

const div = document.querySelector('.character-list')

const url = 'https://rickandmortyapi.com/api/character/?page=7'

const putCards = data => {
    console.log(data)
    data.results.forEach(character => {
        const el = document.createElement('div')
        el.className = 'card'

        const imageEl = document.createElement('div')
        imageEl.className = 'imageClass'

        const wordsEl = document.createElement('div')
        wordsEl.className = 'cardWords'

        const myImage = document.createElement('img')
        myImage.src = character.image 
        imageEl.append(myImage)

        const currentName = document.createElement('h2')
        currentName.textContent = `Name: ${character.name}` 
        wordsEl.append(currentName)

        const myStatus = document.createElement('h3')
        myStatus.textContent = `Status: ${character.status}` 
        wordsEl.append(myStatus)

        const myLocation = document.createElement('h3')
        myLocation.textContent = `Location: ${character.location.name}`
        wordsEl.append(myLocation)

        const myGender = document.createElement('h3')
        myGender.textContent = `Gender: ${character.gender}` 
        wordsEl.append(myGender)

        el.append(imageEl, wordsEl)
        
        div.append(el)
    })
}

fetch(url)
    .then(response => response.json())
    .then(putCards)
    .catch(error => console.log("THIS IS AN ERROR"))



