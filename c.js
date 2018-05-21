const request = require('request');

function cong(a, b, cb) {
    const url = `http://async1704.herokuapp.com/tinh/CONG/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error'));
    request(url, (error, response, body) => {
        if (error) return cb(error);
        cb(null, body);
    });
}

function nhan(a, b, cb) {
    const url = `http://async1704.herokuapp.com/tinh/NHAN/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error'));
    request(url, (error, response, body) => {
        if (error) return cb(error);
        cb(null, body);
    });
}

function chia(a, b, cb) {
    const url = `http://async1704.herokuapp.com/tinh/CHIA/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error'));
    request(url, (error, response, body) => {
        if (error) return cb(error);
        cb(null, body);
    });
}

function tinhDienTichHinhThang(a, b, h, cb) {
    cong(a, b, (errorTong, tong) => {
        if (errorTong) return cb(errorTong);
        nhan(tong, h, (errorTich, tich) => {
            if (errorTich) return cb(errorTich);
            chia(tich, 2, (error, kq) => {
                if (error) return cb(error);
                cb(null, kq);
            });
        });
    });
}

tinhDienTichHinhThang(4, 5, 'x', (error, kq) => {
    if (error) return console.log(error);
    console.log(kq);
});
