# 🌤️ Weather App  
A simple and intuitive **JavaScript-based Weather Application** that lets users check real-time weather information for any city using the **OpenWeatherMap API**.

---

## 🚀 Features
- 🔍 Search weather by city name  
- 🌡️ Real-time temperature (°C)  
- ☁️ Weather condition (Clear, Clouds, Rain, etc.)  
- 💧 Humidity percentage  
- ⚠️ Error handling for invalid or unknown cities  
- ⚡ No frameworks — built using **HTML, CSS, and JavaScript**

---

## 📸 Demo  
Enter a city name → Get instant weather details.

---

## 🛠️ Tech Stack
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **OpenWeatherMap API**

---

## 📦 Project Structure

```
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## 🔑 API Used
This project uses the [OpenWeatherMap Current Weather API](https://api.openweathermap.org/data/2.5/weather)

---

## 📜 How It Works
The core logic is in `script.js`:

- Fetch city name from input  
- Call the OpenWeatherMap API  
- Handle both success & error states  
- Display weather info dynamically inside the page  

```js
document.getElementById('getWeather').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url).then(response => {
        if (!response.ok){
            throw new Error("City Not Found");
        }
        return response.json();
    })
    .then(data => {
        const result = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>`;

        document.getElementById('weatherResult').innerHTML = result;
    })
    .catch(error => {
        document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
    });
}



