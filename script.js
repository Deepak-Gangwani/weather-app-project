const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1dbe90f177msh6129ff1b21ff884p166020jsn8349ccb9c264',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const successCallback = (position) => {
    console.log(position)
};
const errorCallback = (error) => {
    console.error(error);
};
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

//var x = document.getElementById('output');

//function showPosition(position){
//    var locAPI = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude+","+position.coords.longitude+"&sensor=true";
//    $.get({
//        url : locAPI,
//        success : function(data){
//            console.log(data);
//            x.innerHTML=data.results[0].address_components[4].long_name;
//        }
//    });
//};


const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    if (city.value == "") {
        getWeather("Delhi");
    }
    else {
        e.preventDefault();  //this function will not reload the page so that we can search the city weather
        getWeather(city.value);
    }
})

let a = prompt("Please Enter Your City Name-->");
    if (a == "") {
        getWeather("Delhi");
    }
    else {
        getWeather(`${a}`);
    }
