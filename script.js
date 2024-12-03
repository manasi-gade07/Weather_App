const apikey = "api - key";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".city")
const searchbtn = document.querySelector(".btn")
const icon = document.querySelector("#one")
async function checkWeather(city)
{
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else {
    // console.log(data);
    document.querySelector(".city_name").innerHTML=data.name;
    document.querySelector(".tmp").innerHTML= Math.floor(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";
if(data.weather[0].main =="Clouds")
{
    icon.src = "assets/clouds.png";
}
else if(data.weather[0].main =="Clear")
{
    icon.src = "assets/clear2.png";
}
else if(data.weather[0].main =="Rain")
{
    icon.src = "assets/rain.png";
}
else if(data.weather[0].main =="Drizzle")
{
    icon.src = "assets/drizzle.png";
}
else if(data.weather[0].main =="Mist")
{
    icon.src = "assets/mist.png";
}
document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";

}
}
searchbtn.addEventListener("click",()=>{
    checkWeather(search.value)
    console.log(search.value)
})
