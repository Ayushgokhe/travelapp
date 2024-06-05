const express = require('express')
const {formfill} = require('../controller/document')

const router = express.Router()

router.post("/submit", formfill)
 
module.exports = router
// export default router