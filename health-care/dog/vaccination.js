// Function to calculate weeks after a given date
function calculateWeeksAfterDate(startDate, weeks) {
    const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
    const targetDate = new Date(startDate.getTime() + weeks * oneWeekInMilliseconds);
    return targetDate.toLocaleDateString('bg-BG');
}

document.getElementById('calculate-btn').addEventListener('click', function() {
    const birthdateInput = document.getElementById('birthdate');
    const birthdateValue = birthdateInput.value;

    if (birthdateValue) {
        const birthdate = new Date(birthdateValue);
        document.getElementById('week6').textContent = calculateWeeksAfterDate(birthdate, 6);
        document.getElementById('week9').textContent = calculateWeeksAfterDate(birthdate, 9);
        document.getElementById('week12').textContent = calculateWeeksAfterDate(birthdate, 12);
        document.getElementById('week16').textContent = calculateWeeksAfterDate(birthdate, 16);
    } else {
        alert('Моля, въведете дата на раждане.');
    }
});
