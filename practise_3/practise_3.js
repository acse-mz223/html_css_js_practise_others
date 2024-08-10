const pageContainer = document.querySelector(".image-gallery-block")
const loaderContainer = document.querySelector(".image-gallery-loader")

window.addEventListener("load",() =>{
    loaderContainer.classList.add("hidden")
    pageContainer.classList.add("visible")

})