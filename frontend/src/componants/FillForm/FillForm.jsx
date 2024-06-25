// import React, { useState } from 'react';
// import axios from 'axios';
// import './FillForm.css';

// const FillForm = () => {
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   // const [documentData, setDocumentData] = useState(null);
//   // const [error, setError] = useState(null);
//   const [showForm, setShowForm] = useState(false);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleUpload = async () => {
//     const apiKey = 'e5222662cb0989ca9e1b92dc93c71f11'; // Replace with your actual API key
//     if (!file) {
//       alert('Please select a file first.');
//       return;
//     }

//     setLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append('document', file);

//       const url = 'https://api.mindee.net/v1/products/mindee/passport/v1/predict';
//       const headers = {
//         'Content-Type': 'ultipart/form-data',
//         'Authorization': `Token ${apiKey}`
//       };

//       const response = await axios.post(url, formData, { headers });
//       console.log('API Response:', response.data);

//       const documentData = response.data.document.inference.prediction;

//       // Populate form fields with extracted data
//       setFormData({
//        ...formData,
//         passportNumber: documentData.id_number? documentData.id_number.value : '',
//         givenName: documentData.given_names? documentData.given_names.map(obj => obj.value).join(' ') : '',
//         surname: documentData.surname? documentData.surname.value : '',
//         sex: documentData.gender? documentData.gender.value : '',
//         dob: documentData.birth_date? documentData.birth_date.value : '',
//         placeOfBirth: documentData.birth_place? documentData.birth_place.value : '',
//         passportExpiryDate: documentData.expiry_date? documentData.expiry_date.value : '',
//         passportIssueDate: documentData.issuance_date? documentData.issuance_date.value : '',
//         passportIssuePlace: documentData.issue_place? documentData.issue_place.value : '',
//       });

//       setShowForm(true);

//       // Clear file input and loading state after successful scan
//       setFile(null);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error during document scan:', error);
//       setError('Error during document scan. Please try again.');
//       setLoading(false);
//     }
//   };

//   const initialFormData = {
//     passportNumber: '',
//     givenName: '',
//     surname: '',
//     sex: '',
//     dob: '',
//     placeOfBirth: '',
//     passportExpiryDate: '',
//     passportIssueDate: '',
//     passportIssuePlace: '',
//     addressSameAsPassport: true,
//     address1: '',
//     address2: '',
//     city: '',
//     state: '',
//     pincode: '',
//     phone: '',
//     passportFrontImage: null,
//     passportBackImage: null
//   };

//   const [formData, setFormData] = useState(initialFormData);

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     if (type === 'file') {
//       setFormData({
//        ...formData,
//         [name]: files[0]
//       });
//     } else {
//       setFormData({
//        ...formData,
//         [name]: type === 'checkbox'? checked : value
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form data being sent:", formData);

//     const formDataToSend = new FormData();
//     for (const key in formData) {
//       formDataToSend.append(key, formData[key]);
//     }

//     try {
//       const response = await axios.post('http://localhost:4000/api/v1/document/submit', formDataToSend, {
//         headers: {
//           'Content-Type': 'ultipart/form-data'
//         }
//       });
//       console.log(response.data);
//       setFormData(initialFormData);
//     } catch (error) {
//       console.error('There was an error submitting the form!', error);
//     }
//   };

//   return (
//     <>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload} disabled={!file || loading}>
//         {loading? 'Uploading...' : 'Upload & Scan'}
//       </button>
//       {showForm && (
//       <div className="form-container">
//         <form onSubmit={handleSubmit}>
//           <h3>Review's basic details:</h3>
          
//           <div className="form-group">
//             <label>Passport number:</label>
//             <input type="text" name="passportNumber" value={formData.passportNumber} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Given name (as on Passport):</label>
//             <input type="text" name="givenName" value={formData.givenName} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Surname (as on Passport):</label>
//             <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
// </div>

//           <div className="form-group">
//             <label>Sex:</label>
//             <select name="sex" value={formData.sex} onChange={handleChange} required>
//               <option value="">Select</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Date of birth:</label>
//             <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Place of birth:</label>
//             <input type="text" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Passport expiry date:</label>
//             <input type="date" name="passportExpiryDate" value={formData.passportExpiryDate} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Passport issue date:</label>
//             <input type="date" name="passportIssueDate" value={formData.passportIssueDate} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Passport issue place:</label>
//             <input type="text" name="passportIssuePlace" value={formData.passportIssuePlace} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Passport Front Image:</label>
//             <input type="file" name="passportFrontImage" onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Passport Back Image:</label>
//             <input type="file" name="passportBackImage" onChange={handleChange} required />
//           </div>

//           <h3>Current residential address:</h3>

//           <div className="form-group">
//             <label>
//               <input type="checkbox" className='addressSameAsPassport' name="addressSameAsPassport" checked={formData.addressSameAsPassport} onChange={handleChange} />
//               My address in passport is same as current residential address
//             </label>
//           </div>

//           <div className="form-group">
//             <label>Address 1:</label>
//             <input type="text" name="address1" value={formData.address1} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Address 2:</label>
//             <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
//           </div>

//           <div className="form-group">
//             <label>City:</label>
//             <input type="text" name="city" value={formData.city} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>State:</label>
//             <input type="text" name="state" value={formData.state} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label>Pincode:</label>
//             <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
//           </div>

//           <h3>Contact Details:</h3>

//           <div className="form-group">
//             <label>Phone:</label>
//             <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
//           </div>

//           <button type="submit" style={{marginTop:'15px'}} className="submit-button">Verify Traveller's details</button>
//         </form>
//       </div>
//       )}
//     </>
//   );
// };

// export default FillForm;


// **************************************WORKING******************************************


import React, { useState } from 'react';
import axios from 'axios';
import './FillForm.css';

const initialFormData = {
  passportNumber: '',
  givenName: '',
  surname: '',
  sex: '',
  dob: '',
  placeOfBirth: '',
  passportExpiryDate: '',
  passportIssueDate: '',
  passportIssuePlace: '',
  addressSameAsPassport: true,
  address1: '',
  address2: '',
  city: '',
  state: '',
  pincode: '',
  phone: '',
  passportFrontImage: null,
  passportBackImage: null
};

const FillForm = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    const apiKey = 'e5222662cb0989ca9e1b92dc93c71f11'; // Replace with your actual API key
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('document', file);

      const url = 'https://api.mindee.net/v1/products/mindee/passport/v1/predict';
      const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Token ${apiKey}`
      };

      const response = await axios.post(url, formData, { headers });
      console.log('API Response:', response.data);

      const documentData = response.data.document.inference.prediction;

      // Populate form fields with extracted data
      setFormData({
        ...formData,
        passportNumber: documentData.id_number ? documentData.id_number.value : '',
        givenName: documentData.given_names ? documentData.given_names.map(obj => obj.value).join(' ') : '',
        surname: documentData.surname ? documentData.surname.value : '',
        sex: documentData.gender ? documentData.gender.value : '',
        dob: documentData.birth_date ? documentData.birth_date.value : '',
        placeOfBirth: documentData.birth_place ? documentData.birth_place.value : '',
        passportExpiryDate: documentData.expiry_date ? documentData.expiry_date.value : '',
        passportIssueDate: documentData.issuance_date ? documentData.issuance_date.value : '',
        passportIssuePlace: documentData.issue_place ? documentData.issue_place.value : '',
      });

      setShowForm(true);

      // Clear file input and loading state after successful scan
      setFile(null);
      setLoading(false);
    } catch (error) {
      console.error('Error during document scan:', error);
      setError('Error during document scan. Please try again.');
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data being sent:", formData);

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:4000/api/v1/document/submit', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Form submission response:', response.data);

      setFormData(initialFormData);

      // Redirect to payment link
      const paymentResponse = await axios.get('http://localhost:4000/api/v1/payment/create-payment-link');
      const paymentLink = paymentResponse.data.link_url;
      if (paymentLink) {
        console.log('Payment link:', paymentLink);
        window.location.href = paymentLink; // Redirect to the payment link
      } else {
        setError('No payment link returned');
      }
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      setError('There was an error submitting the form!');
    }
  };


  return (
    <div className='mainDiv'>
     <div className='fileUpload'>
     <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file || loading}>
        {loading ? 'Uploading...' : 'Upload & Scan'}
      </button>
     </div>
      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h3>Review's basic details:</h3>
            <div className="form-group">
              <label>Passport number:</label>
              <input type="text" name="passportNumber" value={formData.passportNumber} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Given name (as on Passport):</label>
              <input type="text" name="givenName" value={formData.givenName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Surname (as on Passport):</label>
              <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Sex:</label>
              <select name="sex" value={formData.sex} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date of birth:</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Place of birth:</label>
              <input type="text" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Passport expiry date:</label>
              <input type="date" name="passportExpiryDate" value={formData.passportExpiryDate} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Passport issue date:</label>
              <input type="date" name="passportIssueDate" value={formData.passportIssueDate} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Passport issue place:</label>
              <input type="text" name="passportIssuePlace" value={formData.passportIssuePlace} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Passport Front Image:</label>
              <input type="file" name="passportFrontImage" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Passport Back Image:</label>
              <input type="file" name="passportBackImage" onChange={handleChange} required />
            </div>
            <h3>Current residential address:</h3>
            <div className="form-group">
              <label>
                <input type="checkbox" className='addressSameAsPassport' name="addressSameAsPassport" checked={formData.addressSameAsPassport} onChange={handleChange} />
                My address in passport is same as current residential address
              </label>
            </div>
            <div className="form-group">
              <label>Address 1:</label>
              <input type="text" name="address1" value={formData.address1} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Address 2:</label>
              <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>State:</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Pincode:</label>
              <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
            </div>
            <h3>Contact Details:</h3>
            <div className="form-group">
              <label>Phone:</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <button type="submit" style={{ marginTop: '15px' }} className="submit-button">Verify Traveller's details</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>
      )}
    </div>
  );
};

export default FillForm;

// ************************************WORKING********************************************

