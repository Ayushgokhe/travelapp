// const express = require('express')
// const {formfill} = require('../controller/document')

// const router = express.Router()

// router.post("/submit", formfill)
 
// module.exports = router
// // export default 

const express = require('express');
const { formfill } = require('../controller/document');
const multer = require('multer');
const path = require('path');

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define the destination folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Define the file naming convention
  }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/submit", upload.fields([
  { name: 'passportFrontImage', maxCount: 1 },
  { name: 'passportBackImage', maxCount: 1 }
]), formfill);

module.exports = router;
