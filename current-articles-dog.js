const currentDogArticles = [
    {
        link: "../../health-care/dog/deworming.html",
        imgSrc: "../../css/img/index/1.png",
        title: "Обезпаразитяване",
        description: "Бъди информиран за видовете обезпаразитяващи и избери най-доброто за твоето куче."
    },
    {
        link: "../../growth/dog/estrous-cycle.html",
        imgSrc: "../../css/img/index/4.png",
        title: "Полов цикъл",
        description: "Научи как и кога твоето куче се разгонва."
    },
    {
        link: "../../health-care/dog/which-vet.html",
        imgSrc: "../../css/img/index/9.png",
        title: "Избор на ветеринар",
        description: "Виж как да избереш правилният за твоя любимец ветеринарен лекар."
    },
    {
        link: "../../diseases/dog/canine-parvovirus-infection.html",
        imgSrc: "../../css/img/index/5.png",
        title: "Парвовироза",
        description: "Виж и научи как да предпазиш кучето си от най-разпространеното и смъртоносно заболяване."
    },
    {
        link: "../../what-for-you/are-you-ready/are-you-ready.html",
        imgSrc: "../../css/img/index/7.png",
        title: "Тест: Готов ли си за куче?",
        description: "Разбери дали си готов да се грижиш за любимец."
    },
    {
        link: "../../how-take-care/dog/language.html",
        imgSrc: "../../css/img/index/dog-communication.png",
        title: "Как общуват кучетата?",
        description: "Разбери как общуват чрез тялото, опашката си и сигналите, които дават."
    }
];

// Function to generate articles
function generateCurrentDogArticles() {
    const container = document.querySelector('.current-articles');
    container.innerHTML = ''; // Clear existing content

    currentDogArticles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('current-article', 'current-article-dog');

        articleDiv.innerHTML = `
            <a href="${article.link}" class="no-dec">
                <img src="${article.imgSrc}">
                <div class="current-article-title">
                    <h4>${article.title}</h4>
                    <p>${article.description}</p>
                </div>
            </a>
        `;

        container.appendChild(articleDiv);
    });
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', generateCurrentDogArticles);