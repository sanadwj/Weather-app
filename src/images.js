const images = (data) => {
  const { body } = document;
  if (data.weather[0].icon === '01n') {
    body.classList = '';
    body.classList.add('night-img');
  } else if (data.weather[0].main === 'Clouds') {
    body.classList = '';
    body.classList.add('cloudy-img');
  } else if (data.weather[0].main === 'Snow') {
    body.classList = '';
    body.classList.add('snow-img');
  } else if (
    data.weather[0].main === 'Rain'
    || data.weather[0].main === 'Drizzle'
  ) {
    body.classList = '';
    body.classList.add('rain-img');
  } else if (data.weather[0].main === 'Thunderstorm') {
    body.classList = '';
    body.classList.add('storm-img');
  } else {
    body.classList = '';
    body.classList.add('default-img');
  }
};

export default images;