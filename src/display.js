import skycon from './skycon';

const displayData = (data) => {
  const { main } = data;

  const toggle = document.querySelector('.toggle-label');
  const toggler = document.querySelector('.toggle-input');
  const weatherValue = document.querySelector('.weather-value');
  weatherValue.innerHTML = `${Math.floor(main.temp)}°C`;

  const location = document.querySelector('.location');
  location.innerHTML = `${data.name}, ${data.sys.country}`;

  const description = document.querySelector('.weather-description');
  description.innerHTML = `Feels like: ${Math.floor(main.feels_like)}°C`;

  const max = document.querySelector('.max-temp');
  max.innerHTML = `Highest: ${Math.floor(main.temp_max)}°C`;

  const min = document.querySelector('.min-temp');
  min.innerHTML = `Lowest: ${Math.floor(main.temp_min)}°C`;


  const humidity = document.querySelector('.humidity');
  humidity.innerHTML = `Humidity: ${main.humidity}%`;

  const toFahrenheit = (temp) => temp * (9 / 5) + 32;
  const convertTemp = () => {
    const tempF = toFahrenheit(main.temp);
    const feelF = toFahrenheit(main.feels_like);
    const highF = toFahrenheit(main.temp_max);
    const lowF = toFahrenheit(main.temp_min);

    toggle.addEventListener('change', () => {
      if (toggler.checked) {
        weatherValue.innerHTML = `${Math.floor(tempF)}°F`;

        description.innerHTML = `Feels like: ${Math.floor(feelF)}°F`;

        max.innerHTML = `Highest: ${Math.floor(highF)}°F`;

        min.innerHTML = `Lowest: ${Math.floor(lowF)}°F`;
      } else {
        weatherValue.innerHTML = `${Math.floor(main.temp)}°C`;

        description.innerHTML = `Feels like: ${Math.floor(main.feels_like)}°C`;

        max.innerHTML = `Highest: ${Math.floor(main.temp_max)}°C`;

        min.innerHTML = `Lowest: ${Math.floor(main.temp_min)}°C`;
      }
    });
  };
  convertTemp(data);

  skycon(data);
};

export default displayData;