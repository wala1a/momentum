/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
// eslint-disable-next-line no-undef
axios({
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&lang=ar&appid=2de5d576d72b3ea9c2855652c5780075'
  })
    .then((response) => {
      console.log(response.data.name)
      const temp = response.data.main.temp;
      $('body').append(`<h1>${temp}</h1>`);
      //const desc = response.data.main
    })
    .catch((error) => {
      console.log(error);
    });