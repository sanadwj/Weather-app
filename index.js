import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './src/styles/styles.scss';
import form from './src/form';
import display from './src/display';
import appBody from './src/body';
import images from './src/images';


form();


async function getWeather(value) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=f0a0a5cdff8354ea00890abfc36922f3&units=metric`,
    );

    const result = await response.json();
    const data = result;

    display(data);
    images(data);
  } catch (error) {
    const input = document.querySelector('.search');
    input.value = '';
    input.classList.add('error');
    input.placeholder = 'Enter a valid city';
  }
}

const weatherForm = document.querySelector('.form-group');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formInput = document.querySelector('.search');
  formInput.classList.remove('error');
  formInput.placeholder = 'Enter a city';
  getWeather(formInput.value);
  weatherForm.reset();
});

getWeather('amman');
appBody();