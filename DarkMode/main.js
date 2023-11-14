const checkBox = document.querySelector('input[name="theme"]');
const htmlelement = document.documentElement;

checkBox.addEventListener('click', ()=>{
    if (checkBox.checked) {
        htmlelement.classList.toggle('transition');
        htmlelement.setAttribute('data-theme','dark');  
    }else{
        htmlelement.classList.toggle("transition");
        htmlelement.setAttribute('data-theme','light');

    }
})