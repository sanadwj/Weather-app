import skycon from './skycon';

const displayData = (data) => {
  const { main } = data;
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
  skycon(data);
};

export default displayData;