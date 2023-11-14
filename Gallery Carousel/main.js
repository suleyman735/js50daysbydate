let list = document.querySelector(".list");
let imgs = Array.from(list.children);
const nextBtn = document.querySelector(".btn-right");
const prevBtn = document.querySelector(".btn-left");

//getting img width
const imgWidh = imgs[0].getBoundingClientRect().width;


//Arranging imgs next to each other
function setImgPosition(img, index) {
    img.style.left = imgWidh * index + "px";
}
imgs.forEach(setImgPosition)
console.log(setImgPosition)

//moveToImg FUnction
const moveToImg = function (list, currentImg, targetImg) {
    list.style.transform = "translateX(-" + targetImg.style.left + ")";
    currentImg.classList.remove("current-img");
    targetImg.classList.add("current-img");
}

//hide/show arrows
const hideShowArrows = function (imgs, prevBtn, nextBtn, targetIndex) {
    if (targetIndex === 0) {
        prevBtn.classList.add('hidden');
        nextBtn.classList.remove("hidden")
    } else if (targetIndex === imgs.length - 1) {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.add("hidden");
    } else {
        prevBtn.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
    }
}


// When we click on the right button , move images  to the left
nextBtn.addEventListener('click', function () {
    const currentImg = list.querySelector(".current-img")
    const nextImg = currentImg.nextElementSibling;
    const nextIndex = imgs.findIndex((img) => img === nextImg);
    moveToImg(list, currentImg, nextImg);
    hideShowArrows(imgs, prevBtn, nextBtn, nextIndex)
    // list.style.transform = "translateX(-" + nextImg.style.left + ")";
    // currentImg.classList.remove("current-img");
    // nextImg.classList.add("current-img"); 

})



// When we click on the right button , move images  to the right
prevBtn.addEventListener('click', function () {
    const currentImg = list.querySelector(".current-img");
    const prevImg = currentImg.previousElementSibling;
    const prevIndex = imgs.findIndex((img) => img === prevImg);
    moveToImg(list, currentImg, prevImg);
    hideShowArrows(imgs, prevBtn, nextBtn, prevIndex)
    // list.style.transform = "translateX(-" + prevImg.style.left + ")";
    // currentImg.classList.remove("current-img");
    // prevImg.classList.add("current-img");  
})