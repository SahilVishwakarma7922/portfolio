document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const viewMoreBtn = document.getElementById("viewMore");
    const sliderTrack = document.querySelector(".slider-track");
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    const closeBtn = document.querySelector(".close");

    const sliderImages = 15;
    const galleryImages = 20;

    /* ========== INFINITE IMAGE SLIDER ========== */
    function createSliderImages() {
        for (let i = 0; i < sliderImages; i++) {
            let img = document.createElement("img");
            img.src = `https://picsum.photos/200/300?random=${i}`;
            sliderTrack.appendChild(img);
        }
    }

    /* ========== FULL GALLERY ========== */
    function loadGalleryImages() {
        gallery.innerHTML = "";
        for (let i = 0; i < galleryImages; i++) {
            let div = document.createElement("div");
            div.classList.add("gallery-item");
            let imgSrc = `https://picsum.photos/200/300?random=${i}`;
            div.innerHTML = `<img src="${imgSrc}" onclick="openModal('${imgSrc}')">`;
            gallery.appendChild(div);
        }
    }

    /* ========== IMAGE MODAL ========== */
    window.openModal = function (src) {
        fullImage.src = src;
        modal.style.display = "flex";
    };

    closeBtn.onclick = () => modal.style.display = "none";

    viewMoreBtn.addEventListener("click", function () {
        gallery.classList.toggle("hidden");
        viewMoreBtn.innerText = gallery.classList.contains("hidden") ? "View More" : "Show Less";
        loadGalleryImages();
    });

    createSliderImages();
});
