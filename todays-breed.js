// Function to select a random breed
function getRandomBreed() {
    const randomIndex = Math.floor(Math.random() * breedCollection.length);
    return breedCollection[randomIndex];
}

// Function to update the todays-breed div
function updateTodaysBreed() {
    const todaysBreedElement = document.getElementById('todays-breed');
    const randomBreed = getRandomBreed();

    // Update the content of the div with the random breed's name
    todaysBreedElement.querySelector('.todays-breed-name-dog').textContent = randomBreed.name;
    // You can also update other elements within this div with breed information as needed

    // Update the background image
    const dogBoxElement = todaysBreedElement.querySelector('.todays-breed-box-dog');
    dogBoxElement.style.background = `url(${randomBreed.image_link})`; // Set the background image

    // Update the href attribute of the anchor tag (if needed)
    const anchorElement = todaysBreedElement.querySelector('a');
    anchorElement.href = ''; // Set the URL to the breed's page

    // You can also update the background image or other styles here

    // Optionally, you can log the selected breed to the console for debugging
    console.log('Today\'s Breed:', randomBreed.name);
}

// Call the updateTodaysBreed function to display a random breed on page load
updateTodaysBreed();
