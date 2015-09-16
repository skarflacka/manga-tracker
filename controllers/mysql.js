var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'superhacker1',
  database: 'manga_tracker',
});

connection.connect();

exports.findUser = function(username, callback) {
  var sql = 'SELECT * FROM users WHERE username = ' + connection.escape(username);
  connection.query(sql, function(err, results) {
    return callback(null, results[0]);
  });
};
