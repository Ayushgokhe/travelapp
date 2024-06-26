// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const SearchFormResult = () => {
//   const [visaProcessingDays, setVisaProcessingDays] = useState(null);
//   const [error, setError] = useState(null);
//   const location = useLocation();

//   const query = new URLSearchParams(location.search);
//   const country = query.get('country');

//   useEffect(() => {
//     const fetchVisaProcessingDays = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/api/v1/country/${country}`);
//         if (!response.ok) {
//           throw new Error('Country not found');
//         }
//         const data = await response.json();
//         setVisaProcessingDays(data.visa_processing_days);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     if (country) {
//       fetchVisaProcessingDays();
//     }
//   }, [country]);

//   return (
//     <div className="result-container">
//       <h1>Visa Processing Information</h1>
//       {error ? (
//         <p>{error}</p>
//       ) : visaProcessingDays !== null ? (
//         <p>
//           The visa processing time for {country} is {visaProcessingDays} days.
//         </p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default SearchFormResult;


import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css'; // Import the CSS file for styling
import FillForm from '../FillForm/FillForm';
import Navbar from '../Navbar';

const SearchFormResult = () => {
  const [visaProcessingDays, setVisaProcessingDays] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const country = query.get('country');

  useEffect(() => {
    const fetchVisaProcessingDays = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/v1/country/${country}`);
        if (!response.ok) {
          throw new Error('Country not found');
        }
        const data = await response.json();
        setVisaProcessingDays(data.visa_processing_days);
      } catch (error) {
        setError(error.message);
      }
    };

    if (country) {
      fetchVisaProcessingDays();
    }
  }, [country]);

  return (
    <div className="result-container">
      <Navbar/>
      <div className="tourist-visa-container">
      
      <div className="visa-card">
        <div className="visa-header">
          {/* <span className="visa-icon">✈️</span> */}
          <h2>Tourist Visa - Tourist</h2>
        </div>
        
        <div className="visa-details">
          <div className="visa-info">
            <div className="info-item">
              <span className="info-label">Visa Types :</span>
              <span className="info-value">eVISA</span>
            </div>
            {/* <div className="info-item">
              <span className="info-label">Stay duration</span>
              <span className="info-value">{visaProcessingDays}</span>
            </div> */}
            <div className="info-item">
              <span className="info-label">Country :</span>
              <span className="info-value">{country}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Processing time :</span>
              <span className="info-value">{visaProcessingDays} Days</span>
            </div>
          </div>
          
          <div className="visa-price">
            <span className="price-value">₹3,299 per adult</span>
            <a href="#" className="view-details">View details</a>
            <a href="#" className="share-quote">Share Quote</a>
          </div>
        </div>
      </div>
    </div>
      .
      <div></div>
      {error ? null : <FillForm />}
    </div>
  );
};

export default SearchFormResult;
