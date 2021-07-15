const feedbackLink = document.querySelector(".contact-button");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".modal-feedback-form");
const feedbackName = feedbackPopup.querySelector(".input-name");
const feedbackEmail = feedbackPopup.querySelector(".input-email");

feedbackLink.addEventListener("click",function(evt){
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  feedbackName.focus();
})

feedbackClose.addEventListener("click",function(evt){
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
})

feedbackForm.addEventListener("submit",function(evt){
  if(!feedbackName.value || !feedbackEmail.value){
    evt.preventDefault();
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  }
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
