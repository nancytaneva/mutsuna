window.$scoreComponent = (function () {

    function* generateMirroredMarginClass() {
        for(const element of [120, 80, 40, 0]) yield `ml${element} breedTraitMirrored`;
    }
    
    function* generateProgressiveMarginClass() {
        for(const element of [0, 40, 80, 120]) yield `ml${element}`;
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
      
    /**
     * @author Mihail Petrov
     * @param {*} name 
     * @param {*} number 
     * @param {*} marginClass 
     * @returns 
     */
    const generateBar = (name, number, marginClass) => {
    
        const template = [];
        for(let i = 1; i <= 5; i++) {
            const classId = (i <= number) 
                ? 'breed-trait-score__score-unit--filled' 
                : 'breed-trait-score__score-unit';
    
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
      
    /**
     * @author Mihail Petrov
     * @param {*} breedObject 
     */
    function renderBreedScore(breedObject) {
    
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
    }
    
    
    /**
     * @author Nansy Taneva
     * @param {*} breed 
     */
    function renderBreedInfo(breedInfo) {
    
        const breedInfoDiv     = document.getElementById("breedInfo");
        breedInfoDiv.innerHTML = ""; // Clear previous content
    
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
    }

    function render(breedObject) {

        renderBreedInfo(breedObject);
        renderBreedScore(breedObject);
    }

    return { render }

})();