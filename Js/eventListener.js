const B1 = document.querySelectorAll('.LangChoice');

B1.forEach(LangChoice => {
    LangChoice.addEventListener('click',e =>{
        e.target.classList.toggle('active');
    })
})

const B2 = document.querySelectorAll('.SLbutton');

B2.forEach(SLbutton => {
    SLbutton.addEventListener('click',e =>{
        e.target.classList.toggle('active');
    })
})

const B3 = document.querySelectorAll('.box');

B3.forEach(box => {
    box.addEventListener('click',e =>{
        e.target.classList.toggle('active');
    })
})

const B4 = document.querySelectorAll('.filter');

B4.forEach(filter => {
    filter.addEventListener('click',e =>{
        e.target.classList.toggle('active');
    })
})


