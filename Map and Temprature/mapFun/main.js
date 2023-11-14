function mainMap(lon, att, width, length) {
    // Map initialization 
    var map = L.map('map').setView([att, lon], 12);

    //osm layer
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    osm.addTo(map);

    // Map Marker function
    function mainCordinate(lon, att) {
        L.marker([lon, att]).addTo(map).bindPopup('Main cordinate').openPopup();
    }
    mainCordinate(lon, att)

    // Map area show
    var x1 = '';
    var x2 = '';
    var y1 = '';
    var y2 = '';
    function cordinateCount(width = null, length = null) {
        if (width === '' && b === '') {
            return mainCordinate(lon, att);
        } else {
            x1 = lon + (width / 2 / 1000) / 111;
            x2 = lon - (width / 2 / 1000) / 111;
            y1 = att + (length / 2 / 1000) / 111;
            y2 = att - (length / 2 / 1000) / 111;
        }
    }
    cordinateCount(width, length);
    var polygon3 = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [x1, y2],
                            [x2, y2],
                            [x2, y1],
                            [x1, y1]
                        ]
                    ]
                }
            }
        ]
    }

    function area(cordinates) {
        L.geoJson(cordinates).addTo(map)
    }
    area(polygon3)



    const apiKey1 = "18a3d559441d02bb3a4b8e339614ac1f";
    const apiKey2 = "6f08550b63e38d63aa5935e4fa08fa0f";
    
    async function getWeather(lon, att) {
        //current
        const responseCurrent = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${att}&lon=${lon}&appid=${apiKey2}`
        );
        const responseData = await responseCurrent.json();
        const currentWeather = responseData.weather[0];
        const weatherDescriptions = currentWeather.main;
        const humidity = responseData.main.humidity;
        const currentTemp = responseData.main.temp - 273.15 // kelvin convert to Franheight
        //console.log(weatherDescriptions)
        //console.log(currentTemp)
        //


        ///forecast 
        
        const responseForecast = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${att}&lon=${lon}&appid=${apiKey2}`
        );
        const responseForeData = await responseForecast.json();
        const foreCityName = responseForeData.city.name;

        const hours3Forecast = responseForeData.list
        //console.log(hours3Forecast)
        datas = [];
        for (let i = 0; i < 6; i++) {
            const forecastTime = hours3Forecast[i].dt_txt.slice(11)
            const dailyForecastDescription = hours3Forecast[i].weather[0].main
            var dailyForecastTemp = hours3Forecast[i].main.temp - 273.15;

            datas.push(dailyForecastTemp)   
        } 
        chart1(datas)    
    } 
   getWeather(lon, att)

    //chart1()
    function chart1(datas) {
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
          ];
        
          const data = {
            labels: labels,
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: datas,
            }]
          };
        
          const config = {
            type: 'line',
            data: data,
            options: {}
          };
    
          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );
        
    }
    
 
    
}
mainMap(14.3754, 35.9375, 500, 500)



