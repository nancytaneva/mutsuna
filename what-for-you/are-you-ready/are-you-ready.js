const startBtn          = document.getElementById("start-btn");
const landing           = document.getElementById("landing");
const toolProgress      = document.querySelector(".tool-progress");
const stepsContainer    = document.querySelector(".steps-container");
const steps             = document.querySelectorAll(".step");

const toolProgressUl = document.querySelector(".tool-progress ul");
const progressBar = document.querySelector(".tool-progress-bar");
const numQuestions = 20;
const yourResult = document.getElementById("your-result");

let animationDelay = 0;


// Generate the li elements
for (let i = 0; i < numQuestions; i++) {
    const li = document.createElement("li");
    li.setAttribute("data-step", i);
    li.setAttribute("data-increment", (i * (94 / (numQuestions - 1))).toFixed(2));
    li.style.left = `${(i * (94 / (numQuestions - 1))).toFixed(2)}%`;
    li.style.transform = "scale(1)";
    li.style.opacity = "0"; // Initial opacity is set to 0
    li.style.transition = "opacity 1.5s"; // Add transition for opacity
    toolProgressUl.appendChild(li);


}

setTimeout(() => {
    toolProgressUl.style.width = "94%";
}, 100 * (numQuestions - 1)); // Adjust the delay based on the number of questions

// Update the progress bar width
const currentStep = 0; // Change this to the current step (0-based index)

// Activate the current step li element
const liElements = toolProgressUl.querySelectorAll("li");
liElements[currentStep].classList.add("active");


function animateEffect(element, startTranslateY, startOpacity, endTranslateY, endOpacity, duration, delay) {
    const startTime = performance.now();

    function updateAnimation(timestamp) {
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        const translateY = startTranslateY + (endTranslateY - startTranslateY) * progress;
        const opacity = startOpacity + (endOpacity - startOpacity) * progress;

        element.style.transform = `translateY(${translateY}px)`;
        element.style.opacity = opacity;

        if (progress < 1) {
            requestAnimationFrame(updateAnimation);
        }
    }

    setTimeout(() => {
        requestAnimationFrame(updateAnimation);
    }, delay);
}


function animateOnlyOneElement(element) {
    animateEffect(element, 0, 0, -10, 0.5, 200);
    setTimeout(() => {
        animateEffect(element, -10, 0.5, 0, 1, 200); 
    }, 200); 
    // animationDelay += 200;
}

startBtn.addEventListener('click', startQuiz)

function startQuiz() {

        landing.style.display           = 'none';
        toolProgress.style.display      = 'block';
        stepsContainer.style.display    = 'block';
        steps[0].classList.add("active");
    
        const firstStepHeading = steps[0].querySelector(".step h4");

        liElements.forEach((li) => {
            let i = 0;
            // Use a timeout to change opacity after a slight delay
            setTimeout(() => {
                li.style.opacity = "1";
            }, 100 * i);
            i++
        });

        steps.forEach((step, index) => {
            const filters = step.querySelectorAll(".filter");
            filters.forEach(filter => {
                filter.addEventListener('click', () => showAnswer(step, index));
            });

            
        });

        const filtersFirstQuestion = steps[0].querySelectorAll(".filter");
        filtersFirstQuestion.forEach((filter) => {
            animateEffect(filter, 0, 0, -10, 0.5, 200, animationDelay); // Start translateY(0), opacity(0); End translateY(-10), opacity(0.5)
            setTimeout(() => {
                animateEffect(filter, -10, 0.5, 0, 1, 200); // Start translateY(-10), opacity(0.5); End translateY(0), opacity(1)
            }, 200 + animationDelay); // Wait 300ms after the first animation before starting the second animation
            animationDelay += 200; // Add a delay of 100ms between each element
        });

        animateEffect(firstStepHeading, 0, 0, -10, 0.5, 200);
        setTimeout(() => {
            animateEffect(firstStepHeading, -10, 0.5, 0, 1, 200); 
        }); 
    }

function showAnswer(step, index) {

        const textDiv       = step.querySelector(".text");
        const answerDiv     = step.querySelector(".answer");
        const nextBtn       = step.querySelector(".next");
        const answerHeading = answerDiv.querySelector("h4");
    
        textDiv.style.display   = 'none';
        answerDiv.style.display = 'block';
    
        const filters = step.querySelectorAll(".filter");
        filters.forEach(filter => {
            filter.style.display = 'none';
        });
    

        animateOnlyOneElement(answerDiv);
        animateOnlyOneElement(answerHeading);

        if(nextBtn) {
            nextBtn.addEventListener('click', () => showNextQuestion(step, index));
            animateOnlyOneElement(nextBtn);
        }
        
        const showResultBtn = document.getElementById("show-result-btn");

        if(showResultBtn) {
        showResultBtn.addEventListener('click', 
        function() {
            stepsContainer.style.display    = 'none';
            yourResult.style.display        = 'block';
        
            calculateTestResult()
        })}
    }


function showNextQuestion(step, index) {

        const currentStep       = step;
        const nextStep          = steps[index + 1];
        const nextStepNumber    = Number(nextStep.getAttribute("data-step"));
    
        const answerDiv         = currentStep.querySelector(".answer");
        const textDiv           = currentStep.querySelector(".text");
        answerDiv.style.display = 'none';
        textDiv.style.display   = 'none';
        currentStep.classList.remove("active");
    
        if (nextStep) {
    
            const nextTextDiv            = nextStep.querySelector(".text");
            const nextAnswerDiv          = nextStep.querySelector(".answer");
            const nextShowAnsBtn         = nextStep.querySelector(".show-ans");
            const stepHeading            = nextStep.querySelector(".step h4");
            let animationDelayNextStep = 0;

            nextTextDiv.style.display    = 'block';
            nextAnswerDiv.style.display  = 'none';

            animateOnlyOneElement(stepHeading);
            
            const filtersNextStep = nextStep.querySelectorAll(".filter");
            filtersNextStep.forEach((filter) => {

                animateEffect(filter, 0, 0, -10, 0.5, 200, animationDelayNextStep); // Start translateY(0), opacity(0); End translateY(-10), opacity(0.5)
                setTimeout(() => {
                    animateEffect(filter, -10, 0.5, 0, 1, 200); // Start translateY(-10), opacity(0.5); End translateY(0), opacity(1)
                }, 200 + animationDelayNextStep); // Wait 300ms after the first animation before starting the second animation
                animationDelayNextStep += 200; // Add a delay of 100ms between each element
            });
            
            nextStep.classList.add("active");

                if(nextShowAnsBtn) {
                    nextShowAnsBtn.style.display = 'none';

                    const checkboxes = nextStep.querySelectorAll(".checkbox-container");
                    let animationDelayCheckboxes = 0;

                    checkboxes.forEach (checkbox => {
                        checkbox.addEventListener('click', () => { 
                            nextShowAnsBtn.style.display = 'block';
                            });
                        });
                    
                    nextShowAnsBtn.addEventListener('click', () => {
                        console.log("ShowAns Button - Clicked"),
                        showAnswer(nextStep, nextStepNumber)
                        })

                    const checkboxesNextStep = nextStep.querySelectorAll(".checkbox-container");
                    checkboxesNextStep.forEach((checkbox) => {
                    animateEffect(checkbox, 0, 0, -10, 0.5, 200, animationDelayCheckboxes); // Start translateY(0), opacity(0); End translateY(-10), opacity(0.5)
                    setTimeout(() => {
                        animateEffect(checkbox, -10, 0.5, 0, 1, 200); // Start translateY(-10), opacity(0.5); End translateY(0), opacity(1)
                    }, 200 + animationDelayCheckboxes); // Wait 300ms after the first animation before starting the second animation
                    animationDelayCheckboxes += 200; // Add a delay of 100ms between each element
            });
                }

                const increment = (nextStepNumber * (94 / (numQuestions - 1))).toFixed(2);
                progressBar.style.width = `${increment}%`;

                liElements[nextStepNumber].classList.add("active");
        } else {

        }
    }



function calculateTestResult() {
    const questionsCollection = [
        'Преди да донесеш кучето си вкъщи, подготвил ли си всичко нужно?', 
        'Когато вземеш кучето вкъщи, какво ще направиш?', 
        'Обезопаси ли твоя дом за кучето?', 
        'Избра ли име на бъдещото си куче?', 
        'Колко време на седмица можеш да отделяш за обучение на твоето куче?', 
        'Колко време можеш да отделиш за игри с твоето куче?', 
        'Кои от по-долу изброените сигнали са знаци на агресия при кучетата?', 
        'Намери ли сигурни източници за поведението и обучението на кучетата?', 
        'Когато се сдобиеш с куче, какво ще е първото нещо, което ще правиш всяка сутрин?', 
        'Какви дейности виждаш себе си и бъдещото си куче да правите заедно?', 
        'Всички храни за консумация от хората са безвредни и за кучетата. Следователно е безопасно да давам храна на кучето си от моя обяд.', 
        'Наясно ли си, че придобиването на и грижата за куче върви ръка за ръка с много разходи?', 
        'Няма нужда да слагам каишка и повод на кучето ми.', 
        'Кой ще покрива разходите на кучето ти?', 
        'Социализацията на кучето ми с други кучета НЕ е толкова важна.', 
        'Знаеш ли какви здравни грижи трябва да полагаш за твоя любимец?', 
        'Избра ли ветеринарен лекар за твоето бъдещо куче?', 
        'Имаш ли план, ако след време вече нямаш финансовата възможност или нямаш възможност да се грижиш за твоето куче?', 
        'Кучетата живеят много по-малко от хората. Мислел/а ли си за момента, когато трябва да се сбогуваш?',
        'Имаш ли на кого да оставиш кучето си, ако се наложи да пътуваш някъде?'
    ];


    const answerSheetCollection = [
        'От голяма важност е още преди да си вземеш куче, да се снабдиш с всичко необходимо, за да не изпаднеш в ситуация, при която нещо ти трябва, но липсва. Виж: Приспособяване в новия дом: Подготовка на дома.',
        'В началото твоето куче ще се приспособява към новия си дом и трябва да се увериш, че всичко ще мине гладко. Виж: Приспособяване в новия дом: Първи дни на твоя любимец',
        'Важно е да обезопасиш дома си, защото покрай любопитството му твоето куче може да пострада от отровни растения и храни, опасни лекарства и вещества, дъвченето и гълтането на кабели и предмети, както и отворените врати, през които то може да избяга на улицата. Виж: Приспособяване в новия дом: Подготовка на дома',
        'Препоръчително е кучето да научи своето име, колкото е възможно по-рано, в идеалния случай – още от първия ден. Това е важна стъпка в общуването с любимеца ти, защото основният начин, по който ще привличаш вниманието му и ще го обучаваш, е чрез неговото име. Виж: Приспособяване в новия дом: Избор на име',
        'Независимо каква порода е, всяко куче е различно по един или друг начин. Ключът към добре възпитано и безпроблемно куче е търпението към нужното време за обучение и постоянството. Виж: Как да се грижа: Обучение',
        'Нивото на енергия е различно при различните породи, като при повечето кучета то е минимум час на ден за разходки, игри и обучение. При неизразходване на енергията, може да се появят нежелани повеченчески или здравословни проблеми.',
        'Лаенето и ръмженето са вербални сигнали, а настръхването на козината на гърба и оголването на зъбите са невербални сигнали на агресивност при кучетата. Виж: Как да се грижа?',
        'Обучението на кучето ти е жизненоважно, защото без него появата на поведенчески проблеми е много вероятна.',
        'Както човек има нужда да мине през банята всяка сутрин след сън, така и кучето има нужда от разходка, за да се освободи от ненужните течности. (Виж: Как да се грижа: Обучение',
        'Прекарване на време с любимеца ти независимо колко енергична дейност ще избереш, е време, през което връзката между теб и кучето ти ще стане по-силна. Кучетата са социални същества и разчитат на своята глутница, която си ти.',
        'Не всяка храна, която е годна за човешка консумация, е безвредна за кучетата. Преди да даваш храна на любимеца си, потърси информация и се увери, че тя е безопасна за него!',
        'Колкото и да е голяма твоята любов към кучетата, тя не може да ги нахрани, нито да покрие сметката ти във ветеринарната клиника. Липсата на достатъчно храна или медицински грижи се счита за жестокост към животните.',
        'Воденето на повод предпазва не само околните от евентуални проблеми, но и предпазва твоя любимец, като по този начин винаги можеш да дръпнеш кучето си, ако някое друго животно го нападне.',
        'Покриването на разходите са важна част от грижата за кучето ти. Без финансови средства няма как да се купят основни неща като храна, играчки и др.',
        'Социализацията на кучето ти е от изключителна важност и не трябва да бъде пренебрегвана! Виж: Разтеж и развитие: Фази на растеж',
        'безпаразитяването, ваксинациите и ежегодните прегледи са важна стъпка към здравето на любимеца ти. Те не са еднократни, но през определен период от време и назначени от ветеринарен лекар. Виж: Здравни грижи.',
        'Ветеринарният лекар ще се грижи за здравето на твоя любимец и още от малко кученце. Важно е да намериш добър ветеринарен лекар, на който можеш да се довериш. Виж: Здравни грижи: Избор на ветеринарен лекар',
        'Не винаги човек знае какво го очаква в бъдещето, затова е добре винаги да има план „Б“ за твоя любимец.',
        'Докато може да бъде неприятна тема за разсъждаване, разбирането за по-краткия живот на кучето и евентуалните решения, свързани с прекратяването на живота, са важни неща, върху които трябва да се помисли. Важен аспект от живота на всеки собственик е справянето със скръбта от загубата на домашен любимец.'
    ]


    const filterCollection = document.getElementsByClassName("filter");

    for(let i = 0; i < filterCollection.length; i++) {

        filterCollection[i].addEventListener("click", (e) => {
            const answerState = (e.target).getAttribute('truthfulness');
            answerSheetCollection.push(answerState);
        });
    }

    document.getElementsByClassName("filter").addEventListener("click", (e) => {
        const answerState = (e.target).getAttribute('truthfulness');
        answerSheetCollection.push(answerState);
    });

    document.getElementsByClassName("checkbox-container").addEventListener("click", (e) => {
        const answerState = (e.target).getAttribute('truthfulness');
        answerSheetCollection.push(answerState);
    });

    for(let i = 0; i < questionsCollection.length; i++) {

        const classId = currentAnswer == 'Y' ? 'correct' : 'wrong';

        yourResult.innerHTML = `<div data-question-number="${i}">
            <div class="${classId}">${questionsCollection[i]}</div><div>${answerSheetCollection[i]}</div>
        </div>`;
    }

}


