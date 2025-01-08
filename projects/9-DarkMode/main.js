function theme_button() {
    const theme_button = document.querySelector(".dark-theme");
    const image_link = document.querySelector(".theme-image");
    
    theme_button.classList.toggle("light-theme");
    
    if (image_link.src.includes("sun.svg")) {
        image_link.src = "https://www.svgrepo.com/show/507373/moon.svg";
    } else {
        image_link.src = "https://www.svgrepo.com/show/513404/sun.svg";
    }
}