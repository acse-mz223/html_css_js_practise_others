const heroBG = document.querySelectorAll(".hero-background")

heroBG.forEach((background) =>{
    const speed = Number(background.getAttribute("speed"))
    gsap.to(background, {
        scrollTrigger:{
            trigger: background,
            start: "top top",
            end: "bottom 20%",
            scrub: true,
            markers: true
        },
        y: 12 * speed
    })
    
})