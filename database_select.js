const mysql = require('mysql');
const databaseConnection = require('./database_connection');
const connection = mysql.createConnection(databaseConnection);

module.exports = {
    
    SearchCPF :
    function CheckCPF(cpf){
        connection.connect(); 
        connection.query(`select nome from visitantes where cpf = ${cpf}`, 
        function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        }); 
        connection.end();
    }
}