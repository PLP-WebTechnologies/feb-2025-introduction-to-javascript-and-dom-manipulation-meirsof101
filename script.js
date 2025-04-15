// Task 1: Change Text Content Dynamically
const changeTextButton = document.getElementById('change-text-btn');
const introText = document.getElementById('intro-text');

changeTextButton.addEventListener('click', () => {
  introText.textContent = "The text has been changed dynamically with JavaScript!";
});

// Task 2: Modify CSS Styles
const changeStyleButton = document.getElementById('change-style-btn');

changeStyleButton.addEventListener('click', () => {
  document.body.style.backgroundColor = '#f0f8ff'; // Light blue background
  document.body.style.fontFamily = 'Arial, sans-serif'; // Change font family
  document.body.style.color = 'darkslategray'; // Change text color
});

// Task 3: Add or Remove Elements
const addRemoveElementButton = document.getElementById('add-remove-element-btn');
const newElementsContainer = document.getElementById('new-elements-container');

addRemoveElementButton.addEventListener('click', () => {
  const newElement = document.createElement('div');
  newElement.textContent = "This is a dynamically added element!";
  newElement.style.padding = "10px";
  newElement.style.margin = "5px";
  newElement.style.backgroundColor = "#ffcccb";  // Light red background
  newElementsContainer.appendChild(newElement);

  // Remove the element after 3 seconds
  setTimeout(() => {
    newElementsContainer.removeChild(newElement);
  }, 3000);
});
