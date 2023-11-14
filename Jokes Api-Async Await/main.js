/* --------
    https://icanhazdadjoke.com/api
                     -------------------- */


const jokeBtn  = document.querySelector('button');
const jokePara = document.querySelector('.joke');

jokeBtn.addEventListener('click', getJoke);

async function getJoke(){
    const jokeUrl = 'https://icanhazdadjoke.com/';

    const response = await fetch(jokeUrl, {
        headers: {
            Accept: 'application/json'
        }
    })

    const responseData = await response.json();

    jokePara.innerText = responseData.joke
    console.log(responseData)
}