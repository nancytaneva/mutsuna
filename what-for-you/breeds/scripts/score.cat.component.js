window.$scoreCatComponent = (function () {

    function renderBreedInfo(breedInfo) {
    
        const breedInfoDiv     = document.getElementById("breedInfo");
        breedInfoDiv.innerHTML = ""; // Clear previous content
    
        const breedNameDiv = document.createElement("div");
        breedNameDiv.classList.add("card");
        breedNameDiv.innerHTML = `
                <p class="card-title">Порода:</p>
                <p class="card-text">${breedInfo.name}</p>
            `; 
    
        // const lifeLengthDiv = document.createElement("div");
        // lifeLengthDiv.classList.add("card");
        // lifeLengthDiv.innerHTML = `
        //         <p class="card-title">Живот:</p>
        //         <p class="card-text">${breedInfo.general.life_length_min}-${breedInfo.general.life_length_max} г.</p>
        //     </div>
        // `;
    
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("card");
        countryDiv.innerHTML = `
                <p class="card-title">Произход:</p>
                <p class="card-text">${breedInfo.country}</p>
            </div>
        `;
    
        breedInfoDiv.appendChild(breedNameDiv);
        // breedInfoDiv.appendChild(lifeLengthDiv);
        breedInfoDiv.appendChild(countryDiv);

        document.getElementById('breed-heading').innerHTML = `
        <div class="heading">${breedInfo.name}</div>
        <div class="choose-pet-text">(${breedInfo.nameEn})</div>
        `;

        document.getElementById('swiper-wrapper').innerHTML = `
        <div class=""><img src='./img/cat/${breedInfo.code}/1.png' class="breed-img"></div>
        `;

        document.getElementById('breedInfoParagraph').innerHTML = `
        <div class="contain p8">${breedInfo.intro}</div>
        <div class="contain p8"><strong>Заболявания, често срещани при породата:</strong></div>
        <ul class="contain p8 ml40">
            ${breedInfo.health.map(disease => `<li>${disease}</li>`).join('')}
        </ul>
        `
    }


    function render(breedObject) {

        renderBreedInfo(breedObject);
    }

    return { render }

})();