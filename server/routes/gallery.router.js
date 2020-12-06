const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const bodyParser = require('body-parser');

// DO NOT MODIFY THIS FILE FOR BASE MODE

//POST ROUTE

router.post('/', (req, res) => {
    // Grabs the input data from the user.
    const galleryItem = req.body;
    const sqlText = `INSERT INTO gallery (path, description) VALUES ($1, $2);`;
    // Running the sqlText in our database with sanitized input values.
    pool.query(sqlText, [galleryItem.path, galleryItem.description])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// PUT Route
router.put('/like/:id', (req, res) => {
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

//DELETE ROUTE for individual item
router.delete('/:id', (req, res) => {
    let galleryId = req.params.id;
    console.log('Delete request for id', galleryId);
    let sqlText = 'DELETE FROM gallery WHERE id=$1;';
    pool.query(sqlText, [galleryId])
        .then((result) => {
            console.log('Photo deleted');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

module.exports = router;