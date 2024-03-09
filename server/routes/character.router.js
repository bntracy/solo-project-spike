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

router.put('/overview', (req, res) => {
  console.log(req.body);
  const sqlQuery = `UPDATE "character"
    SET "species"=$1, "gender"=$2, "physical_description"=$3
    WHERE id=1;`;
  pool.query(sqlQuery, [req.body.species, req.body.gender, req.body.physical_description]).then(response => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('Error in PUT', error);
    res.sendStatus(500);
  });
});

module.exports = router;