const appBody = () => {
  const { body } = document;
  body.className = 'flex align-items-center justify-content-center';

  const allData = document.createElement('div');
  allData.className = 'row align-items-center justify-content-center all-data';
  body.appendChild(allData);

  const canvasIcon = document.createElement('canvas');
  canvasIcon.setAttribute('id', 'icon');
  canvasIcon.setAttribute('width', '128');
  canvasIcon.setAttribute('height', '128');
  allData.appendChild(canvasIcon);

  const weather = document.createElement('div');
  allData.appendChild(weather);
  weather.className = 'm-5';

  const location = document.createElement('div');
  location.className = 'location';
  weather.appendChild(location);

  const weatherValue = document.createElement('div');
  weatherValue.className = 'weather-value';
  weather.appendChild(weatherValue);

  const border = document.createElement('div');
  allData.appendChild(border);
  border.className = 'border-right h-100 ';
  allData.appendChild(border);

  const weatherDetails = document.createElement('div');
  allData.appendChild(weatherDetails);

  const weatherDescription = document.createElement('div');
  weatherDescription.className = 'weather-description';
  weatherDetails.appendChild(weatherDescription);

  const value = document.createElement('div');
  value.className = 'value';
  weatherDetails.appendChild(value);

  const maxTemp = document.createElement('div');
  maxTemp.className = 'max-temp';
  weatherDetails.appendChild(maxTemp);

  const minTemp = document.createElement('div');
  minTemp.className = 'min-temp';
  weatherDetails.appendChild(minTemp);

  const humidity = document.createElement('div');
  humidity.className = 'humidity';
  weatherDetails.appendChild(humidity);

  return body;
};


export default appBody;