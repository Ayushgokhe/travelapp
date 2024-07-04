// import React from 'react';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// const PayPalButton = ({ onApprove }) => {
//   return (
//     <PayPalScriptProvider options={{ "client-id": "AUc6hyda1Lg4UDzcvIT_ZvgXTcP9m6cXXARkMZj7Dox50SCxpJ_06GyJAk1CZsTDAOcYHw1z_3LyD17w" }}>
//       <PayPalButtons
//         createOrder={(data, actions) => {
//           return actions.order.create({
//             purchase_units: [{
//               amount: {
//                 value: '0.01' // Update with the actual amount
//               }
//             }]
//           });
//         }}
//         onApprove={onApprove}
//       />
//     </PayPalScriptProvider>
//   );
// };

// export default PayPalButton;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PaymentPage = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  const handleApprove = (data, actions) => {
    // You can send the data and actions to your server to capture the transaction
    return actions.order.capture().then((details) => {
      alert('Transaction completed by ' + details.payer.name.given_name);
      console.log('Transaction details:', details);
    });
  };

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Review and Pay</h1>
      {formData ? (
        <div style={{display:'flex', justifyContent:'center', background:'antiquewhite', padding:'20px'}}>
          {/* <h3>Review's basic details:</h3>
          <p>Passport Number: {formData.passportNumber}</p>
          <p>Given Name: {formData.givenName}</p>
          <p>Surname: {formData.surname}</p>
          <p>Sex: {formData.sex}</p>
          <p>Date of Birth: {formData.dob}</p>
          <p>Place of Birth: {formData.placeOfBirth}</p>
          <p>Passport Expiry Date: {formData.passportExpiryDate}</p>
          <p>Passport Issue Date: {formData.passportIssueDate}</p>
          <p>Passport Issue Place: {formData.passportIssuePlace}</p>
          <p>Address: {formData.address1}, {formData.address2}, {formData.city}, {formData.state}, {formData.pincode}</p>
          <p>Phone Number: {formData.phone}</p> */}
          <PayPalScriptProvider options={{ "client-id": "AUc6hyda1Lg4UDzcvIT_ZvgXTcP9m6cXXARkMZj7Dox50SCxpJ_06GyJAk1CZsTDAOcYHw1z_3LyD17w" }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: '100.00' // Replace with the actual amount
                    }
                  }]
                });
              }}
              onApprove={handleApprove}
            />
          </PayPalScriptProvider>
        </div>
      ) : (
        <p>No form data found.</p>
      )}
    </div>
  );
};

export default PaymentPage;
