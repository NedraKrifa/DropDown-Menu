let navbar=document.querySelector('.navbar');
let body=document.querySelector('body');
let menu=document.querySelector('.item-list');

document.addEventListener('contextmenu',openNavBar);
document.addEventListener("keydown",closeNavBarESC);
document.addEventListener('dblclick',closeNavBar);
document.addEventListener('click',toggleMenu);
menu.addEventListener('click',function(e){
    e.stopPropagation();
});

function openNavBar(){
    if(!navbar.classList.contains('show')){
        navbar.classList.add('show');
    }
}
function closeNavBarESC(event) {
    if(event.keyCode === 27){
        closeNavBar();
   }
}
function closeNavBar(){
    if(navbar.classList.contains('show')){
        navbar.classList.remove('show');
    }
}
function toggleMenu(){
    let clickedElement = event.target;
    if (isMenuToggler(clickedElement) || isMenu(clickedElement)) {
        menu.classList.add('active');
        return;
      }
      menu.classList.remove('active');
}
function isMenu(element) {
    if (element.classList.contains("item-list")) {
      return true;
    }
    return false;
  }
  
  function isMenuToggler(element) {
    if (element.id == 'menu-btn') {
      return true;
    }
    return false;
  }