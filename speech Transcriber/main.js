// https://caniuse.com/?search=speech%20recognition

const transcription = document.querySelector('.transcription');
let speechPara = document.createElement('p');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognitionSpeech = new SpeechRecognition();
//var speechRecognitionList = new SpeechGrammarList();
recognitionSpeech.interimResults = true;

recognitionSpeech.addEventListener('result', (e)=>{
    const speechToText = Array.from(e.results).map((result)=> result[0]).map((result)=>result.transcript).join('');


    speechPara.innerText = speechToText;
    transcription.appendChild(speechPara);

    if (e.results[0].isFinal) {
        speechPara = document.createElement('p');        
    }
})
recognitionSpeech.addEventListener('end',() => {
    recognitionSpeech.start()

});

recognitionSpeech.start()

// async function translate() {
//     const res = await fetch("https://libretranslate.com/translate", {
// 	method: "POST",
// 	body: JSON.stringify({
// 		q: "Hello!",
// 		source: "en",
// 		target: "es"
// 	}),
// 	headers: { "Content-Type": "application/json" }
// });

// console.log(await res.json());
  
// }
// translate()

// fetch("https://translation.googleapis.com/language/translate/v2", {
// 	"method": "POST",
// 	"headers": {
// 		"content-type": "application/x-www-form-urlencoded",
// 		"x-rapidapi-key": "89eaa1be31msh8301d091d1811bfp139e32jsn51c9760c2a75",
// 		"x-rapidapi-host": "YandexTranslatezakutynskyV1.p.rapidapi.com"
// 	},
// 	"body": {
// 		"apiKey": "<REQUIRED>",
// 		"text": "<REQUIRED>"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// async function TRAN() {
//     const api = 'https://libretranslate.com/language';
//     const response =await fetch(api, {
//         headers: {
//             Accept: 'application/json',
            
//         }
//     })
//     const responseData = await response.json();

//     console.log(responseData)
    
// }
// TRAN()

const lang = [
    {
      "code": "en",
      "name": "English"
    },
    {
      "code": "ar",
      "name": "Arabic"
    },
    {
      "code": "az",
      "name": "Azerbaijani"
    },
    {
      "code": "zh",
      "name": "Chinese"
    },
    {
      "code": "cs",
      "name": "Czech"
    },
    {
      "code": "nl",
      "name": "Dutch"
    },
    {
      "code": "fi",
      "name": "Finnish"
    },
    {
      "code": "fr",
      "name": "French"
    },
    {
      "code": "de",
      "name": "German"
    },
    {
      "code": "hi",
      "name": "Hindi"
    },
    {
      "code": "hu",
      "name": "Hungarian"
    },
    {
      "code": "id",
      "name": "Indonesian"
    },
    {
      "code": "ga",
      "name": "Irish"
    },
    {
      "code": "it",
      "name": "Italian"
    },
    {
      "code": "ja",
      "name": "Japanese"
    },
    {
      "code": "ko",
      "name": "Korean"
    },
    {
      "code": "pl",
      "name": "Polish"
    },
    {
      "code": "pt",
      "name": "Portuguese"
    },
    {
      "code": "ru",
      "name": "Russian"
    },
    {
      "code": "es",
      "name": "Spanish"
    },
    {
      "code": "sv",
      "name": "Swedish"
    },
    {
      "code": "tr",
      "name": "Turkish"
    },
    {
      "code": "uk",
      "name": "Ukranian"
    },
    {
      "code": "vi",
      "name": "Vietnamese"
    }
  ]

function translate() {
    fetch("https://libretranslate.com/language").then((response) =>{
    lang.response.data
})
        
}

translate()


