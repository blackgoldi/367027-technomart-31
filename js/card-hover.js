function mouseOncard(event){
  event.querySelector('.menu-item-hidden').classList.replace('menu-item-hidden','menu-item');
  event.querySelector('.image-item').classList.replace('image-item','image-item-hidden');
}

function mouseOutcard(event){
  event.querySelector('.menu-item').classList.replace('menu-item','menu-item-hidden');
  event.querySelector('.image-item-hidden').classList.replace('image-item-hidden','image-item');
}
