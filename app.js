const openFace = document.querySelector('.open');
const closedFace = document.querySelector('.closed');
const openFace1 = document.querySelector('.open1');
const closedFace1 = document.querySelector('.closed1');
const circle = document.querySelector('#circle');


//Add event Listner
//monkey js
closedFace.addEventListener('mouseleave', ()=>{
    if(openFace.classList.contains('open')){
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});
openFace.addEventListener('mouseenter', ()=>{
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
});

//test
closedFace1.addEventListener('mouseleave', ()=>{
    if(openFace1.classList.contains('open1')){
        openFace1.classList.add('active1');
        closedFace1.classList.remove('active1');
    }
});
openFace1.addEventListener('mouseenter', ()=>{
    if(closedFace1.classList.contains('closed1')){
        closedFace1.classList.add('active1');
        openFace1.classList.remove('active1');
    }
});


//circle js

circle.addEventListener('mouseenter', ()=>{
    if(!circle.classList.contains('hover')){
        circle.classList.add('hover');
    }
});
circle.addEventListener('mouseleave', ()=>{
    if(circle.classList.contains('hover')){
        circle.classList.remove('hover');
    }
});
