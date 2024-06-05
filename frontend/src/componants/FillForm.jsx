import React, { useState } from 'react';
import axios from 'axios';
import './FillForm.css';

const FillForm = () => {
  const [formData, setFormData] = useState({
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
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data being sent:", formData); // Log the form data
    try {
      const response = await axios.post('http://localhost:4000/api/v1/document/submit', formData);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
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

        <h3>Current residential address:</h3>

        <div className="form-group">
          <label>
            <input type="checkbox" name="addressSameAsPassport" checked={formData.addressSameAsPassport} onChange={handleChange} />
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

        {/* <div className="form-group">
          <label>State:</label>
          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select state</option>
            <option value="">MH</option>
            <option value="">MP</option>
            Add state options here
          </select>
        </div> */}

        <div className="form-group">
          <label>Pincode:</label>
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
        </div>

        <h3>Contact Details:</h3>

        <div className="form-group">
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-button">Verify Traveller's details</button>
      </form>
    </div>
  );
};

export default FillForm;
