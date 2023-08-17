// Define an array of dog breed objects
const breedCollection = [
  {
    id      : 'немска овчарка',
    name    : "Немска овчарка",
    nameEn  : "German Shepherd Dog",
    code    : "1151",
    general : {
      country     : "Германия",
      lifeLength  : "9-13 г."
    },
    physicalTraits: {
      height    : {
        female    : "55-60 см",
        male      : "60-65 см"
      },
      weight      : {
        female    : "22-32 кг",
        male      : "30-40 кг"
      },
    },
    history       : "Добави историята тук.",
    health        : "Добави имената на наследствените заболявания тук.",
    
    score: {
      family : {
        affectionateWithFamily  : 5,
        goodWithYoungChildren   : 5,
        goodWithOtherDogs       : 3
      },
      physical: {
        shedding                : 4,
        grooming                : 2,
        drooling                : 2,
        coatLength              : 2,
      },
      social : {
        opennesToStrgangers     : 3,
        playfulness             : 4,
        protectiveNature        : 5,
        adaptability            : 5
      },
      character : {
        trainability            : 5,
        energy                  : 5,
        barking                 : 3,
        mentalStimulationNeeds  : 5
      }
    }
  }
];

function* generateMirroredMarginClass() {

  for(const element of [120, 80, 40, 0]) {
    yield `ml${element} breedTraitMirrored`;
  }
}

function* generateProgressiveMarginClass() {

  for(const element of [0, 40, 80, 120]) {
    yield `ml${element}`;
  }
}

let mirrorMarginClassGenerator      = generateMirroredMarginClass();
let progressiveMarginClassGenerator = generateProgressiveMarginClass();

const resetGenerator = () => {

  mirrorMarginClassGenerator      = generateMirroredMarginClass();
  progressiveMarginClassGenerator = generateProgressiveMarginClass();
}

const getMarginClass = (isMirrored) => {
 
  return (isMirrored) 
    ? mirrorMarginClassGenerator.next().value 
    : progressiveMarginClassGenerator.next().value;
}

const generateBar = (name, number, marginClass) => {

  const template = [];
  for(let i = 1; i <= 5; i++) {
      const classId = (i <= number) ? 'breed-trait-score__score-unit--filled' : 'breed-trait-score__score-unit';
      template.push(`<div class="${classId}"></div>`);
  }

  const barDiv = template.join(' ');

  return `
    <div class="breedTrait ${marginClass}">
      <div class="breed-trait__name">${name}</div>
        <div class="breed-trait-score__score-wrap">
        ${barDiv}
      </div>
    </div>`;
}

// get breed object
// TODO
const breedObject = breedCollection[0];

const scorePlaceholderCollection = document.querySelectorAll('[data-score]');

for(let index = 0; index < scorePlaceholderCollection.length; index++) {

  const placeholder     = scorePlaceholderCollection[index];
  const placeholderKey  = placeholder.getAttribute('data-score');
  const isMirrored      = placeholder.getAttribute('data-mirror') === 'true'; 
  resetGenerator();

  const getScoreObject  = breedObject.score[placeholderKey];

  const barTemplate = [];
  for(let key in getScoreObject) {
    
    const marginClass   = getMarginClass(isMirrored) 
    const keyTranslate  = key;
    const barDiv        = generateBar(keyTranslate, getScoreObject[key], marginClass);
    barTemplate.push(barDiv); 
  }
  
  placeholder.innerHTML = barTemplate.join('');
}




const translateDictionary = {
  country:                "Произход",
  lifeLength:             "Живот",
  height:                 "Височина",
  weight:                 "Тегло",
  history:                "История",
  health:                 "Здраве",
  affectionateWithFamily: "Привързаност към семейството",
  goodWithYoungChildren:  "Разбира се с деца",
  goodWithOtherDogs:      "Разбира се с други кучета"

}







// Function to populate the breed dropdown list
function populateDropdown() {
  const breedDropdown = document.getElementById("breedDropdown");

  breedCollection.forEach(breed => {
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

  const breedInfo = breedCollection.find(item => item.name === breed);

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
  
    const breedSwiper = breedCollection.find(item => item.name === breed);
  
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




// Event listener for the 'Display Breed Info' button
document.getElementById("displayButton").addEventListener("click", function() {
  const selectedBreed = document.getElementById("breedDropdown").value;
  displayBreedInfoInDiv(selectedBreed);
  displayBreedImgDiv(selectedBreed);


  //От МИШО
const lookup = breedCollection.find((element) => {
  return element.id == 'немска овчарка'
})

const generateBar = (name, number) => {

  const template = [];
  for(let i = 1; i <= 5; i++) {
      const classId = (i <= number) ? 'breed-trait-score__score-unit--filled' : '';
      template.push(`<div class=breed-trait-score__score-unit ${classId}></div>`);
  }

  const barDiv = template.join(' ');

  return `
  <div class="breedTrait">
      <div class="breed-trait__name">${name}</div>
      <div class="breed-trait-score__score-wrap">
        ${barDiv}
      </div>
  </div>       
  `
}

const barTemplate = [];
for(let key in lookup) {

  const keyTranslate  = translateDictionary[key];
  const barDiv        = generateBar(keyTranslate, lookup[key]);
  barTemplate.push(barDiv); 
}

document.getElementById("breedTraitJava").innerHTML = barTemplate.join(''); 

});



// Populate the breed dropdown when the page loads
window.addEventListener("load", populateDropdown);













