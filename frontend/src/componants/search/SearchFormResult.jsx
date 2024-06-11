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
      <div className="card">
        <h1>Visa Processing Information</h1>
        {error ? (
          <p className="error">{error}</p>
        ) : visaProcessingDays !== null ? (
          <p>
            The visa processing time for <strong>{country}</strong> is <strong>{visaProcessingDays}</strong> days.
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SearchFormResult;
