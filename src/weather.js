const apiKey="&appid=2fd4bea6b31504271112e3037caf5269"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q="
const fetchUnit="&units=metric"
const nightBack="https://i.pinimg.com/originals/e6/79/1f/e6791f62be5f127a49c6a276ecd569a7.jpg"
const dayBack="https://i.pinimg.com/originals/bd/2f/9a/bd2f9a963f65ca17f00e1ef0d174bb31.jpg"


const searchInput=document.querySelector("#city-input")
const searchBtn=document.querySelector("#search-btn")
const weatherImg=document.querySelector("#weather-img")


async function CheckWeather(city){
    const response=await fetch(apiUrl+city+apiKey+fetchUnit)
    const value=await response.json()
    console.log(value)

    document.querySelector("#search-text").style.display="none"
    document.querySelector(".weather-card").style.display="block"
    document.querySelector("#name").innerHTML=value.name+", "+value.sys.country
    document.querySelector("#wind-speed").innerHTML=value.wind.speed+" Km/h"
    document.querySelector("#humidity").innerHTML=value.main.humidity+"%"
    document.querySelector("#tempratue").innerHTML=value.main.temp+"°C"
    document.querySelector("#current-condition").innerHTML=value.weather[0].main
    
    weatherImg.src=`https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`
    let time=`${value.weather[0].icon}`.toString()
    if(time.includes("d")){
        document.querySelector("body").style.backgroundImage=`url(${nightBack})`
    }
    else if(time.includes("n")){
        document.querySelector("body").style.backgroundImage=`url(${dayBack})`
    }
}

searchBtn.addEventListener("click",function(){
    console.log(searchInput.value)
    CheckWeather(searchInput.value)
})


