let preloadBars = document.querySelector(".preloadbars");
let preloadBarTop = document.querySelector(".preloadbar-top");
let preloadBarBottom = document.querySelector(".preloadbar-bottom");

function preload() {
    document.body.style.overflow = "hidden";
    preloadBarTop.classList.add("retract");
    preloadBarBottom.classList.add("retract");
    setTimeout(() => {
        preloadBarTop.classList.add("hide");
        preloadBarBottom.classList.add("hide");
        preloadBars.classList.add("hide");
        preloadBars.style.display = "none";

        document.body.style.overflow = "auto";
    }, 1200);
}

preload();
