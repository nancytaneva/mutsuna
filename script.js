document.addEventListener('copy', function (event) {
    event.preventDefault();
    alert('При ИЗПОЛЗВАНЕ на текст от този сайт трябва да се спомене ИЗТОЧНИКА, в този случай: MUTSUNA.com ( Виж: "Политика на поверителност").');
  });


//   CONTACT US
function toggleForm() {
    var form = document.getElementById("contactForm");
    if (form.style.display === "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  }