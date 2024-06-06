// src/SearchForm.js
import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = () => {
    const [country, setCountry] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Country:', country);
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);
    };

    return (
        <div className="search-form-container">
            <form onSubmit={handleSearch} className="search-form">
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    >
                        <option value="">Search Country</option>
                        <option value="dubai">Dubai</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="start-date">Start Date</label>
                    <input
                        type="date"
                        id="start-date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="end-date">End Date</label>
                    <input
                        type="date"
                        id="end-date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="search-button">Search Now</button>
            </form>
        </div>
    );
};

export default SearchForm;
