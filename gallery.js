const galleryThumbnail = document.querySelector(".gallery-modal__thumbnail-container");
const galleryImage = document.querySelector(".gallery-modal__image img");
const galleryPrev = document.querySelector(".gallery-modal__btn-prev");
const galleryNext = document.querySelector(".gallery-modal__btn-next");

const removeActive = function() {
    const thumbnails = Array.from(galleryThumbnail.children);
    thumbnails.forEach((x) => {
        x.classList.remove("active");
    })
}

const setActive = function(element) {
    removeActive();
    galleryImage.src = element.src.replace("-lq","");
    element.parentElement.classList.add("active");
}

galleryThumbnail.addEventListener("click", function(e) {
    const thumbnailImg = e.target.closest(".gallery-modal__thumbnail img");
    if(!thumbnailImg) return;

    setActive(thumbnailImg);
})

galleryNext.addEventListener("click", (e) => {
    const activeThumbnail = document.querySelector(".gallery-modal__thumbnail.active");
    const next = activeThumbnail.nextElementSibling;
    if(!next) return;
    
    const imgEl = next.querySelector("img");
    setActive(imgEl);
})

galleryPrev.addEventListener("click", (e) => {
    const activeThumbnail = document.querySelector(".gallery-modal__thumbnail.active");
    const previous = activeThumbnail.previousElementSibling;
    if(!previous) return;
    
    const imgEl = previous.querySelector("img");
    setActive(imgEl);
})


