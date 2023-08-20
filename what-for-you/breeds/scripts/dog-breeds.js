// function processOpenBread(code) {

//   // remove the dropdown menu data
//   const breedDropdown     = document.getElementById("breedSelector--dropdown");
//   breedDropdown.innerHTML = "";

//   // show the dog bread extra info 
//   document.getElementById("breed-wrapper").style.display="block";

//   // get breed object by code id
//   // breedCollection.find(element => {

//   // })

//   const objectReference = breedCollection.find((element) => {
//     return element.code == 1151  
//   })

//   // execute bread populators
//   // get the object from bread collection
//   renderBreedScore(objectReference);
// }


/**
 * @author Nansy Taneva
 * @param {*} breed 
 */
// function displayBreedInfoInDiv(breed) {

//   const breedInfoDiv = document.getElementById("breedInfo");
//   breedInfoDiv.innerHTML = ""; // Clear previous content

//   const breedInfo = breedCollection.find(item => item.name === breed);

//   if (breedInfo) {
    
//     const breedNameDiv = document.createElement("div");
//     breedNameDiv.classList.add("card");
//     breedNameDiv.innerHTML = `
//           <p class="card-title">Порода:</p>
//           <p class="card-text">${breedInfo.name}</p>
//      `; 

//     const heightDiv = document.createElement("div");
//     heightDiv.classList.add("card");
//     heightDiv.innerHTML = `
//             <p class="card-title">Височина:</p>
//             <p class="card-text card-span">
//                 <span>
//                     <i class="fa-solid fa-venus"></i>
//                     ${breedInfo.physicalTraits.height.female}
//                 </span>
//                 <span>
//                     <i class="fa-solid fa-mars"></i>
//                     ${breedInfo.physicalTraits.height.male}
//                 </span>
//             </p>
//       </div>
//     `;

//     const weigthDiv = document.createElement("div");
//     weigthDiv.classList.add("card");
//     weigthDiv.innerHTML = `
//             <p class="card-title">Височина:</p>
//             <p class="card-text card-span">
//                 <span>
//                     <i class="fa-solid fa-venus"></i>
//                     ${breedInfo.physicalTraits.weight.female}
//                 </span>
//                 <span>
//                     <i class="fa-solid fa-mars"></i>
//                     ${breedInfo.physicalTraits.weight.male}
//                 </span>
//             </p>
//       </div>
//     `;

//     const lifeLengthDiv = document.createElement("div");
//     lifeLengthDiv.classList.add("card");
//     lifeLengthDiv.innerHTML = `
//           <p class="card-title">Живот:</p>
//           <p class="card-text">${breedInfo.general.lifeLength}</p>
//       </div>
//     `;

//     const countryDiv = document.createElement("div");
//     countryDiv.classList.add("card");
//     countryDiv.innerHTML = `
//           <p class="card-title">Произход:</p>
//           <p class="card-text">${breedInfo.general.country}</p>
//       </div>
//     `;

//     breedInfoDiv.appendChild(breedNameDiv);
//     breedInfoDiv.appendChild(heightDiv);
//     breedInfoDiv.appendChild(weigthDiv);
//     breedInfoDiv.appendChild(lifeLengthDiv);
//     breedInfoDiv.appendChild(countryDiv);
//   } else {
//     breedInfoDiv.textContent = "Породата не е намерена.";
//   }
// }

/**
 * @author Nansy Taneva
 * @param {*} breed 
 */
// function displayBreedImgDiv(breed) {

//     const breedSwiperDiv = document.getElementById("breedSwiper");
//     breedSwiperDiv.innerHTML = "";
  
//     const breedSwiper = breedCollection.find(item => item.name === breed);
  
//     if (breedSwiper) {
//       const breedSwiperWrapperDiv = document.createElement("div");
//       breedSwiperWrapperDiv.classList.add("swiper-wrapper");
//       breedSwiperWrapperDiv.innerHTML = `
//         <div class="swiper-slide">
//         <img src="../css/img/dog-breeds/${breedSwiper.code}-1.avif">
//         </div>
//         `;
  
//         breedSwiperDiv.appendChild(breedSwiperWrapperDiv);
//     } else {
//       breedInfoDiv.textContent = "Породата не е намерена.";
//     }
  
//   }











// Event listener for the 'Display Breed Info' button
// document.getElementById("displayButton").addEventListener("click", function() {

//   const selectedBreed = document.getElementById("breedDropdown").value;
//   displayBreedInfoInDiv(selectedBreed);
//   displayBreedImgDiv(selectedBreed);


//   //От МИШО
// const lookup = breedCollection.find((element) => {
//   return element.id == 'немска овчарка'
// })

// const generateBar = (name, number) => {

//   const template = [];
//   for(let i = 1; i <= 5; i++) {
//       const classId = (i <= number) ? 'breed-trait-score__score-unit--filled' : '';
//       template.push(`<div class=breed-trait-score__score-unit ${classId}></div>`);
//   }

//   const barDiv = template.join(' ');

//   return `
//   <div class="breedTrait">
//       <div class="breed-trait__name">${name}</div>
//       <div class="breed-trait-score__score-wrap">
//         ${barDiv}
//       </div>
//   </div>       
//   `
// }

// const barTemplate = [];
// for(let key in lookup) {

//   const keyTranslate  = translateDictionary[key];
//   const barDiv        = generateBar(keyTranslate, lookup[key]);
//   barTemplate.push(barDiv); 
// }

// document.getElementById("breedTraitJava").innerHTML = barTemplate.join(''); 

// });