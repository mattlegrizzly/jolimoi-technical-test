const express = require('express');
const cors = require('cors'); // Add this line
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Need to be replace or edit in production
app.use(cors()); // Allow all origins

app.get('/', (req, res) => {
    res.send('Hello World! This is a Node.js HTTP server.');
});

// Include routes from external files
const conversionRoutes = require('./routes/conversions');

// Use routes
app.use('/conversion', conversionRoutes);

const port = process.env.NODE_PORT || 3000;

module.exports = app;

if (require.main === module) {
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
}