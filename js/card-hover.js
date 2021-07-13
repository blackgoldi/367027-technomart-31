function mouseOncard(){
  document.querySelector('.menu-item-hidden').classList.replace('menu-item');

  document.querySelector('.image-item').classList.replace('image-item-hidden');
}

function mouseOutcard(){
  document.querySelector('.menu-item').classList.replace('menu-item-hidden');

  document.querySelector('.image-item-hidden').classList.replace('image-item');
}
