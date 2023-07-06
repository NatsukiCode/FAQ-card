const faqBox = document.querySelectorAll(".faq__item-box");

faqBox.forEach(function(question){

const button = question.querySelector(".faq-btn");

button.addEventListener("click", function(){
  faqBox.forEach(function (eachQuestion){
    if(eachQuestion !== question){
      eachQuestion.classList.remove("show-answer");
    }
  });
  question.classList.toggle("show-answer");
});
});

