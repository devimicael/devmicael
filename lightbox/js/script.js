const imgs = document.querySelectorAll("img");

imgs.forEach(img => {
    img.addEventListener("click", () => {
        const lightbox = createLightBox(img);
        document.querySelector("body").appendChild(lightbox);
    });
});

function createLightBox(img) {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const lightboxview = document.createElement("div");
    const lightboxviewImg = document.createElement("img");
    lightboxviewImg.src = img.src;
    
    const close = document.createElement("span");
    close.textContent = "x";

    close.addEventListener("click", () => {
        document.querySelector("body").removeChild(lightbox);
    });

    lightboxview.appendChild(lightboxviewImg);
    lightboxview.appendChild(close);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) { 
            document.querySelector("body").removeChild(lightbox);
        }
    });

    lightbox.appendChild(lightboxview);
    return lightbox;
}