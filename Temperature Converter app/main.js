const celciusInput = document.querySelector('#celcius')
const fahrenheitInput = document.querySelector('#fahrenheit')
const kelvinInput = document.querySelector('#kelvin');
const tempInputs = document.querySelectorAll("input");


tempInputs.forEach(function (inputs) {
    inputs.addEventListener('input',function(e){
        let tempValue =parseInt(e.target.value);
        let inputName = e.target.name; 

        if (e.target.value == '') {
            celciusInput.value = null;
            fahrenheitInput.value = null;
            kelvinInput.value = null;

            return;
            
        }

        if (inputName === 'celcius') {
            //celcius to fahrenheit
            let fahrenheitValue = tempValue *1.8 +32
            fahrenheitInput.value = fahrenheitValue.toFixed(2) ;

            //Celcius to Kelvin
            kelvinInput.value   = tempValue +273.15;
            
        }else if (inputName === 'fahrenheit') {
            //fahreheit to celcius
            let celciusValue =  (tempValue - 32) /1.8;
            celciusInput.value = celciusValue.toFixed(2);

            //fahrenheit to kelvin
            let kelvinValue = (tempValue-32) / 1.8 +273.15
            kelvinInput.value  = kelvinValue.toFixed(2)
            
        } else if (inputName === 'kelvin') {
            //celcius to kelvin
            let celciusValue =tempValue -273.15;
            celciusInput.value = celciusValue.toFixed(2)

            //kelvin to franhenheit
            let franhenheitValue = (tempValue - 273.15) *1.8 +32
            fahrenheitInput.value = franhenheitValue.toFixed(2)
            
        }
        
        
        console.log(inputName)
    })
    
})

