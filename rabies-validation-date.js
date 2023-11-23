const date = new Date();
console.log(date);

const currentDate = document.getElementById("current-date");
const validationDate = document.getElementById("validation-date");

const formattedCurrentDate = date.toLocaleDateString('bg-BG');

currentDate.innerHTML = `${formattedCurrentDate}`;



const validationDateObj = new Date(date);
validationDateObj.setDate(date.getDate() + 21);


const formattedValidationDate = validationDateObj.toLocaleDateString('bg-BG');

validationDate.innerHTML = `${formattedValidationDate}`;