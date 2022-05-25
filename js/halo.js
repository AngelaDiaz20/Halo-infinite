//Ejercicio1
let link = document.getElementById('link');
let hideInformation = document.getElementById('hideInformation');

link.addEventListener('click', toggleText);

function toggleText(e){
    e.preventDefault();
    hideInformation.classList.toggle('show');

    if(hideInformation.classList.contains('show')){
      link.innerHTML = 'LEARN LESS';
    }
    else{
      link.innerHTML = 'LEARN MORE';
    }
}  


//Ejercicio2

//Superior izquierda
let trailer1 = document.getElementById("one");
trailer1.addEventListener('mouseenter',(e)=>{
    e.preventDefault();
    trailer1.innerHTML= `<img src="img/halo/one-gif.gif">`;
})

trailer1.addEventListener('mouseleave',()=>{
    trailer1.innerHTML= `<img src="img/halo/one-static.png">`;
})

//Superior derecha
let trailer2 = document.getElementById("two");
trailer2.addEventListener('mouseenter',(e)=>{
    e.preventDefault();
    trailer2.innerHTML= `<img src="img/halo/two-gif.gif">`;
})

trailer2.addEventListener('mouseleave',()=>{
    trailer2.innerHTML= `<img src="img/halo/two-static.png">`;
})

//Inferior izquierda
let trailer3 = document.getElementById("three");
trailer3.addEventListener('mouseenter',(e)=>{
    e.preventDefault();
    trailer3.innerHTML= `<img src="img/halo/three-gif.gif">`;
})

trailer3.addEventListener('mouseleave',()=>{
    trailer3.innerHTML= `<img src="img/halo/thre-static.jpg">`;
})

//Inferior derecha
let trailer4 = document.getElementById("four");
trailer4.addEventListener('mouseenter',(e)=>{
    e.preventDefault();
    trailer4.innerHTML= `<img src="img/halo/four-gif.gif">`;
})

trailer4.addEventListener('mouseleave',()=>{
    trailer4.innerHTML= `<img src="img/halo/four-static.png">`;
})

//Zona central
let description = document.getElementById("description");
description.addEventListener('mouseenter',(e)=>{
    e.preventDefault();
    description.style.setProperty("color","aliceblue");
    description.style.setProperty("transition","1s");
})

description.addEventListener('mouseleave',()=>{
    description.style.setProperty("color","gray");
})





/*Aparición de imagen*/
let bgImage = document.querySelector(".image-reveal");
//  Now registering thescrollTrigger plugin to gsap
gsap.registerPlugin(ScrollTrigger);
// Now we are going to animate

gsap.fromTo(
  bgImage,
  {
    clipPath: "circle(5% at 77% 40%)",
  },
  {
    clipPath: "circle(75% at 50% 50%)",
    ease: "none",
    //  We want to do that animation on scroll
    scrollTrigger: {
      trigger: bgImage,
      scrub: 1,
      start: "top center",
      end: "top center-=200",
    },
  }
);