

const articleCollection = [
    {
        name: "Анатомия на кучето",
        url: "./what-for-you/dog/anatomy.html"},
    {
        name: "Природа на кучето",
        url: "./what-for-you/dog/nature.html"},
    {
        name: "Продължителност на живота на кучето",
        url: "./what-for-you/dog/life-expectancy.html"},
    {
        name: "Кратка история на кучето",
        url: "./what-for-you/dog/brief-history.html"},
    {
        name: "Предимствата да имаш куче",
        url: "./what-for-you/dog/perks.html"},
    {
        name: "Малко кученце или пораснало куче да взема",
        url: "./what-for-you/dog/young-or-adult.html"},
    {
        name: "Мъжко или женско куче да взема",
        url: "./what-for-you/dog/male-or-female.html"},
    {
        name: "Откъде мога да се сдобия с куче?",
        url: "./what-for-you/dog/where.html"},
    {
        name: "Въпросник (Контролен списък) преди да си взема куче",
        url: "./what-for-you/dog/before.html"},
    {
        name: "Подготовка на дома",
        url: "./adjustment/dog/preparing.html"},
    {
        name: "Скритите отрови в дома",
        url: "./adjustment/dog/poisons.html"},
    {
        name: "Първи дни на кучето у дома",
        url: "./adjustment/dog/first-days.html"},
    {
        name: "Избор на име",
        url: "./adjustment/dog/name.html"},
    {
        name: "Звукови сигнали и езика на тялото",
        url: "./how-take-care/dog/language.html"},
    {
        name: "Режим на сън",
        url: "./how-take-care/dog/sleep.html"},
    {
        name: "Обучение за ходене на тоалетна",
        url: "./how-take-care/dog/toilet.html"},
    {
        name: "Грижа за козина",
        url: "./how-take-care/dog/fur.html"},
    {
        name: "Грижа за нокти",
        url: "./how-take-care/dog/nails.html"},
    {
        name: "Профилактичен преглед",
        url: "./how-take-care/dog/check-up.html"},
    {
        name: "Фази на растеж",
        url: "./growth/dog/phases.html"},
    {
        name: "Грижа за осиротели кученца",
        url: "./growth/dog/orphan.html"},
    {
        name: "Мъжко или женско кученце имам?",
        url: "./growth/dog/male-or-female.html"},
    {
        name: "Изчисляване на възрастта в кучешки години",
        url: "./growth/dog/pet-years.html"},
    {
        name: "Полов цикъл",
        url: "./growth/dog/estrous-cycle.html"},
    {
        name: "Възпроизвеждане",
        url: "./growth/dog/breeding.html"},
    {
        name: "Бременност",
        url: "./growth/dog/pregnancy.html"},
    {
        name: "Раждане",
        url: "./growth/dog/parturition.html"},
    {
        name: "Кастрация",
        url: "./growth/dog/castration.html"},
    {
        name: "Старост",
        url: "./growth/dog/senility.html"},
    {
        name: "Избор на ветеринарен лекар",
        url: "./health-care/dog/which-vet.html"},
    {
        name: "Обезпаразитяване",
        url: "./health-care/dog/deworming.html"},
    {
        name: "Ваксинации",
        url: "./health-care/dog/vaccination.html"},
    {
        name: "Чипиране",
        url: "./health-care/dog/microchipping.html"},
    {
        name: "Паспорт и документация",
        url: "./health-care/dog/passport.html"},
    {
        name: "Преглед при ветеринарен лекар",
        url: "./health-care/dog/vet-exam.html"},
    {
        name: "Аптечка и първа помощ",
        url: "./health-care/dog/first-aid.html"},
    {
        name: "Кърлеж върху любимеца ми",
        url: "./health-care/dog/tick.html"},
    {
        name: "Даване на таблетки през устата",
        url: "./health-care/dog/pills.html"},
    {
        name: "Кучешка парвовироза",
        url: "./diseases/dog/canine-parvovirus-infection.html"},
    {
        name: "Кучешка коронавироза",
        url: "./diseases/dog/canine-coronavirus-infection.html"},
    {
        name: "Гана",
        url: "./diseases/dog/canine-distemper.html"},
    {
        name: "Ерлихиоза",
        url: "./diseases/dog/ehrlichiosis.html"},
    {
        name: "Дирофилариоза",
        url: "./diseases/dog/heartworm.html"},

]

const articleCatCollection = [
    {
        name: "Въпросник: Готов ли си за куче?",
        url: "./what-for-you/are-you-ready/are-you-ready.html"},
    {
        name: "Въпросник: Какво куче да си взема?",
        url: "./what-for-you/breeds/dog-breed-selector.html"},
    {
        name: "Библиотека с породи кучета",
        url: "./what-for-you/breeds/dog-breeds.html"},
    {
        name: "Анатомия на котката",
        url: "./what-for-you/cat/anatomy.html"},
    {
        name: "Природа на котката",
        url: "./what-for-you/cat/nature.html"},
    {
        name: "Продължителност на живота на котката",
        url: "./what-for-you/cat/life-expectancy.html"},
    {
        name: "Кратка история на котката",
        url: "./what-for-you/cat/brief-history.html"},
    {
        name: "Предимствата да имаш котка",
        url: "./what-for-you/cat/perks.html"},
    {
        name: "Въпросник: Готов ли си за котка?",
        url: "./what-for-you/are-you-ready-cat/are-you-ready.html"},
    {
        name: "Библиотека с породи котки",
        url: "./what-for-you/breeds/cat-breeds.html"},
    {
        name: "Малко коте или пораснала котка да взема",
        url: "./what-for-you/cat/young-or-adult.html"},
    {
        name: "Мъжка или женска котка да взема",
        url: "./what-for-you/cat/male-or-female.html"},
    {
        name: "Откъде мога да се сдобия с котка?",
        url: "./what-for-you/cat/where.html"},
    {
        name: "Въпросник (Контролен списък) преди да си взема котка",
        url: "./what-for-you/cat/before.html"},

        

    {
        name: "Подготовка на дома",
        url: "./adjustment/cat/preparing.html"},
    {
        name: "Скритите отрови в дома",
        url: "./adjustment/cat/poisons.html"},
    {
        name: "Първи дни на котката у дома",
        url: "./adjustment/cat/first-days.html"},
    {
        name: "Избор на име",
        url: "./adjustment/cat/name.html"},

        

    {
        name: "Сравни цените между видовете храни (калкулатор)",
        url: "./nutrition/calculator-compare-foods.html"},
    {
        name: "Звукови сигнали и езика на тялото",
        url: "./how-take-care/cat/language.html"},
    {
        name: "Режим на сън",
        url: "./how-take-care/cat/sleep.html"},
    {
        name: "Обучение за ходене на тоалетна",
        url: "./how-take-care/cat/toilet.html"},
    {
        name: "Грижа за козина",
        url: "./how-take-care/cat/fur.html"},
    {
        name: "Грижа за нокти",
        url: "./how-take-care/cat/nails.html"},
    {
        name: "Профилактичен преглед",
        url: "./how-take-care/cat/check-up.html"},
    {
        name: "Сравни цените между видовете храни (калкулатор)",
        url: "./nutrition/calculator-compare-foods.html"},
    
    

    {
        name: "Фази на растеж",
        url: "./growth/cat/phases.html"},
    {
        name: "Грижа за осиротели котенца",
        url: "./growth/cat/orphan.html"},
    {
        name: "Мъжко или женско котенце имам?",
        url: "./growth/cat/male-or-female.html"},
    {
        name: "Изчисляване на възрастта в котешки години",
        url: "./growth/cat/pet-years.html"},
    {
        name: "Полов цикъл",
        url: "./growth/cat/estrous-cycle.html"},
    {
        name: "Възпроизвеждане",
        url: "./growth/cat/breeding.html"},
    {
        name: "Бременност",
        url: "./growth/cat/pregnancy.html"},
    {
        name: "Раждане",
        url: "./growth/cat/parturition.html"},
    {
        name: "Кастрация",
        url: "./growth/cat/castration.html"},
    {
        name: "Старост",
        url: "./growth/cat/senility.html"},



    {
        name: "Избор на ветеринарен лекар",
        url: "./health-care/cat/which-vet.html"},
    {
        name: "Обезпаразитяване",
        url: "./health-care/cat/deworming.html"},
    {
        name: "Ваксинации",
        url: "./health-care/cat/vaccination.html"},
    {
        name: "Чипиране",
        url: "./health-care/cat/microchipping.html"},
    {
        name: "Паспорт и документация",
        url: "./health-care/cat/passport.html"},
    {
        name: "Преглед при ветеринарен лекар",
        url: "./health-care/cat/vet-exam.html"},
    {
        name: "Аптечка и първа помощ",
        url: "./health-care/cat/first-aid.html"},
    {
        name: "Кърлеж върху любимеца ми",
        url: "./health-care/cat/tick.html"},
    {
        name: "Даване на таблетки през устата",
        url: "./health-care/cat/pills.html"},



    {
        name: "Бълхи",
        url: "./diseases/fleas.html"},
    {
        name: "Кърлежи",
        url: "./diseases/ticks.html"},
    {
        name: "Цестодоза",
        url: "./diseases/tapeworms.html"},
    {
        name: "Тумор на млечната жлеза",
        url: "./diseases/mammary-gland-tumor.html"},
    {
        name: "Лимфома",
        url: "./diseases/lymphoma.html"},
    {
        name: "Бяс",
        url: "./diseases/rabies.html"},
    {
        name: "Панлевкопения",
        url: "./diseases/cat/feline-panleukopenia.html"},
    {
        name: "Котешка коронавирусна инфекция",
        url: "./diseases/cat/feline-coronavirus-infection.html"},
    {
        name: "Котешки инфекциозен перитонит",
        url: "./diseases/cat/feline-infectious-peritonitis.html"},
    {
        name: "Котешка херпесвироза",
        url: "./diseases/cat/feline-herpesvirus-infection.html"},
    {
        name: "Калицивироза",
        url: "./diseases/cat/feline-calicivirus-infection.html"},
    {
        name: "Котешка левкемия",
        url: "./diseases/cat/feline-leukemia-virus-infection.html"},
    {
        name: "Котешки имунодефицитен синдром",
        url: "./diseases/cat/feline-immunodeficiency-virus.html"},
    {
        name: "Бълхи",
        url: "./diseases/fleas.html"},
    {
        name: "Кърлежи",
        url: "./diseases/ticks.html"},
    {
        name: "Цестодоза",
        url: "./diseases/tapeworms.html"},
    {
        name: "Тумор на млечната жлеза",
        url: "./diseases/mammary-gland-tumor.html"},
    {
        name: "Лимфома",
        url: "./diseases/lymphoma.html"},
    {
        name: "Бяс",
        url: "./diseases/rabies.html"}
]


// DOG

function getRandomArticle() {
    const now = new Date();
    const storedData = localStorage.getItem('randomArticle');
    let parsedData = null;

    // Check if the stored data exists and is valid JSON
    if (storedData) {
        try {
            parsedData = JSON.parse(storedData);
        } catch (e) {
            console.error('Invalid JSON in localStorage:', storedData);
        }
    }

    const expirationTime = new Date(parsedData?.expiration || 0);

    // If no article or the stored article has expired
    if (!parsedData?.article || now >= expirationTime) {
        const randomIndex = Math.floor(Math.random() * articleCollection.length);
        const randomArticle = articleCollection[randomIndex];

        // Calculate expiration time (next 23:59)
        const nextMidnight = new Date();
        nextMidnight.setHours(23, 59, 59, 999);

        // Store the article and expiration time in localStorage
        const newStoredData = {
            article: randomArticle,
            expiration: nextMidnight.getTime()
        };
        localStorage.setItem('randomArticle', JSON.stringify(newStoredData));

        return randomArticle;
    }

    // Use the stored article
    return parsedData.article;
}

// Function to update the todays-article div
function updateTodaysArticle() {
    const todaysArticleElement = document.getElementById('todays-article');
    const todaysDogArticle = document.getElementById('todaysDogArticle');
    const randomArticle = getRandomArticle();

    // Update the content of the div with the random article's name
    todaysArticleElement.querySelector('.todays-article-name-dog').textContent = randomArticle.name;

    // Update the href attribute of the anchor tag
    const anchorElement = todaysDogArticle.querySelector('a');
    anchorElement.href = randomArticle.url;

    console.log("Today's Article:", randomArticle.name);
}

// Call the updateTodaysArticle function to display a random article on page load
updateTodaysArticle();























// CAT

function getRandomCatArticle() {
    const now = new Date();
    const storedData = localStorage.getItem('randomCatArticle');
    let parsedData = null;

    // Check if the stored data exists and is valid JSON
    if (storedData) {
        try {
            parsedData = JSON.parse(storedData);
        } catch (e) {
            console.error('Invalid JSON in localStorage:', storedData);
        }
    }

    const expirationTime = new Date(parsedData?.expiration || 0);

    // If no article or the stored article has expired
    if (!parsedData?.article || now >= expirationTime) {
        const randomIndex = Math.floor(Math.random() * articleCatCollection.length);
        const randomArticle = articleCatCollection[randomIndex];

        // Calculate expiration time (next 23:59)
        const nextMidnight = new Date();
        nextMidnight.setHours(23, 59, 59, 999);

        // Store the article and expiration time in localStorage
        const newStoredData = {
            article: randomArticle,
            expiration: nextMidnight.getTime()
        };
        localStorage.setItem('randomCatArticle', JSON.stringify(newStoredData));

        return randomArticle;
    }

    // Use the stored article
    return parsedData.article;
}

// Function to update the todays-article div
function updateTodaysCatArticle() {
    const todaysArticleElement = document.getElementById('todays-article');
    const todaysCatArticle = document.getElementById('todaysCatArticle');
    const randomCatArticle = getRandomCatArticle();

    // Update the content of the div with the random article's name
    todaysArticleElement.querySelector('.todays-article-name-cat').textContent = randomCatArticle.name;

    // Update the href attribute of the anchor tag
    const anchorElement = todaysCatArticle.querySelector('a');
    anchorElement.href = randomCatArticle.url;

    console.log("Today's Cat Article:", randomCatArticle.name);
}

// Call the updateTodaysCatArticle function to display a random article on page load
updateTodaysCatArticle();