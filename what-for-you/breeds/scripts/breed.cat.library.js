//Function to scroll to the breed
function scrollToBreed() {
  // Scroll the breed-wrapper into view
  const breedWrapper = document.getElementById("breed-wrapper");

  // Calculate the offset for scrolling to the target section
  const offset = -headerHeight;

  // Scroll to the target section, applying the offset
  window.scroll({
    top: breedWrapper.getBoundingClientRect().top + window.scrollY + offset,
    behavior: 'smooth'
  });
}

// Function to handle card selection
function onSelectCard(codeReference) {
document.getElementById("breed-wrapper").style.display="block";

const objectReference = breedCatCollection.find((element) => element.code == codeReference.code);

$scoreCatComponent.render(objectReference);

scrollToBreed()
}

// Render data to HTML
const grid = document.getElementById('breedCatCollection-grid');


breedCatCollection.forEach((element) => {
  // Create card container
  const card = document.createElement('div');
  card.classList.add('breed-library-box');
  card.style.backgroundColor = 'white'; // Default to white background
  card.addEventListener('click', () => onSelectCard(element));

    // Set the background image dynamically
    const imagePath = `./img/cat/${element.code}/1.png`;
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



