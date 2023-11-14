const rotBtn = document.querySelector('.fa-caret-right bottom');
const menuBtn = document.querySelector('.items');

const color1 = document.querySelector('.color1');
const itemsColor1 = window.getComputedStyle(color1);

const color2 = document.querySelector('.color2');
const itemsColor2 = window.getComputedStyle(color2);

const color3 = document.querySelector('.color3');
const itemsColor3 = window.getComputedStyle(color3);

const color4 = document.querySelector('.color4');
const itemsColor4 = window.getComputedStyle(color4);

const items = document.querySelectorAll('.item');
const btnBack = document.querySelector('.btn');



rotBtn.addEventListener('click',()=>{
    rotBtn.classList.toggle('active');
    if (rotBtn.classList.contains('active')) {
        menuBtn.classList.add('open');        
    }else{
        menuBtn.classList.remove('open');
    }
})
items.forEach(function (item) {
    item.addEventListener('click',function (e) {
        e.preventDefault();
       // console.log(e.target)
        const itemCol = [itemsColor1,itemsColor2,itemsColor3,itemsColor4];
        const etargetItem = e.target;
        const targetNumber = etargetItem.attributes.target.value;
        if (targetNumber === "1") {
            console.log(btnBack)
            btnBack.style.backgroundColor = itemCol[0].backgroundColor;            
        }else if(targetNumber === "2"){
            btnBack.style.backgroundColor = itemCol[1].backgroundColor;
        }else if(targetNumber === "3"){
            btnBack.style.backgroundColor = itemCol[2].backgroundColor;
        }
        else if(targetNumber === "4"){
            btnBack.style.backgroundColor = itemCol[3].backgroundColor;
        }
     

    })
})



