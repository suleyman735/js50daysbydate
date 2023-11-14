const labels = document.querySelectorAll(".form-control label");

labels.forEach(function(label){
    label.innerHTML = label.innerText
    .split('')
    .map((letter,index)=>`<span style="transition-delay:${index*100}ms">${letter}</span>`).join("");
})