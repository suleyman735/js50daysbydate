const container= document.querySelectorAll('.container')
const color = document.querySelectorAll('.color');



function getRandom() { return Math.floor(Math.random() * 256) }

function randomColorStr(){
    let color1 = getRandom()
    let color2 = getRandom()
    let color3 = getRandom()
    let colorString = `rgb(${color1},${color2},${color3})`;
   
    return colorString;
}
console.log(randomColorStr)
function colorChange(users) {  
    for (let i = 0; i < color.length; i++) {
     console.log(color[i])
       color[i].style.backgroundColor += randomColorStr()
        
    }
}
colorChange()

