const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const bodyParser = require('body-parser');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const sqlText = `UPDATE gallery SET likes = likes + 1 WHERE id = $1;`
    pool.query(sqlText, [galleryId])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`Error making database change LIKES`, error);
        res.sendStatus(500);
    });
}); // END PUT Route


// GET ROUTE
router.get('/', (req, res) => {
    // Get all of the treats from the database
    const sqlText = `SELECT * FROM gallery ORDER BY id DESC;`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;