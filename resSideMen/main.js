const hamburgerBtn = document.querySelector(".toggle-btn");
const mainHeader = document.querySelector(".main-header");
const overlay = document.querySelector(".overlay");
console.log(hamburgerBtn)


hamburgerBtn.addEventListener('click',function(){
    hamburgerBtn.classList.toggle('open')
    overlay.classList.toggle("open")
    //console.log(overlay)
    mainHeader.classList.toggle('open')
});