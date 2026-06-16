import React from 'react';
import '../styles/pages.css';

function PreBook() {
  return (
    <div className="pre-book">
      <h1>Pre-book Your Rhyno EV</h1>
      <form className="simple-form">
        <label>Name<input type="text" name="name" required /></label>
        <label>Email<input type="email" name="email" required /></label>
        <label>Preferred Model
          <select name="model" defaultValue="se03">
            <option value="se03-lite">SE03 Lite</option>
            <option value="se03">SE03</option>
            <option value="se03-max">SE03 Max</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PreBook;
