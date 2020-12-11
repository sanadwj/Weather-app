import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import form from './src/form';
import display from './src/display';
import appBody from './src/body';

const { body } = document;

form();
appBody();


async function getWeather(value) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=f0a0a5cdff8354ea00890abfc36922f3&units=metric`,
    );

    const result = await response.json();
    const data = result;
      console.log(data)
    display(data);
  } catch (error) {
    const input = document.querySelector('.search');
    input.value = '';
    input.classList.add('error');
    input.placeholder = 'Enter a valid city';
  }
}

console.log(getWeather('amman'));

const weatherForm = document.querySelector('.form-group');
const formInput = document.querySelector('.search');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formInput.classList.remove('error');
  formInput.placeholder = 'Enter a city';
  getWeather(formInput.value);
  weatherForm.reset();
});