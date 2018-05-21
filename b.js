const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=SaiGon'

request(url, { json: true }, (error, response, body) => {
    if (error) return console.log(error);
    console.log(body.main.temp);
});
