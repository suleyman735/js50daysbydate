// const getText = document.querySelector('textarea');
// const tranButton = document.querySelector('button');
// const langButton = document.querySelectorAll('option').value;
// console.log(langButton)
// const exportText = document.querySelector('p')

// tranButton.addEventListener('click', translate);

// async function translate(){
//     const jokeUrl = 'https://libretranslate.com/languages';

//     const response = await fetch(jokeUrl, {
//         headers: {
//             Accept: 'application/json'
//         }
//     })

//     const responseData = await response.json();
    
//     console.log(responseData)

// }


// const factBtn = document.querySelector("button");
// const factInput = document.querySelector("textarea");
// const exportText = document.querySelector("p");

// factBtn.addEventListener('click',()=>{
//     const textInport = factInput.value;
    

//     fetchFact(textInport)
//     console.log(textInport)
// })

// async function fetchFact(number) {
//     const factUrl = 'https://libretranslate.com/languages';
//     //const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

//     const response = await fetch(`${factUrl}`,{
//         method: 'GET',
//         headers: {
//             Accept: 'application/json',
//         }
//     })

//     const responseData = await response.text();
//     //factPara.innerText = responseData
//     console.log(response)
// }

async function transtale(from,to) {
    // const factUrl = await fetch('https://libretranslate.com/languages');
    // const code = await factUrl.json()
    // console.log(code.language)
    const res = await fetch("https://api.cognitive.microsofttranslator.com/dictionary/examples?api-version=3.0", {
        method: "GET",
        body: JSON.stringify({
            q: "",
            source: "en",
            target: "es",
            format: "text"
        }),
        headers: { "Content-Type": "application/json" }
    });
    const reach = await res.json();
    console.log(reach) 
    reach.forEach(languageCode => {
         languageCode = reach.code;
         const fromLanguage = languageCode[from];
         const toLanguage   = languageCode[to];
         
   
    });
     


    //console.log(reach);
}
console.log(transtale('en','ar'))
transtale()
