const navbar = document.getElementById('navbar');
window.onscroll= function () {
    scrolllFunction()
}

function scrolllFunction() {
    if (document.body.scrollTop>20 || document.body.scrollTop<20) {
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')

    }
    
}

const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:500
}
const scrollRevealOption2={
    distance:"50px",
    origin:"top",
    duration:500
}
const scrollRevealtransparent={
    distance:"50px",
    opacity: 0.2,
    duration:500
}

ScrollReveal().reveal(".header h2",scrollRevealOption)
ScrollReveal().reveal(".header h1",{...scrollRevealOption,delay:200})
ScrollReveal().reveal(".header h3",{...scrollRevealOption,delay:500})
ScrollReveal().reveal(".header .card-tags",{...scrollRevealtransparent,delay:500})
ScrollReveal().reveal("section h1",scrollRevealOption)
ScrollReveal().reveal("section h2",{...scrollRevealOption,delay:100})
ScrollReveal().reveal("section .item",{...scrollRevealOption,delay:500})
ScrollReveal().reveal("section .row",{...scrollRevealOption,delay:500})
ScrollReveal().reveal(".services .container .service-grid1 .service-grid2 ",{...scrollRevealOption,delay:100})
ScrollReveal().reveal(".services .container .service-grid1 .service-grid2 .services-skills",{...scrollRevealOption,delay:500})
ScrollReveal().reveal(".services .container .service-grid1 .skills-image",{...scrollRevealOption2,delay:500})
ScrollReveal().reveal(".services .container .service-grid1 .service-grid2 .services-skills .services-title",{...scrollRevealOption,delay:600})
ScrollReveal().reveal(".services .container .service-grid1 .service-grid2 .services-skills .service-text",{...scrollRevealOption,delay:800})