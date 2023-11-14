/*-----------------
        http://numbersapi.com/#51
                    -----------------*/

const factBtn = document.querySelector("button");
const factInput = document.querySelector("input");
const factPara = document.querySelector("p");

factBtn.addEventListener('click',()=>{
    const number = factInput.value;
    const numberFact = parseInt(number)

    fetchFact(numberFact)
    console.log(numberFact)
})

async function fetchFact(number) {
    const factUrl = 'http://numbersapi.com/';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    const response = await fetch(`${proxyUrl}${factUrl}${number}`,{
        method: 'GET',
        headers: {
            'x-requested-qith': 'text/plain'
        }
    })

    const responseData = await response.text();
    factPara.innerText = responseData
    console.log(response)
}