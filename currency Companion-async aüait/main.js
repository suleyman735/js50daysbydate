const fromCurrencyInput = document.querySelector(".from-currency");
const toCurrencyInput = document.querySelector(".to-currency");
const exchangeAmount = document.querySelector(".amount");
const getRateBtn = document.querySelector(".get-rate");

getRateBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const fromCurrencyValue = fromCurrencyInput.value;
    const toCurrencyValue  = toCurrencyInput.value;
    const exchangeAmountValue = exchangeAmount.value;

    if (fromCurrencyValue === "" || toCurrencyValue === "" || exchangeAmountValue === "") {
        inputError();
        
    }else{

    convertCurrency(fromCurrencyValue, toCurrencyValue, exchangeAmountValue).then((exchangeResult) => {
        document.querySelector('.currency-item').innerHTML= exchangeResult;


        setTimeout(()=>{
            location.reload()
        },6000).catch(()=>invalidCode); //for caught error
    })

    
}
})


// - - - - -- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  -- -  - - --  - - - - - - - - --  --  - - - - --  - - - --  -
async function getExchangeRate(fromCurrency, toCurrency) {
    const response= await fetch ('http://data.fixer.io/api/latest?access_key=64a0707f6216cdf85ddf7b6cf5b00df3')
    
    const currencyData = await response.json();
    const currencyRates = currencyData.rates
    const baseCurrency = 1 / currencyRates[fromCurrency]
    const exchangeRate = baseCurrency * currencyRates[toCurrency]
    console.log(baseCurrency)

    if(isNaN(exchangeRate)){
       // console.log("Error")
       throw new Error(invalidCode())
    }
    return exchangeRate

     
}
//getExchangeRate('AFN','USD').then((result)=> console.log(result))


// -  - --- - - -- - - - - - - -- - - - - - - - - - -- - - - - - - - -- - - - - - - --  - - - - --- - - - -
async function convertCurrency (fromCurrency, toCurrency, exchangeAmount) {
    const amountExchangeRate =await getExchangeRate(fromCurrency,toCurrency);
    const convertedAmount = (exchangeAmount * amountExchangeRate).toFixed(2);
    
    return `${exchangeAmount} ${fromCurrency} ====> ${convertedAmount} ${toCurrency}`;
}


// -------------------------------------------------------------------------------------------------------------
function inputError(){
    document.querySelector('.input-error').classList.add("show");
    setTimeout(() => {
        document.querySelector(".input-error").classList.remove("show")
    },2500)
}

function invalidCode(){
    document.querySelector('.invalid-code').classList.add("show");
    setTimeout(() => {
        document.querySelector(".invalid-code").classList.remove("show")
    },2500)
}

