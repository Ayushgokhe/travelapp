const axios = require('axios');

const createPaymentLink = async (req, res) => {
  const APP_ID = 'TEST10219466e70129debb02ea15aa1a66491201';
  const SECRET_KEY = 'cfsk_ma_test_1747967e934b83d2f8ed9b9e0dab0aa8_2d8385aa';
  const linkId = `link_${Date.now()}`;

  try {
    const response = await axios.post('https://sandbox.cashfree.com/pg/links', {
      customer_details: {
        customer_phone: '9999999999',
        customer_email: 'ayushgokhe2001@gmail.com'
      },
      link_notify: { send_email: true, send_sms: true },
      link_id: linkId,
      link_amount: 100,
      link_currency: 'INR',
      link_purpose: 'Payment for PlayStation 11'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-client-id': APP_ID,
        'x-client-secret': SECRET_KEY,
        'x-api-version': '2023-08-01'
      }
    });

    res.json({ link_url: response.data.link_url });
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).send('Internal Server Error');
    }
  }
};

module.exports = { createPaymentLink };
