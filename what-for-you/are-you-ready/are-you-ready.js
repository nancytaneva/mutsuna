const startBtn          = document.getElementById("start-btn");
const landing           = document.getElementById("landing");
const toolProgress      = document.querySelector(".tool-progress");
const stepsContainer    = document.querySelector(".steps-container");
const steps             = document.querySelectorAll(".step");

const toolProgressUl = document.querySelector(".tool-progress ul");
const progressBar = document.querySelector(".tool-progress-bar");
const numQuestions = 20;

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
        
            nextBtn.addEventListener('click', () => showNextQuestion(step, index));

            animateOnlyOneElement(answerDiv);
            animateOnlyOneElement(nextBtn);
            animateOnlyOneElement(answerHeading);
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
                        animateEffect(checkbox, 0, 0, -10, 0.5, 200, animationDelayNextStep); // Start translateY(0), opacity(0); End translateY(-10), opacity(0.5)
                        setTimeout(() => {
                            animateEffect(checkbox, -10, 0.5, 0, 1, 200); // Start translateY(-10), opacity(0.5); End translateY(0), opacity(1)
                        }, 200 + animationDelayNextStep); // Wait 300ms after the first animation before starting the second animation
                        animationDelayNextStep += 200; // Add a delay of 100ms between each element
                });
                    }

                    const increment = (nextStepNumber * (94 / (numQuestions - 1))).toFixed(2);
                    progressBar.style.width = `${increment}%`;

                    liElements[nextStepNumber].classList.add("active");
            } else {

            }
        }



        