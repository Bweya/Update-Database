const db = require('../server/testSQL.js');
exports.update_func = async (req, res, next) => {

  try{
    await db.all(req.body.fname, req.body.nage);

    res.writeHead( 200, {"Content-Type":"text/html"} );
    res.write("<p>Update data successful</p>");
    res.write("<p>NAME:   <strong>"+req.body.fname+"</strong></p>");
    res.write("<p>AGE:    <strong>"+req.body.nage+"</strong></p>");
    res.end();
  }
  catch(e){
    console.log(e);
    res.sendStatus(500);
  }


}
