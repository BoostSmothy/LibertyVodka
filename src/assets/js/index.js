import { translations } from './translet.js';

var controller = new ScrollMagic.Controller();
var revealElements = document.getElementsByClassName("digit");

const nav = document.querySelector('.navbardown');

const menuLinks = document.querySelectorAll('.header__menu-link');




nav.addEventListener('click', navbarDown);



function navbarDown() {
   
   
   if(navBar.className === "header__menu"){
      navBar.className +=" active";
   }
   else{
      navBar.className = "header__menu";
   }  
   
   
};

window.addEventListener("resize", function() {
   let windowWidth = window.innerWidth;

   if (windowWidth >= 768) {
      let navBar = document.getElementById("navBar");
      navBar.className = "header__menu";
   }
});


menuLinks.forEach(link => {
   link.addEventListener('click', function() {
      let windowWidth = window.innerWidth;

      if (windowWidth < 769) {
         
         if (navBar.className.includes('active')) {
            navBar.className = "header__menu";
         }
      }
   });
});



const langImg = document.querySelector('.header__menu-lang');
let isImageOne = true;

langImg.addEventListener('click', langChange);

function langChange(){  
   

    if (isImageOne) {
      langImg.src = './assets/image/lang/eng.png';
      changeLanguage('eng');
    } else {
      langImg.src = './assets/image/lang/ua.png';
      changeLanguage('ua');
    }
    isImageOne = !isImageOne;

}

function changeLanguage(lang) {
   const elements = document.querySelectorAll('[data-lang]');

   elements.forEach(el => {
      const key = el.getAttribute('data-lang');
      
      el.textContent = translations[lang][key];
      
      
   });
}

   
   
   Fancybox.bind('[data-fancybox="gallery"]', {
      
   });



   for (var i=0; i<revealElements.length; i++) { 
      new ScrollMagic.Scene({
                  triggerElement: revealElements[i], 
                  offset: 50,												 
                  triggerHook: 0.9,
               })
               .setClassToggle(revealElements[i], "visible") 
               
               .addTo(controller);
   }


   



  

