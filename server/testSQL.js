const sql = require('mysql');
const pool = sql.createPool({
  host : "localhost",
  port : "3306",
  user : "root",
  password : "testSQL2019"
});

let goldenDB = {}

goldenDB.all = (age,fname) => {

  return new Promise((resolve, reject) => {

    pool.query("UPDATE golden.userone SET age = ? WHERE fname = ?;", [fname, age], (err, results) => {

      if(err){
        return reject(err);
      }
      return resolve(results);
    });

  });

}

module.exports = goldenDB;
