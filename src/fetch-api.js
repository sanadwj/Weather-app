// fetch('api.openweathermap.org/data/2.5/weather?q=London&appid=f0a0a5cdff8354ea00890abfc36922f3', {
//   method: 'GET',
//   mode: 'cors',
// })
//   .then(response => console.log(response))
//   .catch(error => console.log(error));
const ev = "amman"

async function getWeather(value) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=f0a0a5cdff8354ea00890abfc36922f3&units=metric`,
    );

    const result = await response.json();
    const data = result;
    console.log(data);
    const { main } = data
    console.log(main.temp)

   
  } catch (error) {
    
  }
}

getWeather(ev)