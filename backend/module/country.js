const mongoose = require('mongoose');

const countryDaysSchema = new mongoose.Schema({
  country: { type: String, required: true },
  visa_processing_days: { type: Number, required: true },
}, { collection: 'country&days' });

module.exports = mongoose.model('CountryDays', countryDaysSchema);
