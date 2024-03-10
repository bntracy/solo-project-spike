const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const firstSqlQuery = `SELECT * FROM "character" WHERE id=1;`;
  const secondSqlQuery = `SELECT "skill_name", "associated_attribute", "skill_dice", "skill_bonus" FROM "skills" WHERE character_id = 1;`;
  pool.query(firstSqlQuery)
  .then(response => {
    let character = response.rows[0];
    // res.send(response.rows[0]);
    pool.query(secondSqlQuery)
    .then(secondResponse => {
      character.skills = secondResponse.rows;
      console.log(character);
      res.send(character);
    }).catch(error => {
      console.log('Error in second query', error);
      res.sendStatus(500);
    });
  }).catch(error => {
    console.log('Error in GET', error);
    res.sendStatus(500);
  });
});

router.put('/', (req, res) => {
  const sqlQuery = `UPDATE "character"
    SET "character_name"=$1, "species"=$2, "gender"=$3, "physical_description"=$4, "equipment"=$5, "notes"=$6
    WHERE id=1;`;
  pool.query(sqlQuery, [
    req.body.character_name,
    req.body.species,
    req.body.gender,
    req.body.physical_description,
    req.body.equipment,
    req.body.notes])
  .then(response => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('Error in PUT', error);
    res.sendStatus(500);
  });
});

module.exports = router;