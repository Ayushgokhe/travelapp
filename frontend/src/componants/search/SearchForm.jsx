import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import countries from '../../countries.json';
import './SearchForm.css';

const SearchForm = () => {
  const [country, setCountry] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const query = e.target.value;
    setCountry(query);

    if (query.length > 0) {
      const filtered = countries.filter((ele) =>
        ele.label.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries([]);
    }
  };

  const handleSelectCountry = (country) => {
    setCountry(country);
    setFilteredCountries([]);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (startDate > endDate) {
      alert("End date should be greater than or equal to start date");
    } else {
      navigate(`/result?country=${country}&startDate=${startDate}&endDate=${endDate}`);
    }
  };

  const today = new Date().toISOString().split('T')[0]; // Get today's date

  return (
    <div className="search-form-container">
      <form onSubmit={handleSearch} className="search-form">
        <div className="form-group">
          <label>Country</label>
          <input
            type="search"
            value={country}
            onChange={handleInputChange}
            placeholder="Search for a country"
            required
          />
          {filteredCountries.length > 0 && (
            <ul className="country-list">
              {filteredCountries.map((ele, index) => (
                <li key={index} onClick={() => handleSelectCountry(ele.label)}>
                  {ele.label}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            min={today} // Set minimum date to today
            onChange={handleStartDateChange}
            required
          />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            min={startDate} // Set minimum date to the selected start date
            onChange={handleEndDateChange}
            required
          />
        </div>
        <button className='searchbtn' type="submit">Search Now</button>
      </form>
    </div>
  );
};

export default SearchForm;

