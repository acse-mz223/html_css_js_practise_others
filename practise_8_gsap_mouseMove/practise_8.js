const button = document.querySelector(".button")
const buttonText = document.querySelector(".button-text")
const buttonParas = button.getBoundingClientRect()

const buttonStrength = 160
const buttonTextStrength = 80

// hover
button.addEventListener("mousemove", (event) =>{
    // calculate the position
    newX = (event.clientX - buttonParas.left)/ buttonParas.width -0.5
    newY = (event.clientY - buttonParas.top)/ buttonParas.width -0.5

    // gsap
    gsap.to(button, {
        x: newX * buttonStrength,
        y: newY * buttonStrength,
        ease: "power4.out",
    })

    // gsap
    gsap.to(buttonText, {
        x: newX * buttonTextStrength,
        y: newY * buttonTextStrength,
        ease: "power4.out",
    })
})


// hover out
button.addEventListener("mouseleave",(event)=>{
    gsap.to(button, {
        duration:1,
        x: 0,
        y: 0,
        ease: "elastic.out(1,0.3)",
    })

    // gsap
    gsap.to(buttonText, {
        duration:1,
        x: 0,
        y: 0,
        ease: "elastic.out(1,0.3)",
    })
})