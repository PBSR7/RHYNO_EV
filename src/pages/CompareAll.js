import React from 'react';
import '../styles/pages.css';

function CompareAll() {
  return (
    <div className="compare-all">
      <h1>Compare All Products</h1>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Best For</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SE03 Lite</td>
            <td>City rides</td>
            <td>Light and efficient</td>
          </tr>
          <tr>
            <td>SE03</td>
            <td>Daily commuting</td>
            <td>Balanced and durable</td>
          </tr>
          <tr>
            <td>SE03 Max</td>
            <td>Longer trips</td>
            <td>Maximum capability</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompareAll;
