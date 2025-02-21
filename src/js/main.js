import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'

const navbarSpacer = document.querySelector('.js-navbar-spacer')
const navbarNavToggler = document.querySelector('.js-navbar-search-toggler')

window.addEventListener('load', () => {
  navbarSpacer.style.width = `${navbarNavToggler.offsetWidth}px`
})

window.addEventListener('resize', () => {
  navbarSpacer.style.width = `${navbarNavToggler.offsetWidth}px`
})

document.addEventListener('DOMContentLoaded', function() {
  // Get the input element by its ID
  const searchInput = document.getElementById('searchModalInputQuery');
  // Get the button element by its class
  const resetButton = document.querySelector('.fer-search-modal-form-reset');

  // Initially hide the reset button
  if (resetButton) {
    resetButton.hidden = true;
  }

  // Add an input event listener to the search input
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      // Check if the input value is not empty after trimming whitespace
      if (searchInput.value.trim() !== '') {
        // If the input is filled, show the reset button
        if (resetButton) {
          resetButton.hidden = false;
        }
      } else {
        // If the input is empty, hide the reset button by setting the hidden attribute
        if (resetButton) {
          resetButton.hidden = true;
        }
      }
    });
  }

  // Add a click event listener to the reset button itself
  if (resetButton) {
    resetButton.addEventListener('click', function() {
      // Optionally, you might want to clear the input field when the reset button is clicked.
      // If your reset button already clears the input field, you might not need this line.
      if (searchInput) {
        searchInput.value = ''; // Clear the input field
      }
      resetButton.hidden = true; // Hide the reset button immediately on click
    });
  }
});