const appBody = () => {
  const { body } = document;

  // const time = new Date();
  // const timeNow = document.createElement('div');
  // timeNow.className = 'time';
  // timeNow.innerHTML = `${time.timeNow()}`;
  // body.appendChild(timeNow);

  const weather = document.createElement('div');
  body.appendChild(weather);

  const canvasIcon = document.createElement('canvas');
  canvasIcon.setAttribute('id', 'icon2');
  canvasIcon.setAttribute('width', '128');
  canvasIcon.setAttribute('height', '128');
  weather.appendChild(canvasIcon);

  const location = document.createElement('div');
  location.className = 'location';
  weather.appendChild(location);

  const weatherValue = document.createElement('div');
  weatherValue.className = 'weather-value';
  weather.appendChild(weatherValue);

  const border = document.createElement('div');
  body.appendChild(border);

  const weatherDetails = document.createElement('div');
  body.appendChild(weatherDetails);

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

  body.appendChild(weather);
  body.appendChild(weatherDetails);
  return body;
};



export default appBody;