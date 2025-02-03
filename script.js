// SEARCH BAR FUNCTIONALITY
const search = document.getElementById('search');

search.addEventListener('input', () => {
    const query = search.value.toLowerCase();
    document.querySelectorAll('.topic').forEach(topic => {
        const headingText = topic.querySelector('h2').textContent.toLowerCase();
        const paragraphText = topic.querySelector('p').textContent.toLowerCase();
        if (headingText.includes(query) || paragraphText.includes(query)) {
            topic.style.display = 'block';
        } else {
            topic.style.display = 'none';
        }
    });
});

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
    fetch(`locales/${language}.json`)
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


