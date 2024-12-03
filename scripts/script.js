// Get the API key from OpenWeatherMap
const apiKey = "7a2e01155bf2a4fc836a19d9f99380bc"; // Replace with your actual API key

// Elements from the DOM
const cityInput = document.getElementById("city");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherResult = document.getElementById("weatherResult");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const weatherIcon = document.getElementById("weatherImage");
const feelLike = document.getElementById("feelLike");

weatherResult.style.display = "none";

// Event listener for the "Get Weather" button
getWeatherBtn.addEventListener("click", function () {
  const city = cityInput.value;

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  // Fetch the weather data from the API
  fetchWeatherData(city);
});
// Fetch weather data from OpenWeatherMap API
function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      // Extract relevant data from the response
      const { name, weather, main, wind } = data;

      // Update the HTML with the weather data
      cityName.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${name}`;
      temperature.innerHTML = ` ${Math.round(main.temp)} °C`;
      description.innerHTML = ` ${weather[0].description}`;
      humidity.innerHTML = `<i class="fa-solid fa-temperature-empty"></i><br/> ${main.humidity}% <br/><span>Humidity</span>`;
      windSpeed.innerHTML = `<i class="fa-solid fa-wind"></i> <br/>${wind.speed} m/s<br/><span>Wind</span> `;

      feelLike.innerHTML = `Feel Like: ${Math.round(main.feels_like)} °C`;

      const imgiconSrc = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

      // img adding
      var imgIcon = document.createElement("img");
      imgIcon.src = imgiconSrc;
      weatherIcon.innerHTML = "";
      weatherIcon.appendChild(imgIcon);

      weatherResult.style.display = "block";
    })
    .catch((error) => {
      // Handle errors (e.g., city not found)
      alert(error.message);
      weatherResult.style.display = "none";
    });
}

//sidebar
document.getElementById("toggle-button").addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  var button = document.getElementById("toggle-button");
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    button.classList.remove("open");
  } else {
    sidebar.classList.add("open");
    button.classList.add("open");
  }
});

//smooth scroll
document.querySelectorAll(".sidebar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
