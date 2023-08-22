// const startBtn          = document.getElementById("start-btn");
// const landing           = document.getElementById("landing");
// const toolProgress      = document.querySelector(".tool-progress");
// const stepsContainer    = document.querySelector(".steps-container");
// const steps             = document.querySelectorAll(".step");
// let slideIndex          = 0;


// function startTheQuizz() {

//     landing.style.display           = 'none';
//     toolProgress.style.display      = 'block';
//     stepsContainer.style.display    = 'block';
//     steps[slideIndex].classList.add("active");
// }

// function processNextQuestion() {

// }



const startBtn          = document.getElementById("start-btn");
const landing           = document.getElementById("landing");
const toolProgress      = document.querySelector(".tool-progress");
const stepsContainer    = document.querySelector(".steps-container");
const steps             = document.querySelectorAll(".step");
// const StepNumber        = Number(nextStep.getAttribute("data-step"));
var numberStep          = 0;

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
                    // const nextShowAnsBtn         = nextStep.querySelector(".show-ans");
            
                    nextTextDiv.style.display    = 'block';
                    nextAnswerDiv.style.display  = 'none';
                    // nextShowAnsBtn.style.display = 'none';
                    nextStep.classList.add("active");

            
                    // const filtersCheckbox = nextStep.querySelectorAll(".checkbox-container");
                    // filtersCheckbox.forEach (filtersCheckbox => {
                    //     filtersCheckbox.addEventListener('click', () => { 
                    //         nextShowAnsBtn.style.display = 'block'
                       
                    //         nextShowAnsBtn.addEventListener('click', () => {
                    //             showAnswer(currentStep, index);
                    //             console.log("ShowAns Button - Clicked")
                    //             console.log(`${nextStepNumber}`)
                    //         });
                    //     });
                    // });
                    
                } else {

                }
            }


// const startBtn          = document.getElementById("start-btn");
// startBtn.addEventListener('click', startQuiz)

// function startQuiz() {

//     landing.style.display           = 'none';
//     toolProgress.style.display      = 'block';
//     stepsContainer.style.display    = 'block';
//     steps[0].classList.add("active");

//     steps.forEach((step, index) => {
//         const filters = step.querySelectorAll(".filter");
//         filters.forEach(filter => {
//             filter.addEventListener('click', () => showAnswer(step, index));
//         });
//     });
// }

// function showAnswer(step, index) {

//     const textDiv   = step.querySelector(".text");
//     const answerDiv = step.querySelector(".answer");
//     const nextBtn   = step.querySelector(".next");

//     textDiv.style.display   = 'none';
//     answerDiv.style.display = 'block';

//     const filters = step.querySelectorAll(".filter");
//     filters.forEach(filter => {
//         filter.style.display = 'none';
//     });

//     nextBtn.addEventListener('click', () => showNextQuestion(index));
// }

// function showNextQuestion(currentIndex) {

//     const currentStep       = steps[currentIndex];
//     const nextStep          = steps[currentIndex + 1];
//     const currentStepNumber = Number(nextStep.getAttribute("data-step"));

//     const answerDiv         = currentStep.querySelector(".answer");
//     const textDiv           = currentStep.querySelector(".text");
//     answerDiv.style.display = 'none';
//     textDiv.style.display   = 'none';
//     currentStep.classList.remove("active");

//     if (nextStep) {

//         const nextTextDiv            = nextStep.querySelector(".text");
//         const nextAnswerDiv          = nextStep.querySelector(".answer");
//         const nextShowAnsBtn         = nextStep.querySelector(".show-ans");

//         nextTextDiv.style.display    = 'block';
//         nextAnswerDiv.style.display  = 'none';
//         nextShowAnsBtn.style.display = 'none';
//         nextStep.classList.add("active");

//         const filtersCheckbox = nextStep.querySelectorAll(".checkbox-container");
//         filtersCheckbox.forEach (filtersCheckbox => {
//             filtersCheckbox.addEventListener('click', () => { 
//                 nextShowAnsBtn.style.display = 'block'
           
//                 nextShowAnsBtn.addEventListener('click', () => {
//                     showAnswer(currentStep, currentIndex);
//                     console.log("ShowAns Button - Clicked")
//                     console.log(`${currentStepNumber}`)
//                 });
//             });
//         });
//     }
// }