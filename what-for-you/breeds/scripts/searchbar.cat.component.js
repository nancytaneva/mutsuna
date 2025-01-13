
function processOpenBread(codeId) {

  // remove the dropdown menu data
  const breedCatDropdown     = document.getElementById("breedSelector--dropdown");
  breedCatDropdown.innerHTML = "";

  // show the dog bread extra info 
  document.getElementById("breed-wrapper").style.display="block";

  const objectReference = breedCatCollection.find((element) => element.code == codeId);

  $scoreCatComponent.render(objectReference);

  // scrollToBreed()
}
  
  
  // CAT DROPDOWN
const searchBreedInput  = document.getElementById("searchBreed");
const breedCatDropdown     = document.getElementById("breedSelector--dropdown");

console.log("Start")

  document.getElementById("searchBreed").addEventListener('keydown', () => {
    populateCatDropdown();
});

document.getElementById("searchBreed").addEventListener('search', () => {
    breedCatDropdown.innerHTML = "";
});

  function populateCatDropdown(result) {
    
    const searchBreedValue  = searchBreedInput?.value?.toLowerCase();
    
    if(searchBreedValue.length < 2) {
        return breedCatDropdown.innerHTML = "";
    }
  
    const menuCatCollection = breedCatCollection.filter((element) => {
      return element.id.includes(searchBreedValue);
    })
  
    const collection = [];
    for(const menuItem of menuCatCollection) {
      collection.push(`<div onclick="processOpenBread(${menuItem.code})" >${menuItem.name}</div>`);
    }
  
    breedCatDropdown.innerHTML = collection.join('');
  }