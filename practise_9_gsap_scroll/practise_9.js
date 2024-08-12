const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const galleryCaptions = document.querySelectorAll(".gallery-container-caption")
const galleryImgs = document.querySelectorAll(".gallery-container-img")

galleryCaptions.forEach((galleryCaption) =>{
    gsap.fromTo(galleryCaption,{
        xPercent: -100,
        opacity: 0 
    },{
        scrollTrigger: {
            trigger: galleryCaption,
            start: 'top bottom', 
            end: 'bottom 90%', 
            markers: true,
            scrub: 2,
        },
        xPercent: 0,
        opacity: 1

    })
})

galleryImgs.forEach((galleryImg) =>{
    gsap.fromTo(galleryImg,{
        xPercent: 100,
        opacity: 0 
    },{
        scrollTrigger: {
            trigger: galleryImg,
            start: 'top bottom', 
            end: 'bottom 90%', 
            markers: true,
            scrub: 2,
        },
        xPercent: 0,
        opacity: 1

    })
})