// THEME TOGGLE FUNCTIONALITY
const themeToggle = document.querySelectorAll('#theme-toggle i');

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.forEach((icon) => {
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');
    });

    // save the theme preference in local storage
    const isLightTheme = document.body.classList.contains('light-theme');
    localStorage.setItem('isLightTheme', isLightTheme);
}

);


// get the theme preference from local storage
const isLightTheme = JSON.parse(localStorage.getItem('isLightTheme'));

if (isLightTheme) {

    document.body.classList.add('light-theme');
    themeToggle.forEach((icon) => {
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
    });

}


/* SCRIPT FOR THE CHANGING OF THE LANGUAGE */
document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    localStorage.setItem('preferredLanguage', selectedLanguage);
    loadTranslations(selectedLanguage);
  });
  
  function loadTranslations(language) {
    fetch(`../locales/${language}.json`)
        .then(response => response.json())
        .then(translations => {
            updateLanguage(translations);
        })
        .catch(error => console.error('Error loading translations:', error));
  }
  
  function updateLanguage(translations) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        const keys = key.split('.');
        let translation = translations;
        keys.forEach(k => {
            translation = translation[k];
        });
       
        // Replace \n with <br> to create line breaks
        if (translation) {
          translation = translation.replace(/\n/g, '<br>');
      }
  
      // If it's an input, set placeholder. Otherwise, set HTML.
      if (element.tagName.toLowerCase() === 'input') {
          element.setAttribute('placeholder', translation);
      } else {
          element.innerHTML = translation;
      }
      
    });
  }
  
  // Load saved language preference or default to 'en'
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  document.getElementById('language-select').value = savedLanguage;
  loadTranslations(savedLanguage);


  // script per gli accordion
  var acc = document.getElementsByClassName("accordion");
  let arrow = document.querySelectorAll('.accordion img');
  var i;
  
  document.addEventListener('DOMContentLoaded', () => {
      const accordions = document.querySelectorAll('.accordion');
      
      accordions.forEach(accordion => {
          accordion.addEventListener('click', () => {
              accordion.classList.toggle('active');
              let panel = accordion.nextElementSibling;
  
               // make sure only the arrow of the clicked accordion rotates
              let arrow = accordion.querySelector('img');
              arrow.classList.toggle('rotate');
              
              while (panel && panel.classList.contains('panel')) {
                  if (panel.style.maxHeight) {
                      panel.style.maxHeight = null;
                  } else {
                      panel.style.maxHeight = panel.scrollHeight + 'px';
                  }
                  panel = panel.nextElementSibling;
              }
          });
      });
  });
