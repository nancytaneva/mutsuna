// Function to select a random breed
function getRandomBreed() {
    const now = new Date();
    const storedDataBreed = localStorage.getItem('randomBreed');
    let parsedData = null;

    // Check if the stored data exists and is valid JSON
    if (storedDataBreed) {
        try {
            parsedData = JSON.parse(storedDataBreed);
        } catch (e) {
            console.error('Invalid JSON in localStorage:', storedDataBreed);
        }
    }

    const expirationTime = new Date(parsedData?.expiration || 0);

    // If no article or the stored article has expired
    if (!parsedData?.breed || now >= expirationTime) {
        const randomIndex = Math.floor(Math.random() * breedCollection.length);
        const randomBreed = breedCollection[randomIndex];

        // Calculate expiration time (next 23:59)
        const nextMidnight = new Date();
        nextMidnight.setHours(23, 59, 59, 999);

        // Store the article and expiration time in localStorage
        const newStoredDataBreed = {
            breed: randomBreed,
            expiration: nextMidnight.getTime()
        };
        localStorage.setItem('randomBreed', JSON.stringify(newStoredDataBreed));

        return randomBreed;
    }

    // Use the stored article
    return parsedData.breed;
}

// Function to update the todays-breed div
function updateTodaysBreed() {
    const todaysBreedElement    = document.getElementById('todays-breed');
    const todaysDogBreed        = document.getElementById('todaysDogBreed');
    const randomBreed           = getRandomBreed();

    // Update the content of the div with the random breed's name
    todaysBreedElement.querySelector('.todays-breed-name-dog').textContent = randomBreed.name;
    // You can also update other elements within this div with breed information as needed

    // Update the background image
    const dogBoxElement = todaysBreedElement.querySelector('.todays-breed-box-dog');
    dogBoxElement.style.background = `url(what-for-you/breeds/img/dog/${randomBreed.code}/1.png)`; // Set the background image
    dogBoxElement.style.backgroundSize = 'cover'; // Set background-size to cover
    dogBoxElement.style.backgroundPosition = 'center'; // Set background-position to center
    
    // Update the href attribute of the anchor tag (if needed)
    const anchorElement = todaysDogBreed.querySelector('a');
    anchorElement.href = 'what-for-you/breeds/dog-breeds.html'; // Set the URL to the breed's page

    // You can also update the background image or other styles here

    // Optionally, you can log the selected breed to the console for debugging
    console.log('Today\'s Dog Breed:', randomBreed.name);
}

// Call the updateTodaysBreed function to display a random breed on page load
updateTodaysBreed();





// CAT
// Function to select a random breed
function getRandomCatBreed() {
    const now = new Date();
    const storedDataCatBreed = localStorage.getItem('randomCatBreed');
    let parsedData = null;

    // Check if the stored data exists and is valid JSON
    if (storedDataCatBreed) {
        try {
            parsedData = JSON.parse(storedDataCatBreed);
        } catch (e) {
            console.error('Invalid JSON in localStorage:', storedDataCatBreed);
        }
    }

    const expirationTime = new Date(parsedData?.expiration || 0);

    // If no catBreed or the stored catBreed has expired
    if (!parsedData?.catBreed || now >= expirationTime) {
        const randomIndex = Math.floor(Math.random() * breedCatCollection.length);
        const randomCatBreed = breedCatCollection[randomIndex];

        // Calculate expiration time (next 23:59)
        const nextMidnight = new Date();
        nextMidnight.setHours(23, 59, 59, 999);

        // Store the catBreed and expiration time in localStorage
        const newStoredDataCatBreed = {
            catBreed: randomCatBreed,
            expiration: nextMidnight.getTime()
        };
        localStorage.setItem('randomCatBreed', JSON.stringify(newStoredDataCatBreed));

        return randomCatBreed;
    }

    // Use the stored catBreed
    return parsedData.catBreed;




}

// Function to update the todays-breed div
function updateTodaysCatBreed() {
    const todaysBreedElement    = document.getElementById('todays-breed');
    const todaysCatBreed        = document.getElementById('todaysCatBreed');
    const randomCatBreed        = getRandomCatBreed();

    // Update the content of the div with the random breed's name
    todaysBreedElement.querySelector('.todays-breed-name-cat').textContent = randomCatBreed.name;
    // You can also update other elements within this div with breed information as needed

    // Update the background image
    const catBoxElement = todaysBreedElement.querySelector('.todays-breed-box-cat');
    catBoxElement.style.background = `url(what-for-you/breeds/img/cat/${randomCatBreed.code}/1.png)`; // Set the background image
    catBoxElement.style.backgroundSize = 'cover'; // Set background-size to cover
    catBoxElement.style.backgroundPosition = 'center'; // Set background-position to center
    
    // Update the href attribute of the anchor tag (if needed)
    const anchorElement = todaysCatBreed.querySelector('a');
    anchorElement.href = 'what-for-you/breeds/cat-breeds.html'; // Set the URL to the breed's page

    // You can also update the background image or other styles here

    // Optionally, you can log the selected breed to the console for debugging
    console.log('Today\'s Cat Breed:', randomCatBreed.name);
}

// Call the updateTodaysBreed function to display a random breed on page load
updateTodaysCatBreed();










// // Function to select a random breed
// function getRandomBreed() {
//     const randomIndex = Math.floor(Math.random() * breedCollection.length);
//     return breedCollection[randomIndex];
// }

// // Function to update the todays-breed div
// function updateTodaysBreed() {
//     const todaysBreedElement    = document.getElementById('todays-breed');
//     const todaysDogBreed        = document.getElementById('todaysDogBreed');
//     const randomBreed           = getRandomBreed();

//     // Update the content of the div with the random breed's name
//     todaysBreedElement.querySelector('.todays-breed-name-dog').textContent = randomBreed.name;
//     // You can also update other elements within this div with breed information as needed

//     // Update the background image
//     const dogBoxElement = todaysBreedElement.querySelector('.todays-breed-box-dog');
//     dogBoxElement.style.background = `url(what-for-you/breeds/img/dog/${randomBreed.code}/1.png)`; // Set the background image
//     dogBoxElement.style.backgroundSize = 'cover'; // Set background-size to cover
//     dogBoxElement.style.backgroundPosition = 'center'; // Set background-position to center
    
//     // Update the href attribute of the anchor tag (if needed)
//     const anchorElement = todaysDogBreed.querySelector('a');
//     anchorElement.href = 'what-for-you/breeds/dog-breeds.html'; // Set the URL to the breed's page

//     // You can also update the background image or other styles here

//     // Optionally, you can log the selected breed to the console for debugging
//     console.log('Today\'s Dog Breed:', randomBreed.name);
// }

// // Call the updateTodaysBreed function to display a random breed on page load
// updateTodaysBreed();





// // CAT
// // Function to select a random breed
// function getRandomCatBreed() {
//     const randomIndex = Math.floor(Math.random() * breedCatCollection.length);
//     return breedCatCollection[randomIndex];
// }

// // Function to update the todays-breed div
// function updateTodaysCatBreed() {
//     const todaysBreedElement    = document.getElementById('todays-breed');
//     const todaysCatBreed        = document.getElementById('todaysCatBreed');
//     const randomBreed           = getRandomCatBreed();

//     // Update the content of the div with the random breed's name
//     todaysBreedElement.querySelector('.todays-breed-name-cat').textContent = randomBreed.name;
//     // You can also update other elements within this div with breed information as needed

//     // Update the background image
//     const catBoxElement = todaysBreedElement.querySelector('.todays-breed-box-cat');
//     catBoxElement.style.background = `url(what-for-you/breeds/img/cat/${randomBreed.code}/1.png)`; // Set the background image
//     catBoxElement.style.backgroundSize = 'cover'; // Set background-size to cover
//     catBoxElement.style.backgroundPosition = 'center'; // Set background-position to center
    
//     // Update the href attribute of the anchor tag (if needed)
//     const anchorElement = todaysCatBreed.querySelector('a');
//     anchorElement.href = 'what-for-you/breeds/cat-breeds.html'; // Set the URL to the breed's page

//     // You can also update the background image or other styles here

//     // Optionally, you can log the selected breed to the console for debugging
//     console.log('Today\'s Cat Breed:', randomBreed.name);
// }

// // Call the updateTodaysBreed function to display a random breed on page load
// updateTodaysCatBreed();