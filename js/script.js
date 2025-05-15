// Raccolta dati
const getApi = "https://lanciweb.github.io/demo/api/pictures/"
let bigPic = document.getElementById("big-pic")
console.log(bigPic)
let btn = document.getElementById("btn")
let imageBig = document.getElementById("image-big")
console.log(imageBig)

// Chiamata ajax
axios.get(getApi).then((resp) => {
    const photoArr = resp.data
    PrintCard(photoArr)
    const cardsImage = document.querySelectorAll(".card .card-image")
    // Render dell'immagine Grande
    renderBigImage(cardsImage)
})





// Funzioni
// Funzione che mi crea la card
function createTemplate(singleElement) {
    const { title, url } = singleElement
    return `<div class="col">
                    <div class="card">
                        <div class="pin">
                            <img src="./img/pin.svg" alt="pin">
                        </div>
                        <div class="card-image">
                            <img src="${url}" alt="${title}">
                        </div>
                        <div class="card-text">
                            <p>${title}</p>
                        </div>
                    </div>
                </div>`

}

// Funzione che mi stampa la card
function PrintCard(elemento) {
    const rowElem = document.getElementById("row")
    let template = ""
    elemento.forEach((curElem) => {
        template += createTemplate(curElem)
        rowElem.innerHTML = template
    })

}

// Eventi sul bottone
btn.addEventListener("click", function () {
    bigPic.classList.add("big-pic-none")
})

function renderBigImage(arr){
    arr.forEach((singleCard) => {
        singleCard.addEventListener("click", function () {
            bigPic.classList.remove("big-pic-none")
            imageBig.innerHTML = singleCard.innerHTML
        })
    })
}