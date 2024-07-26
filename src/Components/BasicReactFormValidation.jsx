import React, { useState } from 'react';

const SimpleForm = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ email: e.target.value });
  };

  const validate = () => {
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return 'Email is invalid';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
    } else {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={formData.email} onChange={handleChange} />
        {error && <p>{error}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
