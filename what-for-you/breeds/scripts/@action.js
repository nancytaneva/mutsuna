function processOpenBread(codeId) {

    // remove the dropdown menu data
    const breedDropdown     = document.getElementById("breedSelector--dropdown");
    breedDropdown.innerHTML = "";
  
    // show the dog bread extra info 
    document.getElementById("breed-wrapper").style.display="block";
  
    const objectReference = breedCollection.find((element) => element.code == codeId);
  
    $scoreComponent.render(objectReference);

    scrollToBreed()
}