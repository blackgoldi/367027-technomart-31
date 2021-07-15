const hammerDrill = document.querySelector(".hammerDrill");
const lefthammerDrill = hammerDrill.querySelector(".left-arrow");
const righthammerDrill = hammerDrill.querySelector(".right-arrow");

const Drill = document.querySelector(".Drill");
const leftDrill = Drill.querySelector(".left-arrow");
const rightDrill = Drill.querySelector(".right-arrow");

righthammerDrill.addEventListener("click",function(evt){
  evt.preventDefault();
  hammerDrill.classList.remove("card-show");
  Drill.classList.add("card-show");
})

leftDrill.addEventListener("click",function(evt){
  evt.preventDefault();
  Drill.classList.remove("card-show");
  hammerDrill.classList.add("card-show");
})
