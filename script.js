document.getElementByID('getWeather').addEventListener('click',getWeather);

function getWeather() {
    const city = document.getElementById('city').ariaValueMax;

    const apiKey = '____';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url).then(response => {
        if (!response.ok){
            throw new Error("City Not Found");
        }
        return response.json();
    })
    .then(data => {
        const result = `
        <h2>${data.name},${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weathee[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>`;

        document.getElementById('weatherResult').innerHTML = result;
    })
    .catch(error => {
        document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
    });
}