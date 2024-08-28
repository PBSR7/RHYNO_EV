import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>Message:
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
