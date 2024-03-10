const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const firstSqlQuery = `SELECT * FROM "character" WHERE id=1;`;
  const secondSqlQuery = `SELECT "id", "skill_name", "associated_attribute", "skill_dice", "skill_bonus" FROM "skills" WHERE character_id = 1;`;
  pool.query(firstSqlQuery)
  .then(response => {
    const character = response.rows[0];
    // res.send(response.rows[0]);
    pool.query(secondSqlQuery)
    .then(secondResponse => {
      // skills will be an array of objects. Each object represents one skill
      const skills = secondResponse.rows;
      character.dexterity_skills = [];
      character.perception_skills = [];
      for (let skill of skills) {
        switch (skill.associated_attribute) {
          case 'Dexterity':
            character.dexterity_skills.push(skill);
            break;
          case 'Perception':
            character.perception_skills.push(skill);
            break;
        }
      }
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
    SET "character_name"=$1, "species"=$2, "gender"=$3, "physical_description"=$4,
    "dexterity_dice"=$5, "dexterity_bonus"=$6, "perception_dice"=$7, "perception_bonus"=$8, "equipment"=$9, "notes"=$10
    WHERE id=1;`;
  pool.query(sqlQuery, [
    req.body.character_name,
    req.body.species,
    req.body.gender,
    req.body.physical_description,
    req.body.dexterity_dice,
    req.body.dexterity_bonus,
    req.body.perception_dice,
    req.body.perception_bonus,
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