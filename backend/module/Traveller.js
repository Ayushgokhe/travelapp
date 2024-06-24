// const mongoose = require('mongoose');

// const travellerSchema = new mongoose.Schema({
//   passportNumber: { type: String, required: true },
//   givenName: { type: String, required: true },
//   surname: { type: String, required: true },
//   sex: { type: String, required: true },
//   dob: { type: Date, required: true },
//   placeOfBirth: { type: String, required: true },
//   passportExpiryDate: { type: Date, required: true },
//   passportIssueDate: { type: Date, required: true },
//   passportIssuePlace: { type: String, required: true },
//   addressSameAsPassport: { type: Boolean, default: true },
//   address1: { type: String, required: true },
//   address2: { type: String },
//   city: { type: String, required: true },
//   state: { type: String },
//   pincode: { type: String, required: true },
//   phone: { type: String, required: true },
// });

// const Traveller = mongoose.model('traveller', travellerSchema);

// module.exports = Traveller;


const mongoose = require('mongoose');

const travellerSchema = new mongoose.Schema({
  passportNumber: { type: String, required: true },
  givenName: { type: String, required: true },
  surname: { type: String, required: true },
  sex: { type: String, required: true },
  dob: { type: Date, required: true },
  placeOfBirth: { type: String, required: true },
  passportExpiryDate: { type: Date, required: true },
  passportIssueDate: { type: Date, required: true },
  passportIssuePlace: { type: String, required: true },
  addressSameAsPassport: { type: Boolean, default: true },
  address1: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  state: { type: String },
  pincode: { type: String, required: true },
  phone: { type: String, required: true },
  passportFrontImagePath: { type: String, required: true },
  passportBackImagePath: { type: String, required: true }
});

const Traveller = mongoose.model('Traveller', travellerSchema);

module.exports = Traveller;
