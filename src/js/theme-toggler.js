(() => {
  'use strict';

  // Function to get the stored theme from localStorage
  const getStoredTheme = () => localStorage.getItem('theme');
  // Function to save the theme to localStorage
  const setStoredTheme = theme => localStorage.setItem('theme', theme);

  // Function to set the theme on the document
  const setTheme = theme => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    const themeIcon = document.querySelector('#theme-icon');
    if (theme === 'dark') {
      themeIcon.classList.remove('bi-moon');
      themeIcon.classList.add('bi-sun');
    } else {
      themeIcon.classList.remove('bi-sun');
      themeIcon.classList.add('bi-moon');
    }
  };

  // Function to toggle between themes
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setStoredTheme(newTheme); // Store the new theme
    setTheme(newTheme); // Apply the new theme
  };

  // Initialize theme based on stored preference
  document.addEventListener('DOMContentLoaded', () => {
    const storedTheme = getStoredTheme(); // Check for a stored theme
    if (storedTheme) {
      setTheme(storedTheme); // Apply the stored theme
    }
    const themeToggler = document.getElementById('theme-toggler');
    themeToggler.addEventListener('click', toggleTheme); // Set up the theme toggle button
  });
})();