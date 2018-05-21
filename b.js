const request = require('request');

function getTemp(cityName, cb) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=' + cityName;
    request(url, { json: true }, (error, response, body) => {
        if (error) return cb(error);
        if (!body.main) return cb(new Error('Cannot find city name'));
        cb(null, body.main.temp);
    });
}

getTemp('HaNoi', (error, temp) => {
    if (error) return console.log(error.message);
    console.log(temp);
});
