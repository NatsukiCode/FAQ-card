const faqBox = document.querySelectorAll(".faq__item-box");

faqBox.forEach(question => {

const button = question.querySelector(".faq-btn");
const arrowElement = question.querySelector(".arrow");

button.addEventListener("click", ()=> {
  faqBox.forEach(eachQuestion => {
    if(eachQuestion !== question){
      eachQuestion.classList.remove("show-answer");
      eachQuestion.querySelector(".question").classList.remove("question-styles");
    }
  });
  question.classList.toggle("show-answer");
  question.querySelector(".question").classList.toggle("question-styles");
  arrowElement.classList.toggle("rotate-icon");

});
});