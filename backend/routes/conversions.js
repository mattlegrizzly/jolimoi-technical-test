const express = require('express');
const { convertNumber } = require('../controllers/conversionController');
const router = express.Router();

// Define a route

router.get('/roman', (req, res) => {
    res.send('Welcome to the Conversion API. Use POST /conversion/roman to convert a number to Roman numeral.');
});

router.post('/roman', convertNumber);

// export the router module so that server.js file can use it
module.exports = router;