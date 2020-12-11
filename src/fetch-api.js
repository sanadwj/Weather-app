import displayData from './display';






async function getWeather(value) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=f0a0a5cdff8354ea00890abfc36922f3&units=metric`,
    );

    const result = await response.json();
    const data = result;

    displayData(data);
  } catch (error) {
    // const input = document.querySelector('.search');
    // input.value = '';
    // input.classList.add('error');
    // input.placeholder = 'Enter a valid city';
  }
}


export default getWeather;