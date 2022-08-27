const openFace = document.querySelector('.open');
const closedFace = document.querySelector('.closed');
const circle = document.querySelector('#circle');


//Add event Listner
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