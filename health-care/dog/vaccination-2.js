const birthdateInput    = document.getElementById('birthdate');
const everyWeeks        = document.getElementById('every-x-weeks');
const firstVaccineWeek  = document.getElementById('first-week');

// КАЛЕНДАР
// This code initializes a new Date object called date which represents the current date and time. The console.log() statement logs the date object to the console, displaying the current date and time.
const date = new Date();
// console.log(date);

// Expected output: 19
// This code defines a function called renderCalendar using an arrow function syntax (() => {}). Inside the function, the setDate(1) method is called on the date object. This sets the day of the month to 1. This step is necessary to ensure that the calendar always starts from the first day of the month.
const renderCalendar = () => {
  date.setDate(1);

  const savedDates = JSON.parse(localStorage.getItem("checkedDates")) || []; //част от LocalStorage: Set a value in local storage

  // This line of code selects an HTML element with the class name "days" and assigns it to the monthDays variable. This element will be used to display the calendar days.
  const monthDays = document.querySelector(".days");

  // This code calculates the last day of the current month. It creates a new Date object using the getFullYear() and getMonth() methods of the date object to get the current year and month. The third argument of the Date constructor is set to 0, which represents the last day of the previous month. The getDate() method is then called on this new Date object to retrieve the last day of the current month.
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  // Similar to the previous code block, this code calculates the last day of the previous month. It creates a new Date object using the current year and the previous month.
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0               // когато напишеш 0 - взимаш числото на годината и числото на месеца, но взимаш и деня на ПРЕДХОДНИЯ МЕСЕЦ, докато ако напишеш 1 - деня на ДНЕШНИЯ МЕСЕЦ.
  ).getDate();

  // These lines of code calculate the index of the first day and the last day of the current month. getDay() method returns the day of the week as a number (0-6, where 0 represents Sunday and 6 represents Saturday). firstDayIndex will store the index of the first day of the current month, and lastDayIndex will store the index of the last day of the current month.
  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  // This line of code calculates the number of days from the next month that will be displayed in the calendar to fill the remaining empty spaces at the end of the current month. It subtracts the lastDayIndex from 7 (total number of days in a week) and then subtracts 1 to account for the current day.
  const nextDays = 7 - lastDayIndex - 1;

  // This code defines an array of month names in Bulgarian. МАСИВ от месеците
  const months = [
    "Януари",
    "Февруари",
    "Март",
    "Април",
    "Май",
    "Юни",
    "Юли",
    "Август",
    "Септември",
    "Октомври",
    "Ноември",
    "Декември",
  ];

  // This code defines an array of month names in Bulgarian.
  // Вляво пиша queryselector за да избера h1, който е в div id="date", и съответно да го заменя с име на месец от масива months, като това число го получа от date.getMonth();
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    const prevDate = prevLastDay - x + 1;
    const prevDateKey = `${prevDate}-${date.getMonth()}-${date.getFullYear()}`;

    // Check if the previous date is saved as checked
    const isChecked = savedDates.includes(prevDateKey);  //част от LocalStorage

    days += `<div class="prev-date ${isChecked ? 'checked-date' : ''}">
        <div>${prevDate}</div>
        
      </div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    const dateKey = `${i}-${date.getMonth() + 1}-${date.getFullYear()}`; //част от LocalStorage
      // Check if the current date is saved as checked
      const isChecked = savedDates.includes(dateKey); ////част от LocalStorage


      
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        days += `
          <div class="${isChecked ? 'checked-date' : ''}">
            <div>${i}</div>
          </div>
        `; // по-горното генерира HTML код
      } else {
        days += `
          <div class="${isChecked ? 'checked-date' : ''}">
            <div>${i}</div>
            
          </div>
        `;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
        const nextDate = new Date(date);
        nextDate.setDate(lastDay + j);

        const nextMonth = nextDate.getMonth() + 1;
        const nextYear = nextDate.getFullYear();
        const nextDateKey = `${nextDate.getDate()}-${nextMonth}-${nextYear}`;

        // Check if the next date is saved as checked
        const isChecked = savedDates.includes(nextDateKey);

        days += `
            <div class="next-date ${isChecked ? 'checked-date' : ''}">
                <div>${nextDate.getDate()}</div>
            </div>
        `;
    }
monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();



// ИЗЧИСЛЯВАНЕ НА СЕДМИЦИ
function calculateWeeksAfterDate(startDate, weeks) {
    const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
    const targetDate = new Date(startDate.getTime() + weeks * oneWeekInMilliseconds);
    return targetDate;
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
        document.getElementById('oldvaccine1').textContent  = calculateWeeksAfterDate(oldBirthdate, 6);
        document.getElementById('oldvaccine2').textContent  = calculateWeeksAfterDate(oldBirthdate, 8);
        document.getElementById('oldvaccine3').textContent  = calculateWeeksAfterDate(oldBirthdate, 9);
        document.getElementById('oldvaccine4').textContent  = calculateWeeksAfterDate(oldBirthdate, 12);
        document.getElementById('oldrevaccine').textContent = calculateWeeksAfterDate(oldBirthdate, 52);
        

        
        const calculatedFirstWeekVaccine    = calculateWeeksAfterDate(oldBirthdate, 6);
        const calculatedSecondWeekVaccine   = calculateWeeksAfterDate(oldBirthdate, 8);
        const calculatedThirdWeekVaccine    = calculateWeeksAfterDate(oldBirthdate, 9);
        const calculatedFourthWeekVaccine   = calculateWeeksAfterDate(oldBirthdate, 12);
        const calculatedWeekRevaccine       = calculateWeeksAfterDate(oldBirthdate, 52);


                    // Create a string to store the calculated weeks
                    let calculatedWeeksString = calculatedFirstWeekVaccine;
                    calculatedWeeksString += calculatedSecondWeekVaccine;
                    calculatedWeeksString += calculatedThirdWeekVaccine;
                    calculatedWeeksString += calculatedFourthWeekVaccine;
                    calculatedWeeksString += calculatedWeekRevaccine;
        
                    // Call another function and pass the calculated weeks string as an argument
                    // For example, you can call a function named "useCalculatedWeeks" like this:
                    useCalculatedWeeks(calculatedWeeksString);
        
                    // You can also display the calculated weeks string on the webpage if needed
                    console.log(calculatedWeeksString);


    // Update the calendar with the calculated weeks and color the relevant dates
    updateCalendarWithCalculatedWeeks(calculatedFirstWeekVaccine, calculatedSecondWeekVaccine, calculatedThirdWeekVaccine, calculatedFourthWeekVaccine, calculatedWeekRevaccine);
    } else {
        alert('Моля, въведете дата на раждане.');
    }
});





// Function to convert a date to the Bulgarian format
function convertToBulgarianFormat(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('bg-BG', options);
}

function convertToNormalFormat(bulgarianDate) {
    // Bulgarian dates are expected to be in the format: "day month year"
    const dateParts = bulgarianDate.split(' ');
    const day = parseInt(dateParts[0]);
    const month = getMonthIndex(dateParts[1]);
    const year = parseInt(dateParts[2]);

    return new Date(year, month, day);
}




function useCalculatedWeeks(weeksString) {
    // Do something with the weeksString, such as displaying it or processing it further
    console.log('Using the calculated weeks:');
    console.log(weeksString);
}



// Update the calendar with the calculated weeks and color the relevant dates
function updateCalendarWithCalculatedWeeks(vaccine1Weeks, vaccine2Weeks, vaccine3Weeks, vaccine4Weeks, revaccineWeeks) {
    // Get all the date elements within the calendar
    const dateElements = document.querySelectorAll('.prev-date, .checked-date, .next-date');

    // Loop through each date element and update its class to add "calculated-date" where applicable
    dateElements.forEach((dateElement) => {
        const dateValue = dateElement.querySelector('div').textContent;
        const date = new Date(dateValue); // Convert the date value to a Date object

        if (
            date.getTime() === vaccine1Weeks.getTime() ||
            date.getTime() === vaccine2Weeks.getTime() ||
            date.getTime() === vaccine3Weeks.getTime() ||
            date.getTime() === vaccine4Weeks.getTime() ||
            date.getTime() === revaccineWeeks.getTime()
        ) {
            dateElement.classList.add('calculated-date');
        } else {
            dateElement.classList.remove('calculated-date');
        }
    });
}



// function updateCalendarWithCalculatedWeeks(calculatedFirstWeekVaccine, calculatedSecondWeekVaccine, calculatedThirdWeekVaccine, calculatedFourthWeekVaccine, calculatedWeekRevaccine) {
//     // Get all the date elements within the calendar
//     const dateElements = document.querySelectorAll('.prev-date, .checked-date, .next-date');


//     convertToBulgarianFormat(calculatedFirstWeekVaccine);
//     convertToBulgarianFormat(calculatedSecondWeekVaccine);
//     convertToBulgarianFormat(calculatedThirdWeekVaccine);
//     convertToBulgarianFormat(calculatedFourthWeekVaccine);
//     convertToBulgarianFormat(calculatedWeekRevaccine);

//     convertToNormalFormat(calculatedFirstWeekVaccine);
//     convertToNormalFormat(calculatedSecondWeekVaccine);
//     convertToNormalFormat(calculatedThirdWeekVaccine);
//     convertToNormalFormat(calculatedFourthWeekVaccine);
//     convertToNormalFormat(calculatedWeekRevaccine);
    
    


//     // Loop through each date element and update its class to add "calculated-date" where applicable
//     dateElements.forEach((dateElement) => {
//         const dateValue = dateElement.querySelector('div').textContent;
//         if (
//             dateValue === calculatedFirstWeekVaccine ||
//             dateValue === calculatedSecondWeekVaccine ||
//             dateValue === calculatedThirdWeekVaccine ||
//             dateValue === calculatedFourthWeekVaccine ||
//             dateValue === calculatedWeekRevaccine
//         ) {
//             dateElement.classList.add('calculated-date');
//         } else {
//             dateElement.classList.remove('calculated-date');
//         }
//     });
// }


// Helper function to get the month index from the month name in Bulgarian
function getMonthIndex(monthName) {
    const monthsBg = [
        "Януари",
        "Февруари",
        "Март",
        "Април",
        "Май",
        "Юни",
        "Юли",
        "Август",
        "Септември",
        "Октомври",
        "Ноември",
        "Декември",
    ];
    return monthsBg.indexOf(monthName);
}