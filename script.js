// theme switcher

document.addEventListener('DOMContentLoaded', () => {
    // Check localStorage for the saved theme
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        
        // Update the theme toggle button icon based on the saved theme
        const image_link = document.querySelector(".theme-image");
        if (savedTheme === 'dark-theme') {
            image_link.src = "https://www.svgrepo.com/show/491454/moon.svg";
        } else {
            image_link.src = "https://www.svgrepo.com/show/513404/sun.svg";
        }
    }
});

function theme_button() {
    const image_link = document.querySelector(".theme-image");
    
    // Toggle between dark and light theme
    document.body.classList.toggle("dark-theme");
    
    // Check the current theme and set the correct image
    if (document.body.classList.contains("dark-theme")) {
        image_link.src = "https://www.svgrepo.com/show/491454/moon.svg";
        localStorage.setItem('theme', 'dark-theme'); // Save the dark theme in localStorage
    } else {
        image_link.src = "https://www.svgrepo.com/show/513404/sun.svg";
        localStorage.setItem('theme', ''); // Clear the dark theme from localStorage (default is light)
    }
}


// barra di ricerca
const noProjects = document.querySelector('.no-projects');
const footer = document.querySelector('.footer');
function filterProjects() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const projects = document.querySelectorAll('.project');
    let hasVisibleProjects = false;

    projects.forEach(project => {
        const title = project.querySelector('h2').innerText.toLowerCase();
        if (title.includes(searchValue)) {
            project.style.display = 'block';
            hasVisibleProjects = true;
        } else {
            project.style.display = 'none';
            footer.style.position = 'absolute';
        }
    });

    if (searchValue === "" || hasVisibleProjects) {
        noProjects.style.display = 'none';
        footer.style.position = 'relative';
    } else {
        noProjects.style.display = 'flex';
    }
}

// script che mostra il menu per la barra di ricerca

const search_lens = document.getElementById("search-lens");
const search_menu = document.getElementById("search");

search_lens.addEventListener("click", function() {
    search_menu.style.display = "block";
    search_menu.focus(); // mette il focus sulla barra di ricerca / cursore
});

document.addEventListener("click", function(event) {
    if (!event.target.matches("#search-lens") && !event.target.matches("#search")) {

        search_menu.style.display = "none";
        noProjects.style.display = 'none';
        search_menu.value = "";
        footer.style.position = 'relative';
        filterProjects(); 
        

    }
});

