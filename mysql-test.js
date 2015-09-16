var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'superhacker1',
  database: 'manga_tracker'
});

var sql = 'SELECT * FROM users WHERE username = "asdf";';
connection.connect();
connection.query(sql, function(err, results) {
  if (err) console.log(err);
  console.log(results);
});
