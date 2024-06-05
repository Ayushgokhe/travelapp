const Traveller = require("../module/Traveller");

const formfill = async (req, res) => {
    try {
        const formData = req.body;
        console.log('Received formData:', formData); 
        const traveller = new Traveller(formData);
        console.log('Traveller instance created:', traveller);
        await traveller.save();
        console.log('Traveller saved:', traveller);
        res.status(201).send({ message: 'Form submitted successfully' });
      } catch (error) {
        console.error('Error saving traveller:', error);
        if (error.name === 'ValidationError') {
          res.status(400).send({ message: 'Validation Error', error: error.message });
        } else {
          res.status(400).send({ message: 'Error submitting form', error: error.message });
        }
      }
}

module.exports = {formfill}
