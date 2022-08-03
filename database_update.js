const mysql = require('mysql');
const databaseConnection = require('./database_connection');
const connection = mysql.createConnection(databaseConnection);

module.exports = {
    
    InsertINTO : 
    function InsertINTO(table, nome, cpf, email, nascimento, etnia, genero, cidade){
        connection.connect(); 
        connection.query(`insert into ${table} values (default, '${nome}', '${cpf}', '${email}', '${nascimento}', '${etnia}', '${genero}', '${cidade}');`, 
        function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        }); 
        connection.end();
    },

    DeleteFROM :
    function DeleteFROM(table, id){
        connection.connect(); 
        connection.query(`delete from ${table} where id = ${id};`, 
        function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        }); 
        connection.end();
    }

}