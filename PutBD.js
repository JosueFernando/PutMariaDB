	
const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio1",
  password: "servicio1.123",
  database: "empleado"
});

connection.connect();


app.put('/rest/empleado', function (req, res) {
   connection.query('UPDATE `empleados` SET `nombre`=?  where `id_number`=?', [req.body.nombre,req.body.id_number], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});


app.listen(3030, function () {
 console.log('Node app is running on port 3030');

});  



