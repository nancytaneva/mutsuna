const calendarAgeYears = document.getElementById("calendar-age-years").value;
console.log(`${calendarAgeYears}`);

const calendarAgeMonths = document.getElementById("calendar-age-months").value;
console.log(`${calendarAgeMonths}`);

function calculateAgeFunction(calendarAgeYears, calendarAgeMonths) {
    // var realAge = 0;
    // var realWord = "";
    if(calendarAgeYears < 1 && calendarAgeMonths <= 1) {
    console.log(`1 година`);
    }
    if(calendarAgeYears < 1 && calendarAgeMonths == 2) {
        console.log(`3 години`);
        }
}


const calculateAgeBtn = document.getElementById("calculate-age").value;

calculateAgeBtn.addEventListener('click', () => {
    calculateAgeFunction();

});