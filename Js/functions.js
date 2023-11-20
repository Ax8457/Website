const bouton1 = document.querySelector('.box');
const Div1 = document.querySelector('.menunav');

function displaymenu(){
    if (bouton1.classList.contains('active')) {
        Div1.style.display = 'none';
    } 
    else {
        Div1.style.display = 'block';
    }
}

const bouton2 = document.querySelector('.fa-angles-down');
const Div2 = document.querySelector('.selectmenu');

function displayLang(){
    if (bouton2.classList.contains('active')) {
        Div2.style.display = 'none';
    } 
    else {
        Div2.style.display = 'block';
        
    }
    
}

const DivEng = document.querySelectorAll('.eng');
const DivFr = document.querySelectorAll('.fr');
const DivMob = document.querySelectorAll('.mobile');

function displayFR(){
    DivEng.forEach(function(element) {
        element.style.display = 'none';
    });

    DivFr.forEach(function(element) {
        element.style.display = 'block';
    });
    DivMob.forEach(function(element) {
        element.style.display = 'none';
    });
    Div2.style.display = 'none';
    Div1.style.display = 'none';
}

function displayENG(){
    
    DivFr.forEach(function(element) {
        element.style.display = 'none';
    });

    DivEng.forEach(function(element) {
        element.style.display = 'block';
    });
    DivMob.forEach(function(element) {
        element.style.display = 'none';
    });
    Div2.style.display = 'none';
    Div1.style.display = 'none';
}

const imgFR = document.querySelector('.frImg');
const imgENG = document.querySelector('.engImg');
const DivLaptop = document.querySelectorAll('.laptop');

function displayFR2(){
    DivEng.forEach(function(element) {
        element.style.display = 'none';
    });

    DivFr.forEach(function(element) {
        element.style.display = 'block';
    });
    Div2.style.display = 'none';
    Div1.style.display = 'none';
    imgENG.style.display='none';
    imgFR.style.display='block';
    DivLaptop.forEach(function(element) {
        element.style.display = 'none';
    });
}

function displayENG2(){
    DivFr.forEach(function(element) {
        element.style.display = 'none';
    });

    DivEng.forEach(function(element) {
        element.style.display = 'block';
    });
    
    Div2.style.display = 'none';
    Div1.style.display = 'none';
    imgFR.style.display='none';
    imgENG.style.display='block';
    DivLaptop.forEach(function(element) {
        element.style.display = 'none';
    });
}