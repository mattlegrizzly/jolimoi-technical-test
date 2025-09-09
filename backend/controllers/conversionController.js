const { toRoman } = require('../services/romanService');

/**
 * Controller to handle conversion requests.
 */
exports.convertNumber = async (req, res) => {
  const { number } = req.body;

  if (isNaN(number) || number < 1 || number > 100 || !Number.isInteger(number)) {
    return res.status(400).json({ error: "Number must be a positive integer between 1 and 100" });
  }

  const result = await toRoman(number);
  res.json({ result });
};

/**
 * SSE Controller to handle real-time conversion requests.
 */
exports.convertNumberSSE = async (req, res) => {
  const number = parseInt(req.query.number, 10);

if (isNaN(number) || number < 1 || number > 100) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.write(`data: ${JSON.stringify({ error: "Number must be between 1 and 100" })}\n\n`);
  return res.end();
}

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const result = await toRoman(number);

  res.write(`data: ${JSON.stringify({ result })}\n\n`);
  res.end();
};

