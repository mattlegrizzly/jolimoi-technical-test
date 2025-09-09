const express = require('express');
const { convertNumber, convertNumberSSE } = require('../controllers/conversionController');
const router = express.Router();

/**
 * Basic GET endpoint to verify the service is running
 */
router.get('/roman', (req, res) => {
    res.send('Welcome to the Conversion API. Use POST /conversion/roman to convert a number to Roman numeral.');
});

/**
 * SSE endpoint for real-time Roman numeral conversion
 */
router.get('/roman-sse', convertNumberSSE);

/**
 * POST endpoint to convert a number to Roman numeral
 */
router.post('/roman', convertNumber);

// export the router module so that server.js file can use it
module.exports = router;