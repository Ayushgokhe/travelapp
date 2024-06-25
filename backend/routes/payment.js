const express = require('express');
const { createPaymentLink } = require('../controller/paymentController');

const router = express.Router();

router.get('/create-payment-link', createPaymentLink);

module.exports = router;
