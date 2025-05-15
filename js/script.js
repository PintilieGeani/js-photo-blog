// Raccolta dati
const getApi = "https://lanciweb.github.io/demo/api/pictures/"
let card = document.getElementById("card")
console.log(card)
let bigPic = document.getElementById("big-pic")
console.log(bigPic)
let btn = document.getElementById("btn")

// Chiamata ajax
axios.get(getApi).then((resp) =>{
    console.log(resp)
    const photoArr = resp.data
    console.log(photoArr)  
    photoArr.forEach(curElem => {
        console.log(curElem)
       createCard(curElem)
    });
    
})

// Funzioni
function createCard(elemento){
     const {title, date, url} = elemento
    card.innerHTML += `<div class="col">
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

function renderBigPic(elemento){
    const {title, date, url} = elemento
    bigPic.classList.remove("big-pic-none")
    bigPic.innerHTML = ` <div>
                <button id="btn" class="btn">Chiudi</button>
            </div>
            <div>
                <img src=${url} alt=${title}>
            </div>
        </div>`
}
