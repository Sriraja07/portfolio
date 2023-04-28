var date = new Date(Date.now());
getWeatherData()
const API_KEY ="9d7cde1f6d07ec55650544be1631307e";
var c =`<div><div class="flex flex-row-reverse"><p class="text-2xl text-white translate-y-8 m-1"></p><p class="text-7xl text-white m-2">${date.getHours()+":"+date.getMinutes()}</p></div><p class="text-right text-white text-2xl mx-8">Asia/Kolkata</p></div>`
document.getElementById("Date").innerHTML=c;
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        console.log(data)
        showWeatherData(data);
        })

    })
}
function showWeatherData (data){
    var {wind_speed,weather,temp,dt} = data.daily[0];
    document.getElementById("date0").innerHTML=window.moment(dt*1000).format('dddd');
    document.getElementById("current-weather-icon0").innerHTML=`<img src="http://openweathermap.org/img/wn//${weather[0].icon}@4x.png" class="w-icon">`;
    document.getElementById("current-weather-items0").innerHTML = `<div>${weather[0].main}</div><div>${wind_speed} kmph</div><div>${temp.day} C</div>`;
    
    var {wind_speed,weather,temp,dt} = data.daily[1];
    document.getElementById("date1").innerHTML=window.moment(dt*1000).format('dddd');
    document.getElementById("current-weather-icon1").innerHTML=`<img src="http://openweathermap.org/img/wn//${weather[0].icon}@2x.png" alt="weather icon" class="w-icon">`;
    document.getElementById("current-weather-items1").innerHTML = `<div>${weather[0].main}</div><div>${wind_speed} kmph</div><div>${temp.day} C</div>`;
    
    var {wind_speed,weather,temp,dt} = data.daily[2];
    document.getElementById("date2").innerHTML=window.moment(dt*1000).format('dddd');
    document.getElementById("current-weather-icon2").innerHTML=`<img src="http://openweathermap.org/img/wn//${weather[0].icon}@2x.png" alt="weather icon" class="w-icon">`;
    document.getElementById("current-weather-items2").innerHTML = `<div>${weather[0].main}</div><div>${wind_speed} kmph</div><div>${temp.day} C</div>`;
    
    var {wind_speed,weather,temp,dt} = data.daily[3];
    document.getElementById("date3").innerHTML=window.moment(dt*1000).format('dddd');
    document.getElementById("current-weather-icon3").innerHTML=`<img src="http://openweathermap.org/img/wn//${weather[0].icon}@2x.png" alt="weather icon" class="w-icon">`;
    document.getElementById("current-weather-items3").innerHTML = `<div>${weather[0].main}</div><div>${wind_speed} kmph</div><div>${temp.day} C</div>`;
    
    var {wind_speed,weather,temp,dt} = data.daily[4];
    document.getElementById("date4").innerHTML=window.moment(dt*1000).format('dddd');
    document.getElementById("current-weather-icon4").innerHTML=`<img src="http://openweathermap.org/img/wn//${weather[0].icon}@2x.png" alt="weather icon" class="w-icon">`;
    document.getElementById("current-weather-items4").innerHTML = `<div>${weather[0].main}</div><div>${wind_speed} kmph</div><div>${temp.day} C</div>`;
    
    var {wind_speed,weather,temp,dt} = data.daily[5];
    document.getElementById("date5").innerHTML=window.moment(dt*1000).format('dddd');
    document.getElementById("current-weather-icon5").innerHTML=`<img src="http://openweathermap.org/img/wn//${weather[0].icon}@2x.png" alt="weather icon" class="w-icon">`;
    document.getElementById("current-weather-items5").innerHTML = `<div>${weather[0].main}</div><div>${wind_speed} kmph</div><div>${temp.day} C</div>`;
    
    var {wind_speed,weather,temp,dt} = data.daily[6];
    document.getElementById("date6").innerHTML=window.moment(dt*1000).format('dddd');
    document.getElementById("current-weather-icon6").innerHTML=`<img src="http://openweathermap.org/img/wn//${weather[0].icon}@2x.png" alt="weather icon" class="w-icon">`;
    document.getElementById("current-weather-items6").innerHTML = `<div>${weather[0].main}</div><div>${wind_speed} kmph</div><div>${temp.day} C</div>`;

    
    
}