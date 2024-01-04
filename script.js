// e6121dda9b8ca7c2dfe59e25c98d1093 -API key

//input from the user;

const API_KEY = "e6121dda9b8ca7c2dfe59e25c98d1093";

let btn = document.getElementById("addCityBtn");
btn.addEventListener("click", () => {
  let inputValue = document.getElementById("cityInput").value;
  // console.log(inputValue);

  if (inputValue) {
    inputValue.toLowerCase();
    getWeatherData(inputValue);
  } else {
    alert("Enter A City Name!");
  }
});

async function getJapanData() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=${API_KEY}`
  );
  const data = await response.json();

  const degree = document.getElementById("degree");
  const img = document.getElementById("icon");
  const city = document.getElementById("city");
  const description = document.getElementById("description");
  const HL = document.getElementById("HL");
  degree.textContent = `${data.main.temp}°`;
  let ico = data.weather[0].icon;
  img.setAttribute("src", `http://openweathermap.org/img/wn/${ico}@2x.png`);
  city.textContent = data.name;
  description.textContent = data.weather[0].description.toUpperCase();

  HL.textContent = `H :${data.main.temp_min}°  L :${data.main.temp_max}°`;
  city.textContent = `${data.name}, ${data.sys.country}`;
}

Window.onload = getJapanData();

async function getWeatherData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);


    createDiv(data);
}

let board = document.getElementById("dashboard");
let weather1 = document.getElementById("weather1");
let weatherArray = [weather1];

function createDiv(data) {
  let weather = document.createElement("div");
  weather.setAttribute("id", "weather1");

  let degree_icon = document.createElement("div");
  degree_icon.setAttribute("id", "degree-icon");
  weather.appendChild(degree_icon);

  let degree = document.createElement("span");
  degree.setAttribute("id", "degree");
  degree_icon.appendChild(degree);
  degree.textContent= `${data.main.temp}°`;

  let img = document.createElement("img");
  img.setAttribute("id", "icon");
  degree_icon.appendChild(img);
  let ico = data.weather[0].icon;
  img.setAttribute("src", `http://openweathermap.org/img/wn/${ico}@2x.png`);

  let cityHL = document.createElement("div");
  cityHL.setAttribute("id", "cityHL");
  weather.appendChild(cityHL);

  let don = document.createElement("div");
    don.setAttribute("class", "don");
  cityHL.appendChild(don);

  let HL = document.createElement("span");
  let city = document.createElement("span");
  HL.setAttribute("id", "HL");
  city.setAttribute("id", "city");
  city.textContent = `${data.name}, ${data.sys.country}`;
  HL.textContent = `H :${data.main.temp_min}°  L :${data.main.temp_max}°`;
  don.appendChild(HL);
  don.appendChild(city);
  

  let description = document.createElement("span");
  description.setAttribute("id", "description");
  description.textContent = data.weather[0].description.toUpperCase();
  cityHL.appendChild(description);

  board.appendChild(weather);
  weatherArray.push(weather);
}

console.log(weatherArray);