const { toRoman } = require('../services/romanService');

exports.convertNumber = async (req, res) => {
  const { number } = req.body;


  if (isNaN(number) || number < 1 || number > 3999 || !Number.isInteger(number)) {
    return res.status(400).json({ error: "Number must be a positive integer between 1 and 3999" });
  }

  const result = await toRoman(number);
  res.json({ result });
};
