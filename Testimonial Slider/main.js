const slides = document.querySelector('.slider').children;
const indicatorImg = document.querySelector('.indicator').children;
console.log(slides)
for (let i = 0; i < indicatorImg.length; i++) {
    indicatorImg[i].addEventListener('click', function () {
        for (let j = 0; j < indicatorImg.length; j++) {
            indicatorImg[j].classList.remove('active')
            
        }
        indicatorImg[i].classList.add('active');

        const id = indicatorImg[i].getAttribute('data-id');
        for (let k = 0; k < slides.length; k++) {
            slides[k].classList.remove('active');
            
        }
        slides[id].classList.add("active")
        
    })
    
}