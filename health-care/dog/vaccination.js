const birthdateInput    = document.getElementById('birthdate');
const everyWeeks        = document.getElementById('every-x-weeks');
const firstVaccineWeek  = document.getElementById('first-week');


// ИЗЧИСЛЯВАНЕ НА СЕДМИЦИ
function calculateWeeksAfterDate(startDate, weeks) {
    const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
    const targetDate = new Date(startDate.getTime() + weeks * oneWeekInMilliseconds);
    return targetDate.toLocaleDateString('bg-BG');
}


function calculateWeeksVaccine() {
    const birthdateValue    = birthdateInput.value;
    const everyWeeksValue   = everyWeeks.value;
    const selectedWeek      = parseInt(document.getElementById('first-week').value, 10);
    
    if(everyWeeksValue == 3) {
        if (birthdateValue) {
            const birthdate = new Date(birthdateValue);
            document.getElementById('vaccine1').textContent = `Първа ваксина: ${selectedWeek}-а седмица: ${calculateWeeksAfterDate(birthdate, selectedWeek)}`;
            document.getElementById('vaccine2').textContent = `Втора ваксина: ${selectedWeek + 3}-а седмица:  ${calculateWeeksAfterDate(birthdate, selectedWeek + 3)}`;
            document.getElementById('vaccine3').textContent = `Трета ваксина: ${selectedWeek + 6}-а седмица:  ${calculateWeeksAfterDate(birthdate, selectedWeek + 6)}`;
            // document.getElementById('vaccine4').textContent = `Червърта ваксина: ${selectedWeek + 10}-а седмица:  ${calculateWeeksAfterDate(birthdate, selectedWeek + 10)}`;
            document.getElementById('revaccine').textContent = `Реваксинация: 26-a седмица (${calculateWeeksAfterDate(birthdate, 26)}) или 52-а седмица (${calculateWeeksAfterDate(birthdate, 52)})`;

            if(selectedWeek == 6) {
                document.getElementById('vaccine4').textContent = `Червърта ваксина: ${selectedWeek + 10}-а седмица:  ${calculateWeeksAfterDate(birthdate, selectedWeek + 10)}`;
            }
            else {
                document.getElementById('vaccine4').textContent = `Червърта ваксина: ${selectedWeek + 9}-а седмица:  ${calculateWeeksAfterDate(birthdate, selectedWeek + 9)}`;
            }
            
        } else {
            alert('Моля, въведете дата на раждане.');
        }
    }

    else if(everyWeeksValue == 4) {
        if (birthdateValue) {
            const birthdate = new Date(birthdateValue);
            
            document.getElementById('vaccine1').textContent = `Първа ваксина: ${selectedWeek}-а седмица:  ${calculateWeeksAfterDate(birthdate, selectedWeek)}`;
            document.getElementById('vaccine2').textContent = `Втора ваксина: ${selectedWeek + 4}-а седмица:  ${calculateWeeksAfterDate(birthdate, selectedWeek + 4)}`;
            document.getElementById('vaccine3').textContent = `Трета ваксина: ${selectedWeek + 8}-а седмица:  ${calculateWeeksAfterDate(birthdate, selectedWeek + 8)}`;
            document.getElementById('revaccine').textContent = `Реваксинация: 26-a седмица (${calculateWeeksAfterDate(birthdate, 26)}) или 52-а седмица (${calculateWeeksAfterDate(birthdate, 52)})`;

            if (selectedWeek == 6 || selectedWeek == 7) {
                document.getElementById('vaccine4').textContent = `Червърта ваксина: ${selectedWeek + 12}-а седмица:  ${calculateWeeksAfterDate(birthdate, selectedWeek + 12)}`;
            }
            else {
                document.getElementById('vaccine4').textContent = "";
            }
        } else {
            alert('Моля, въведете дата на раждане.');
        }
    }    
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    calculateWeeksVaccine();
}
);

document.getElementById('first-week').addEventListener('change', function() {
    calculateWeeksVaccine();
});

document.getElementById('every-x-weeks').addEventListener('change', function() {
    calculateWeeksVaccine();
});



document.getElementById('old-calculate-btn').addEventListener('click', function () {
    const oldBirthdateInput    = document.getElementById('old-birthdate');
    const oldBirthdateValue    = oldBirthdateInput.value;


    if (oldBirthdateValue) {
        const oldBirthdate = new Date(oldBirthdateValue);
        document.getElementById('oldvaccine1').textContent = calculateWeeksAfterDate(oldBirthdate, 6);
        document.getElementById('oldvaccine2').textContent = calculateWeeksAfterDate(oldBirthdate, 8);
        document.getElementById('oldvaccine3').textContent = calculateWeeksAfterDate(oldBirthdate, 9);
        document.getElementById('oldvaccine4').textContent = calculateWeeksAfterDate(oldBirthdate, 12);
        document.getElementById('oldrevaccine').textContent = calculateWeeksAfterDate(oldBirthdate, 52);

    } else {
        alert('Моля, въведете дата на раждане.');
    }



}
);


