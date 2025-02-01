const currentCatArticles = [
    {
        link: "../../health-care/cat/deworming.html",
        imgSrc: "../../css/img/index/3.png",
        title: "Обезпаразитяване",
        description: "Бъди информиран за видовете обезпаразитяващи и избери най-доброто за твоята котка."
    },
    {
        link: "../../growth/cat/estrous-cycle.html",
        imgSrc: "../../css/img/index/2.png",
        title: "Полов цикъл",
        description: "Научи как и кога твоята котка се разгонва."
    },
    {
        link: "../../health-care/cat/which-vet.html",
        imgSrc: "../../css/img/index/vet-cat.png",
        title: "Избор на ветеринар",
        description: "Виж как да избереш правилният за твоя любимец ветеринарен лекар."
    },
    {
        link: "../../diseases/cat/feline-panleukopenia.html",
        imgSrc: "../../css/img/index/6.png",
        title: "Панлевкопения",
        description: "Прочети за една от най-смъртоносните инфекции по котките."
    },
    {
        link: "../../what-for-you/are-you-ready-cat/are-you-ready.html",
        imgSrc: "../../css/img/index/8.png",
        title: "Тест: Готов ли си за котка?",
        description: "Разбери дали си готов да се грижиш за любимец."
    },
    {
        link: "../../how-take-care/cat/language.html",
        imgSrc: "../../css/img/index/cat-communication.png",
        title: "Как общуват котките?",
        description: "Разбери как общуват чрез тялото, опашката си и сигналите, които дават."
    }
];

// Function to generate articles
function generateCurrentCatArticles() {
    const container = document.querySelector('.current-articles');
    container.innerHTML = ''; // Clear existing content

    currentCatArticles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('current-article', 'current-article-cat');

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
document.addEventListener('DOMContentLoaded', generateCurrentCatArticles);