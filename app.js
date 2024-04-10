const searchText = document.querySelector(".search-input");
const searctBtn = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon");
let api_Key = "39433928fc6297098c694cd90acedcb4";
let api_Url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const getWeather = async (city) => {
  const response = await fetch(api_Url + city + `&appid=${api_Key}`);
  const data = await response.json();
  // console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "&#176 C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".speed").innerHTML = data.wind.speed + "Km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }else if (data.weather[0] == "Snow") {
    weatherIcon.src = "images/snow.png";
  }

  document.querySelector(".weather").style.display = "block";
};

searctBtn.addEventListener("click", () => {
  getWeather(searchText.value);
});
