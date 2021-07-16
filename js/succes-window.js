const succesLink = document.querySelector(".catalog-buy");
const succesPopup = document.querySelector(".modal-succes");
const succesClose = succesPopup.querySelector(".modal-close");
const continueButton = succesPopup.querySelector(".continue-button");
const buyButton = succesPopup.querySelector(".card-button");

succesLink.addEventListener("click",function(evt){
  evt.preventDefault();
  succesPopup.classList.add("modal-show");
})

succesClose.addEventListener("click",function(evt){
  evt.preventDefault();
  succesPopup.classList.remove("modal-show");
})

continueButton.addEventListener("click",function(evt){
  evt.preventDefault();
  succesPopup.classList.remove("modal-show");
})

buyButton.addEventListener("click",function(evt){
  evt.preventDefault();
  succesPopup.classList.remove("modal-show");
})

window.addEventListener("keydown",function(evt){
  if(evt.keyCode===27){
    if(feedbackPopup.classList.contains("modal-show")){
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.add("modal-error");
    }
  }
})
