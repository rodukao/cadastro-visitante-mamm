const databaseUpdate = require('./database_update');
const databaseSelect = require('./database_select');

const mysql      = require('mysql');
const databaseConnection = require('./database_connection');
const connection = mysql.createConnection(databaseConnection);

//databaseUpdate.InsertINTO()
//databaseUpdate.DeleteFROM()

connection.connect(); 
connection.query('select nome from visitantes;', function (error, results, fields) {
  if (error) throw error;
  let resultado = JSON.parse(JSON.stringify(results));

  Object.entries(resultado).forEach(([key, value]) => {
    console.log(resultado[key]);
  })
}); 

connection.end();