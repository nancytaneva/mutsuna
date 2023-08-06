const birthdateInput    = document.getElementById('birthdate');
const everyWeeks        = document.getElementById('every-x-weeks');
const firstVaccineWeek  = document.getElementById('first-week');
let vacinationCollection = [];
let vacinationCollectionWsava = [];


// КАЛЕНДАР
const date = new Date();

const renderCalendarWsava = () => {

    // build array of presset
    const datePresetWsava = [];
    for(let i = 0; i < vacinationCollectionWsava?.length; i++ ) {
        datePresetWsava.push(`${vacinationCollectionWsava[i].getDate()}-${vacinationCollectionWsava[i].getMonth() + 1}-${vacinationCollectionWsava[i].getFullYear()}`)
    }
    // console.log(`${dateCollection[0].getDate()}-${dateCollection[0].getMonth()}-${dateCollection[0].getFullYear()}`)

    const getCheckedClass = (prevDateKey) => {

        console.log(prevDateKey);
        console.log(datePresetWsava)


        return datePresetWsava.includes(prevDateKey) ? 'is-checked-for-vacination-wsava' : '';
    }

    // console.log("DDDD")
    // console.log(datePresetWsava)


  date.setDate(1);

  const monthDays = document.querySelector(".wsava-days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0               
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

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

  // Вляво пиша queryselector за да избера h1, който е в div id="date", и съответно да го заменя с име на месец от масива months, като това число го получа от date.getMonth();
  document.querySelector(".wsava-date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".wsava-date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    const prevDate      = prevLastDay - x + 1;
    const prevDateKey   = `${prevDate}-${date.getMonth()}-${date.getFullYear()}`;

    days += `<div class="prev-date ${getCheckedClass(prevDateKey)}">
        <div>${prevDate}</div>
      </div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    const dateKey = `${i}-${date.getMonth() + 1}-${date.getFullYear()}`; //част от LocalStorage
      // Check if the current date is saved as checked
      
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        days += `
          <div class=" ${getCheckedClass(dateKey)}">
            <div>${i}</div>
          </div>
        `; // по-горното генерира HTML код
      } else {
        days += `
          <div class=" ${getCheckedClass(dateKey)}">
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

        days += `
            <div class="next-date ${getCheckedClass(nextDateKey)}">
                <div>${nextDate.getDate()}</div>
            </div>
        `;
    }
monthDays.innerHTML = days;
};

document.querySelector(".wsava-prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendarWsava();
});

document.querySelector(".wsava-next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendarWsava();
});

renderCalendarWsava();








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

            document.getElementById('vaccine1').innerHTML = `
                                    <td class="first-td">Първа ваксина:</td>
                                    <td>${selectedWeek}-а седмица</td>
                                    <td>${calculateWeeksAfterDate(birthdate, selectedWeek).toLocaleDateString('bg-BG')}</td>
            `;

            document.getElementById('vaccine2').innerHTML = `
                                    <td class="first-td">Втора ваксина:</td>
                                    <td>${selectedWeek + 3}-а седмица</td>
                                    <td>${calculateWeeksAfterDate(birthdate, selectedWeek + 3).toLocaleDateString('bg-BG')}</td>
            `;

            document.getElementById('vaccine3').innerHTML = `
                                    <td class="first-td">Трета ваксина:</td>
                                    <td>${selectedWeek + 6}-а седмица</td>
                                    <td>${calculateWeeksAfterDate(birthdate, selectedWeek + 6).toLocaleDateString('bg-BG')}</td>
            `;

            document.getElementById('revaccine1').innerHTML = `
                                    <td rowspan="3" class="first-td">Реваксинация:</td>
                                    <td>26-а седмица</td>
                                    <td>${calculateWeeksAfterDate(birthdate, 26).toLocaleDateString('bg-BG')}</td>
            `;

            document.getElementById('revaccine-or').innerHTML = `<td colspan="2" class="center-text italic">или</td>`;

            document.getElementById('revaccine2').innerHTML = `
                                    <td>52-а седмица</td>
                                    <td>${calculateWeeksAfterDate(birthdate, 52).toLocaleDateString('bg-BG')}</td>
            `;

            console.log('vacinationCollectionWsava', vacinationCollectionWsava);

            if(selectedWeek == 6) {
                document.getElementById('vaccine4').innerHTML = `
                    <td class="first-td">Четвърта ваксина:</td>
                    <td>${selectedWeek + 10}-а седмица</td>
                    <td>${calculateWeeksAfterDate(birthdate, selectedWeek + 10).toLocaleDateString('bg-BG')}</td>
                `;

                vacinationCollectionWsava = [
                    calculateWeeksAfterDate(birthdate, selectedWeek),
                    calculateWeeksAfterDate(birthdate, selectedWeek + 3),
                    calculateWeeksAfterDate(birthdate, selectedWeek + 6),
                    calculateWeeksAfterDate(birthdate, selectedWeek + 10),
                    calculateWeeksAfterDate(birthdate, 26),
                    calculateWeeksAfterDate(birthdate, 52)
                ];
            }
            else {
                document.getElementById('vaccine4').innerHTML = `
                    <td class="first-td">Четвърта ваксина:</td>
                    <td>${selectedWeek + 9}-а седмица</td>
                    <td>${calculateWeeksAfterDate(birthdate, selectedWeek + 9).toLocaleDateString('bg-BG')}</td>
                `;
                vacinationCollectionWsava = [
                    calculateWeeksAfterDate(birthdate, selectedWeek),
                    calculateWeeksAfterDate(birthdate, selectedWeek + 3),
                    calculateWeeksAfterDate(birthdate, selectedWeek + 6),
                    calculateWeeksAfterDate(birthdate, selectedWeek + 9),
                    calculateWeeksAfterDate(birthdate, 26),
                    calculateWeeksAfterDate(birthdate, 52)
                ];
            }
            
        } else {
            alert('Моля, въведете дата на раждане.');
        }
    }

    else if(everyWeeksValue == 4) {
        if (birthdateValue) {
            const birthdate = new Date(birthdateValue);
            
            
            document.getElementById('vaccine1').innerHTML = `
                                    <td class="first-td">Първа ваксина:</td>
                                    <td>${selectedWeek}-а седмица</td>
                                    <td>${calculateWeeksAfterDate(birthdate, selectedWeek).toLocaleDateString('bg-BG')}</td>
            `;

            document.getElementById('vaccine2').innerHTML = `
                                    <td class="first-td">Втора ваксина:</td>
                                    <td>${selectedWeek + 4}-а седмица</td>
                                    <td>${calculateWeeksAfterDate(birthdate, selectedWeek + 3).toLocaleDateString('bg-BG')}</td>
            `;

            document.getElementById('vaccine3').innerHTML = `
                                    <td class="first-td">Трета ваксина:</td>
                                    <td>${selectedWeek + 8}-а седмица</td>
                                    <td>${calculateWeeksAfterDate(birthdate, selectedWeek + 6).toLocaleDateString('bg-BG')}</td>
            `;

            document.getElementById('revaccine1').innerHTML = `
                                    <td rowspan="3" class="first-td">Реваксинация:</td>
                                    <td>26-а седмица</td>
                                    <td>${calculateWeeksAfterDate(birthdate, 26).toLocaleDateString('bg-BG')}</td>
            `;

            document.getElementById('revaccine-or').innerHTML = `<td colspan="2" class="center-text italic">или</td>`;

            document.getElementById('revaccine2').innerHTML = `
                                    <td>52-а седмица</td>
                                    <td>${calculateWeeksAfterDate(birthdate, 52).toLocaleDateString('bg-BG')}</td>
            `;
            
            if (selectedWeek == 6 || selectedWeek == 7) {
                document.getElementById('vaccine4').innerHTML = `
                    <td class="first-td">Четвърта ваксина:</td>
                    <td>${selectedWeek + 12}-а седмица</td>
                    <td>${calculateWeeksAfterDate(birthdate, selectedWeek + 12).toLocaleDateString('bg-BG')}</td>
                `;

                vacinationCollectionWsava = [
                    calculateWeeksAfterDate(birthdate, selectedWeek),
                    calculateWeeksAfterDate(birthdate, selectedWeek + 4),
                    calculateWeeksAfterDate(birthdate, selectedWeek + 8),
                    calculateWeeksAfterDate(birthdate, selectedWeek + 12),
                    calculateWeeksAfterDate(birthdate, 26),
                    calculateWeeksAfterDate(birthdate, 52)
                ];
            }
            else {
                document.getElementById('vaccine4').textContent = "";
                vacinationCollectionWsava = [
                    calculateWeeksAfterDate(birthdate, selectedWeek),
                    calculateWeeksAfterDate(birthdate, selectedWeek + 4),
                    calculateWeeksAfterDate(birthdate, selectedWeek + 8),
                    calculateWeeksAfterDate(birthdate, 26),
                    calculateWeeksAfterDate(birthdate, 52)
                ];
            }


            renderCalendarWsava();

        } else {
            alert('Моля, въведете дата на раждане.');
        }
    }    

}


document.getElementById('calculate-btn').addEventListener('click', function () {
    calculateWeeksVaccine();
    renderCalendarWsava();
}
);

document.getElementById('first-week').addEventListener('change', function() {
    calculateWeeksVaccine();
    renderCalendarWsava();
});

document.getElementById('every-x-weeks').addEventListener('change', function() {
    calculateWeeksVaccine();
    renderCalendarWsava();
});



