const Traveller = require("../module/Traveller");

const formfill = async (req, res) => {
    try {
        const formData = req.body;
        const files = req.files;

        if (!files || !files.passportFrontImage || !files.passportBackImage) {
            return res.status(400).send({ message: 'Passport images are required' });
        }

        const traveller = new Traveller({
            ...formData,
            passportFrontImagePath: files.passportFrontImage[0].path,
            passportBackImagePath: files.passportBackImage[0].path
        });

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

module.exports = { formfill };
