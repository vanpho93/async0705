const request = require('request');

function cong(a, b) {
    return new Promise((resolve, reject) => {
        const url = `http://async1704.herokuapp.com/tinh/CONG/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error'));
        request(url, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

cong(4, 5)
.then(result => console.log(result))
.catch(error => console.log(error.message));
