
const Skycons = require('skycons')(window);

const skycon = new Skycons({ color: 'white' });


const addSkycon = (data) => {
  if (data.weather[0].main === 'Clouds') {
    skycon.set('icon', 'cloudy');
    skycon.play();
  } else if (
    data.weather[0].main === 'Rain'
    || data.weather[0].main === 'Thunderstorms'
    || data.weather[0].main === 'Drizzle'
  ) {
    skycon.set('icon', 'rain');
    skycon.play();
  } else if (
    data.weather[0].main === 'Mist'
    || data.weather[0].main === 'Smoke'
    || data.weather[0].main === 'Haze'
    || data.weather[0].main === 'Dust'
    || data.weather[0].main === 'Fog'
    || data.weather[0].main === 'Sand'
    || data.weather[0].main === 'Ash'
    || data.weather[0].main === 'Squall'
  ) {
    skycon.set('icon', 'fog');
    skycon.play();
  } else if (data.weather[0].icon === '01n') {
    skycon.set('icon', 'clear_night');
    skycon.play();
  } else if (data.weather[0].icon === '01d') {
    skycon.set('icon', 'clear_day');
    skycon.play();
  } else if (
    data.weather[0].icon === 'Wind'
    || data.weather[0].main === 'Tornado'
  ) {
    skycon.set('icon', 'wind');
    skycon.play();
  } else if (data.weather[0].main === 'Snow') {
    skycon.set('icon', 'snow');
    skycon.play();
  } else {
    skycon.set('icon', 'clear_day');
    skycon.play();
  }
};

export default addSkycon;