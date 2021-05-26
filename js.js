'use strict';


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add('_touch');

    let arrow = document.querySelectorAll('.arrow');

    
    for(let i=0; i<arrow.length; i++){

      let thisLink = arrow[i].previousElementSibling;
      let subMenu = arrow[i].nextElementSibling;
      let thisArrow = arrow[i];

      
      thisLink.classList.add('parent');

      arrow[i].addEventListener('click', function() {
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    } 
    
  } else {
    document.body.classList.add('_pc');
}








