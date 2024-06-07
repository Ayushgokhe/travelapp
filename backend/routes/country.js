const express = require('express');
const router = express.Router();
const CountryDays = require('../module/country'); // Adjust the path if needed

// Route to get visa processing days by country name
router.get('/:country', async (req, res) => {
  try {
    const countryName = req.params.country;
    const countryData = await CountryDays.findOne({ country: countryName });

    if (countryData) {
      res.json(countryData);
    } else {
      res.status(404).json({ message: 'Country not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
