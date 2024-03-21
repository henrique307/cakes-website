// const Parallax = require("../node_modules/parallax-js/src/parallax.js");

let carousel = document.querySelector(".carousel-inner");
let indicators = document.querySelector(".carousel-indicators");
let mainPhoto = document.querySelector(".main-photo");
// let parallax = new Parallax(mainPhoto);
let larguraAtual = window.innerWidth
let itensPorSlide = larguraAtual <= 500 ? 2 : larguraAtual <= 990 ? 3 : 4
let larguraItem = Math.floor(100 / itensPorSlide)

$(".carousel").carousel({
    interval: false,
})

buildSlider(itensPorSlide, larguraItem);

window.addEventListener('resize', function() {
    larguraAtual = window.innerWidth

    if(itensPorSlide === (larguraAtual <= 500 ? 2 : larguraAtual <= 990 ? 3 : 4)) return

    itensPorSlide = larguraAtual <= 500 ? 2 : larguraAtual <= 990 ? 3 : 4
    larguraItem = Math.floor(100 / itensPorSlide)
    carousel.innerHTML = ""
    indicators.innerHTML = ""

    buildSlider(itensPorSlide, larguraItem);

});

function buildSlider(itensPorSlide, larguraItem) {
    for (let i = itensPorSlide; i <= 15; i = i + itensPorSlide) {
        
        carousel.innerHTML += `
                    <div class="carousel-item ${i === itensPorSlide ? "active" : ""}">
                        ${new Array(itensPorSlide).fill(null).map((_, itemIndex) => {
                            return itemIndex + i >= 16 ? "" : `
                            <div style="width: calc(${larguraItem}% - 1px)" class="carousel-image-container">
                                <div class="carousel-image-overlay ${i === itensPorSlide && itemIndex === 0 ? "selected" : ""}"><h3>Nome do Doce</h3></div>
                                <img src="../assets/${itemIndex + i}.jpeg" alt="imagem-doce">
                            </div>
                            `;
                        }).toString().replace(/\,/g, "")}
                    </div>
                `
    
        indicators.innerHTML += `<li data-target="#carouselExampleIndicators" data-slide-to="0" ${i === itensPorSlide ? 'class="active"' : ''}></li>`
    }

    let imageOverlays = document.querySelectorAll(".carousel-image-overlay");
    
    imageOverlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            document.querySelector(".selected").classList.remove("selected")
            overlay.classList.add("selected")

            let selectedElement = document.querySelector(".selected").parentElement.querySelector("img")

            mainPhoto.setAttribute("style", `background-image: url(${selectedElement.getAttribute("src")})`)
        })
    })

    let selectedElement = document.querySelector(".selected").parentElement.querySelector("img")

    mainPhoto.setAttribute("style", `background-image: url(${selectedElement.getAttribute("src")})`)
}    

