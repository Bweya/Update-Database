const express = require('express');
const router = express.Router();

let f = require('../controllers');
router.get('/', (req, res, next) => {

  res.render('forms', {title : 'Update Database'});
  router.post('/', f.update_func);

});

module.exports = router;
