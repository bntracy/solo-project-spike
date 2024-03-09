const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const sqlQuery = `SELECT * FROM "character";`;
  pool.query(sqlQuery).then(response => {
    res.send(response.rows[0]);
  }).catch(error => {
    console.log('Error in GET', error);
    res.sendStatus(500);
  });
});

module.exports = router;