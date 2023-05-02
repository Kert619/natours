const hero = document.querySelector("#hero");
const tours = document.querySelector("#tours");
const places = document.querySelector("#carousel-places");
const about = document.querySelector("#about-us");
const navLinks = document.querySelectorAll(".navbar__link");

const options = {root: null,
                 threshold: 0.3}
const obs = new IntersectionObserver((entries) => {
  
   entries.forEach((entry) => {
    if(entry.isIntersecting){
        navLinks.forEach((x) => x.classList.remove("navbar__link--active"));
        const id = entry.target.getAttribute("id");
        if(id === "hero") navLinks[0].classList.add("navbar__link--active");
        if(id === "tours") navLinks[1].classList.add("navbar__link--active");
        if(id === "carousel-places") navLinks[2].classList.add("navbar__link--active");
        if(id === "about-us") navLinks[3].classList.add("navbar__link--active");
    }
   })
}, options)

obs.observe(hero);
obs.observe(tours);
obs.observe(places);
obs.observe(about);