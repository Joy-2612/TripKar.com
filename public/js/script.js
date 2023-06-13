let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let icon = document.getElementById("dark-icon");
icon.onclick = () =>{
   document.body.classList.toggle("light-theme");
   if (document.body.classList.contains("light-theme")){
      icon.src = "../images/moon.png";
   }
   else{
      icon.src = "../images/sun.png";
   }
}


// var load=document.getElementById("loader");
// window.addEventListener("load",function(){
//    load.style.display="none";
// })


var load=document.getElementById("loader");
var body=document.getElementById('main-body');
setTimeout(() => load.style.visibility ="hidden",1500);
setTimeout(() => body.hidden =true,0000);
setTimeout(() => body.hidden =false,1500);

// $(window).on('load',function(){
//    setTimeout(document.getElementById("loader").style.display="none",5000);
// });



menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

// var swiper = new Swiper(".home-slider", {
//    loop:true,
//    navigation: {
//      nextEl: ".swiper-button-next",
//      prevEl: ".swiper-button-prev",
//    },
// });

var swiper = new Swiper(".home-slider", {
   effect: "coverflow",
   loop:true,
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   coverflowEffect: {
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
   },
   pagination: {
     el: ".swiper-pagination",
   },
 });



var swiper = new Swiper(".reviews-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   spaceBetween: 20,
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});


let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.packages .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 3;
   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}

