const mysql = require('mysql')

let con = mysql.createConnection({
    host: 'localhost',
    user: 'amine',
    password: '123456789'
})

con.connect(function (err) {
    if (err) throw err;
    console.log("Mysql Connected!");
    // con.query()
});

module.exports = { con };