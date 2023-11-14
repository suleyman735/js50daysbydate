const rotBtn = document.querySelector('.fa-caret-right');
const menuBtn = document.querySelector('.items');

const color1 = document.querySelector('.color1');
const itemsColor1 = window.getComputedStyle(color1);
const color2 = document.querySelector('.color2');
const itemsColor2 = window.getComputedStyle(color2);
const color3 = document.querySelector('.color3');
const itemsColor3 = window.getComputedStyle(color3);
const color4 = document.querySelector('.color4');
const itemsColor4 = window.getComputedStyle(color4);

const itemsBtn = document.querySelectorAll('.color')


itemsBtn.forEach(function (item) {
    item.addEventListener('click',function (item) {
        item.preventDefault();
        console.log(item)

    })
})







rotBtn.addEventListener('click',()=>{
    rotBtn.classList.toggle('active');
    if (rotBtn.classList.contains('active')) {
        menuBtn.classList.add('open');        
    }else{
        menuBtn.classList.remove('open');
    }
})