import React, { useState } from 'react';
import './CertificateForm.css'; // Ensure this CSS file is properly linked
import { dataset } from '../../ConfigData';

const CertificateForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    day: '',
    month: '',
    year: '',
    reason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  return (
    <form className="certificate-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Recipient's Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="id">Certificate ID:</label>
        <select
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        >
          <option value="">Select ID</option>
          {Object.keys(dataset).map(key => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
      </div>
      <div className="form-date-group">
        <div className="form-group">
          <label htmlFor="day">Day:</label>
          <select id="day" name="day" value={formData.day} onChange={handleChange} required>
            <option value="">Day</option>
            {days.map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="month">Month:</label>
          <select id="month" name="month" value={formData.month} onChange={handleChange} required>
            <option value="">Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <select id="year" name="year" value={formData.year} onChange={handleChange} required>
            <option value="">Year</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="reason">Reason for Award:</label>
        <input
          type="text"
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="submit-button">Create Certificate</button>
    </form>
  );
};

export default CertificateForm;
