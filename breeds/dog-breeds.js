// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//   });




  // Define an array of dog breed objects
const dogBreeds = [
  {
    name: "Немска овчарка",
    nameEn: "German Shepherd Dog",
    code: "1151",
    general: {
      country: "Германия",
      lifeLength: "9-13 г."
    },
    physicalTraits: {
      height: {
        female: "55-60 см",
        male: "60-65 см"
      },
      weight: {
        female: "22-32 кг",
        male: "30-40 кг"
      },
    },
    history: "Добави историята тук.",
    health: "Добави имената на наследствените заболявания тук.",
    breedTraits: {
      family: {
        affectionateWithFamily: 5,
        goodWithYoungChildren: 5,
        goodWithOtherDogs: 3
      }
    }





  },
  // Add more dog breeds here...








];

// Function to display dog breed information
// function displayBreedInfo(breed) {
//   const breedInfo = dogBreeds.find(item => item.name === breed);

//   if (breedInfo) {
//     console.log("Breed Name:", breedInfo.name);
//     console.log("general:", breedInfo.general);
//     console.log("Physical Traits:", breedInfo.physicalTraits);
//   } else {
//     console.log("Breed not found.");
//   }
// }

// // Example usage
// const selectedBreed = "Немска овчарка";
// displayBreedInfo(selectedBreed);







// Function to populate the breed dropdown list
function populateDropdown() {
  const breedDropdown = document.getElementById("breedDropdown");

  dogBreeds.forEach(breed => {
    const option = document.createElement("option");
    option.value = breed.name;
    option.textContent = breed.name;
    breedDropdown.appendChild(option);
  });
}










// Function to display breed information in the 'breedInfo' div
function displayBreedInfoInDiv(breed) {
  const breedInfoDiv = document.getElementById("breedInfo");
  breedInfoDiv.innerHTML = ""; // Clear previous content

  const breedInfo = dogBreeds.find(item => item.name === breed);

  if (breedInfo) {
    
    const breedNameDiv = document.createElement("div");
    breedNameDiv.classList.add("card");
    breedNameDiv.innerHTML = `
          <p class="card-title">Порода:</p>
          <p class="card-text">${breedInfo.name}</p>
     `; 

    const heightDiv = document.createElement("div");
    heightDiv.classList.add("card");
    heightDiv.innerHTML = `
                                    <p class="card-title">Височина:</p>
                                    <p class="card-text card-span">
                                        <span>
                                            <i class="fa-solid fa-venus"></i>
                                            ${breedInfo.physicalTraits.height.female}
                                        </span>
                                        <span>
                                            <i class="fa-solid fa-mars"></i>
                                            ${breedInfo.physicalTraits.height.male}
                                        </span>
                                    </p>
                              </div>
    `;

    const weigthDiv = document.createElement("div");
    weigthDiv.classList.add("card");
    weigthDiv.innerHTML = `
                                    <p class="card-title">Височина:</p>
                                    <p class="card-text card-span">
                                        <span>
                                            <i class="fa-solid fa-venus"></i>
                                            ${breedInfo.physicalTraits.weight.female}
                                        </span>
                                        <span>
                                            <i class="fa-solid fa-mars"></i>
                                            ${breedInfo.physicalTraits.weight.male}
                                        </span>
                                    </p>
                              </div>
    `;

    const lifeLengthDiv = document.createElement("div");
    lifeLengthDiv.classList.add("card");
    lifeLengthDiv.innerHTML = `
                                    <p class="card-title">Живот:</p>
                                    <p class="card-text">${breedInfo.general.lifeLength}</p>
                                </div>
    `;

    const countryDiv = document.createElement("div");
    countryDiv.classList.add("card");
    countryDiv.innerHTML = `
                                    <p class="card-title">Произход:</p>
                                    <p class="card-text">${breedInfo.general.country}</p>
                                </div>
    `;


    breedInfoDiv.appendChild(breedNameDiv);
    breedInfoDiv.appendChild(heightDiv);
    breedInfoDiv.appendChild(weigthDiv);
    breedInfoDiv.appendChild(lifeLengthDiv);
    breedInfoDiv.appendChild(countryDiv);
  } else {
    breedInfoDiv.textContent = "Породата не е намерена.";
  }
}



function displayBreedImgDiv(breed) {
    const breedSwiperDiv = document.getElementById("breedSwiper");
    breedSwiperDiv.innerHTML = "";
  
    const breedSwiper = dogBreeds.find(item => item.name === breed);
  
    if (breedSwiper) {
      const breedSwiperWrapperDiv = document.createElement("div");
      breedSwiperWrapperDiv.classList.add("swiper-wrapper");
      breedSwiperWrapperDiv.innerHTML = `
        <div class="swiper-slide">
        <img src="../css/img/dog-breeds/${breedSwiper.code}-1.avif">
        </div>
        `;
  
        breedSwiperDiv.appendChild(breedSwiperWrapperDiv);
    } else {
      breedInfoDiv.textContent = "Породата не е намерена.";
    }
  
  }



// function displayBreedImgDiv(breed) {
//   const breedSwiperDiv = document.getElementById("breedSwiper");
//   breedSwiperDiv.innerHTML = "";

//   const breedSwiper = dogBreeds.find(item => item.name === breed);

//   if (breedSwiper) {
//     const breedSwiperWrapperDiv = document.createElement("div");
//     breedSwiperWrapperDiv.classList.add("swiper-wrapper");
//     breedSwiperWrapperDiv.innerHTML = `
//       <div class="swiper-slide">
//       <img src="../css/img/dog-breeds/${breedSwiper.code}-1.avif">
//       </div>
//       <div class="swiper-slide">
//           <img src="../css/img/dog-breeds/${breedSwiper.code}-2.avif">
//       </div>
//       <div class="swiper-slide">
//           <img src="../css/img/dog-breeds/${breedSwiper.code}-3.avif">
//       </div>
//       `;

//       const swiperPaginationDiv = document.createElement("div");
//       swiperPaginationDiv.classList.add("swiper-pagination");
//       swiperPaginationDiv.innerHTML = ``;

//       const swiperBtnPrevDiv = document.createElement("div");
//       swiperBtnPrevDiv.classList.add("swiper-button-prev");
//       swiperBtnPrevDiv.innerHTML = ``;

//       const swiperBtnNextDiv = document.createElement("div");
//       swiperBtnNextDiv.classList.add("swiper-button-next");
//       swiperBtnNextDiv.innerHTML = ``;

//       breedSwiperDiv.appendChild(breedSwiperWrapperDiv);
//       breedSwiperDiv.appendChild(swiperPaginationDiv);
//       breedSwiperDiv.appendChild(swiperBtnPrevDiv);
//       breedSwiperDiv.appendChild(swiperBtnNextDiv);
//   } else {
//     breedInfoDiv.textContent = "Породата не е намерена.";
//   }

// }








// function breedTraitScore {

//   const breedTraitsDiv = document.getElementById("breedTraits");
//   breedTraitsDiv.innerHTML = "";

//   const breedTraits = dogBreeds.find(item => item.name === breed);

//   if (breedTraits) {
//     const affectionateWithFamilyName = document.createElement("div");
//     affectionateWithFamilyName.classList.add("breed-trait__name");
//     affectionateWithFamilyName.innerHTML = `
//     Привързаност към семейството
//     `;

//     const affectionateWithFamily = document.createElement("div");
//     affectionateWithFamily.classList.add("breed-trait-score__score-wrap");
//     affectionateWithFamily.innerHTML = `
    
//     `;



//     breedTraitsDiv.appendChild(affectionateWithFamilyName);
//     breedTraitsDiv.appendChild(affectionateWithFamily);

//   } else {
//     breedTraitsDiv.textContent = "Породата не е намерена.";
//   }
// }











// Event listener for the 'Display Breed Info' button
document.getElementById("displayButton").addEventListener("click", function() {
  const selectedBreed = document.getElementById("breedDropdown").value;
  displayBreedInfoInDiv(selectedBreed);
  displayBreedImgDiv(selectedBreed);
});

// Populate the breed dropdown when the page loads
window.addEventListener("load", populateDropdown);