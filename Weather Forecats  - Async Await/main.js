// // ccd390d635a124341c5d20b614abf80e

// const apiKey = 'ccd390d635a124341c5d20b614abf80e';
// const form = document.querySelector('form');
// const weatherDetails = document.querySelector('.details');

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const location = document.querySelector('input').value;
//     getWheather(location)
// })

// async function getWheather(Location) {
//     const response = await fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`);
//     const responseData = await response.json();
    
//     console.log(responseData)
//     displayWeather(responseData)
    
// }

// function displayWeather(weather) {
//     let currentWeather = weather.current
//     let locationWeather = weather.location;
    
//     const weatherEl = `
//         <div class="weather-info">
//             <div class="titles">
//               <h2 class="temp">${currentWeather.temperature}<sup>&#8451</sup></h2>
//               <h2 class="status">${currentWeather.weather_descriptions}</h2>
//             </div>
  
//             <div class="icon">123</div>
  
//             <div class="extra-info">
//               <p>Temperature: <sup>${currentWeather.temperature}</sup></p>
//               <p>Feels Like: <sup>&#${currentWeather.feelslike}</sup></p>
//               <p>Local Time: <span>${locationWeather.localtime}</span></p>
//               <p>Precipitation: <span>${currentWeather.precip}</span></p>
//               <p>Humidity: <span>${currentWeather.humidity}</span><p>
//               <p>Pressure: <span>${currentWeather.pressure}</span></p>
//               <p>Cloud Cover: <span>${currentWeather.cloudcover}</span>%</p>
//               <p>Wind Direction: <span>${currentWeather.wind_dir}</span> </p>
//               <p>Wind Degree: <span>${currentWeather.wind_degree}</span></p>
//               <p>Wind Speed: <span>${currentWeather.wind_speed}</span>km/hr</p>
//               <p>Latitude: <span>${locationWeather.lat}</span></p>
//               <p>Longitude:<span>${locationWeather.lon}</span> </p>
//               <p>Region: <span>${locationWeather.visibility}</span></p>
//               <p>Visibility: <span>${currentWeather.region}</span>km</p>
//             </div>
//            </div>
  
//           <div class="place">${locationWeather.name},  ${locationWeather.country}</div>
//     `
//     weatherDetails.innerHTML = weatherEl
// }
 
const apiKey1 = "18a3d559441d02bb3a4b8e339614ac1f";
const apiKey2 = "643fafec9f74cdc48bfe5afa6a584105";

const form = document.querySelector("form");
const weatherDetails = document.querySelector(".details");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = document.querySelector("input").value;
  getWeather(location);
});

async function getWeather(location) {
  const response = await fetch(
    `http://api.weatherstack.com/current?access_key=${apiKey1}&query=${location}`
  );
  const responseData = await response.json();
  displayWeather(responseData);
}

function displayWeather(weather) {
  let currentWeather = weather.current;
  let locationWeather = weather.location;

  const weatherEl = `
  <div class="weather-info">
  <div class="titles">
    <h2 class="temp">${currentWeather.temperature}<sup>&#8451</sup></h2>
    <h2 class="status">${currentWeather.weather_descriptions}</h2>
  </div>

  <div class="extra-info">
    <p>Temperature: <span>${currentWeather.temperature}<sup>&#8451</sup></span>  </p>
    <p>Feels Like: <span>${currentWeather.feelslike}<sup>&#8451</sup></span>  </p>
    <p>Local Time: <span>${locationWeather.localtime}</span>  </p>
    <p>Precipitation: <span>${currentWeather.precip}mm</span> </p>
    <p>Humidity: <span>${currentWeather.humidity}%</span>  </p>
    <p>Pressure: <span>${currentWeather.pressure}hPa</span>  </p>
    <p>Cloud Cover: <span>${currentWeather.cloudcover}%</span>  </p>
    <p>Wind Direction: <span>${currentWeather.wind_dir}</span>  </p>
    <p>Wind Degree: <span>${currentWeather.wind_degree}</span> </p>
    <p>Wind Speed: <span>${currentWeather.wind_speed}km/hr</span>  </p>
    <p>Latitude:  <span>${locationWeather.lat}</span> </p>
    <p>Longitude:  <span>${locationWeather.lon}</span> </p>
    <p>Visibility: <span> ${currentWeather.visibility}km</span> </p>
    <p>Region: <span>${locationWeather.region}</span>  </p>
  </div>
 </div>

 <div class="place">${locationWeather.name}, ${locationWeather.country}</div>
  `;

  weatherDetails.innerHTML = weatherEl;
}
