const searchBreedInput  = document.getElementById("searchBreed");
const breedDropdown     = document.getElementById("breedSelector--dropdown");

document.getElementById("searchBreed").addEventListener('keydown', () => {
    populateDropdown();
});

document.getElementById("searchBreed").addEventListener('search', () => {
    breedDropdown.innerHTML = "";
});

function populateDropdown(result) {
    
    const searchBreadValue  = searchBreedInput?.value?.toLowerCase();
    
    if(searchBreadValue.length < 3) {
        return breedDropdown.innerHTML = "";
    }
  
    const menuCollection = breedCollection.filter((element) => {
      return element.id.includes(searchBreadValue);
    })
  
    const collection = [];
    for(const menuItem of menuCollection) {
      collection.push(`<div onclick="processOpenBread(${menuItem.code})" >${menuItem.name}</div>`);
    }
  
    breedDropdown.innerHTML = collection.join('');
  }