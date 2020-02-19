const mysql = require('mysql');

//DEV
const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ela'
});
// const mysqlConnection = mysql.createConnection({
//     host:'plataforma.zt.ela.cl',
//     user:'root',
//     password:'eladmin2015',
//     database:'ela'
// });

mysqlConnection.connect((err)=>{
    if (err) {
        console.log(err);
        return;
    }else{
        console.log('DB is connected');
    }
});

module.exports = mysqlConnection;