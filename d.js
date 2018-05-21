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

function nhan(a, b) {
    return new Promise((resolve, reject) => {
        const url = `http://async1704.herokuapp.com/tinh/NHAN/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error'));
        request(url, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

function chia(a, b) {
    return new Promise((resolve, reject) => {
        const url = `http://async1704.herokuapp.com/tinh/CHIA/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error'));
        request(url, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

// function tinhDienTich(a, b, h) {
//     return cong(a, b)
//     .then(tong => nhan(tong, h))
//     .then(tich => chia(tich, 2));
// }

// tinhDienTich(4, 5, 6)
// .then(result => console.log(result))
// .catch(error => console.log(error));

async function tinhDienTichHinhThang(a, b, h) {
    try {
        const tong = await cong(a, b);
        const tich = await nhan(tong, h);
        const kq = await chia(tich, 2);
        return kq;  
    } catch (error) {
        throw new Error('Loi gi do');
    }
}

tinhDienTichHinhThang(4, 5, 'x')
.then(result => console.log(result))
.catch(error => console.log(error));
