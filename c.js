const request = require('request');

const url = 'http://async1704.herokuapp.com/tinh/TRU/4/5';

request(url, (error, response, body) => {
    if (error) return console.log(error);
    console.log(body);
});
