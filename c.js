const request = require('request');

function cong(a, b, cb) {
    const url = `http://async1704.herokuapp.com/tinh/CONG/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error'));
    request(url, (error, response, body) => {
        if (error) return cb(error);
        cb(null, body);
    });
}

cong('x', 5, (error, total) => {
    if (error) return console.log(error.message);
    console.log(total);
});
