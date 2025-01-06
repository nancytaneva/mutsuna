console.log('breed.library.js loaded');
// Function to simulate `findImageBreed`
const findImageBreed = (code) => `img/dog/${code}/1.png`;

// Function to handle card selection
function onSelectCard(element) {
  alert(`You selected: ${element.name}`);
}

// Render data to HTML
const grid = document.getElementById('breedCollection-grid');

breedCollection.forEach((element) => {
  // Create card container
  const card = document.createElement('div');
  card.classList.add('breed-library-box');
  card.style.backgroundColor = 'white'; // Default to white background
  card.addEventListener('click', () => onSelectCard(element));

    // Set the background image dynamically
    const imagePath = `./img/dog/${element.code}/1.png`;
    const img = new Image();
    img.src = imagePath;
    
    img.onload = () => {
      card.style.backgroundImage = `url('${imagePath}')`;
      card.style.backgroundSize = 'cover';
      card.style.backgroundPosition = 'center';
    };
  
    img.onerror = () => {
      console.warn(`Image not found: ${imagePath}`);
      // Keep the white background
    };

  // Add text content
  const content = `
    <p class="bold">${element.name}</p>
  `;
  card.innerHTML += content;

  // Append card to the grid
  grid.appendChild(card);
});