const startBtn          = document.getElementById("start-btn");
const landing           = document.getElementById("landing");
const toolProgress      = document.querySelector(".tool-progress");
const stepsContainer    = document.querySelector(".steps-container");
const steps             = document.querySelectorAll(".step");


const toolProgressUl = document.querySelector(".tool-progress ul");
const progressBar = document.querySelector(".tool-progress-bar");
const numQuestions = 20;

// Generate the li elements
for (let i = 0; i < numQuestions; i++) {
    const li = document.createElement("li");
    li.setAttribute("data-step", i);
    li.setAttribute("data-increment", (i * (94 / (numQuestions - 1))).toFixed(2));
    li.style.left = `${(i * (94 / (numQuestions - 1))).toFixed(2)}%`;
    li.style.transform = "scale(1)";
    li.style.opacity = "1";
    toolProgressUl.appendChild(li);
}

// Update the progress bar width
const currentStep = 0; // Change this to the current step (0-based index)

// Activate the current step li element
const liElements = toolProgressUl.querySelectorAll("li");
liElements[currentStep].classList.add("active");




startBtn.addEventListener('click', startQuiz)

function startQuiz() {

        landing.style.display           = 'none';
        toolProgress.style.display      = 'block';
        stepsContainer.style.display    = 'block';
        steps[0].classList.add("active");
    
        steps.forEach((step, index) => {
            const filters = step.querySelectorAll(".filter");
            filters.forEach(filter => {
                filter.addEventListener('click', () => showAnswer(step, index));
            });
        });
    }


    function showAnswer(step, index) {

            const textDiv   = step.querySelector(".text");
            const answerDiv = step.querySelector(".answer");
            const nextBtn   = step.querySelector(".next");
        
            textDiv.style.display   = 'none';
            answerDiv.style.display = 'block';
        
            const filters = step.querySelectorAll(".filter");
            filters.forEach(filter => {
                filter.style.display = 'none';
            });
        
            nextBtn.addEventListener('click', () => showNextQuestion(step, index));
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
        
                nextTextDiv.style.display    = 'block';
                nextAnswerDiv.style.display  = 'none';
                
                nextStep.classList.add("active");

                    if(nextShowAnsBtn) {
                        nextShowAnsBtn.style.display = 'none';

                        const checkboxes = nextStep.querySelectorAll(".checkbox-container");
                        checkboxes.forEach (checkbox => {
                            checkbox.addEventListener('click', () => { 
                                nextShowAnsBtn.style.display = 'block';
                            
                                });
                            });
                        
                        nextShowAnsBtn.addEventListener('click', () => {
                            console.log("ShowAns Button - Clicked"),
                            showAnswer(nextStep, nextStepNumber)
                            })
                    }

                    const increment = (nextStepNumber * (94 / (numQuestions - 1))).toFixed(2);
                    progressBar.style.width = `${increment}%`;

                    liElements[nextStepNumber].classList.add("active");
            } else {

            }
        }



        