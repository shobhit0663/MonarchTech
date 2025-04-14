import React from 'react';
import './VillageDropdown.css';

const VillageDropdown = ({ villageGeoData, selectedVillage, onVillageChange }) => {
  return (
    <div className="village-dropdown-container">
      <fieldset className="village-fieldset">
        <legend className="village-legend">Select Village/City</legend>
        <select
          className="village-select"
          onChange={onVillageChange}
          value={selectedVillage}
          id="drop-down"
        >
          <option value="">Select a Village/City</option>
          {villageGeoData &&
            villageGeoData.map((feature, idx) => (
              <option key={idx} value={feature.properties?.NAME}>
                {feature.properties?.NAME}
              </option>
            ))}
        </select>
      </fieldset>

      
      <div className="contact-info">
        <h4>Contact Information</h4>
        <ul>
          <li><span role="img" aria-label="email">📧</span> shobhitgaidhane105@gmail.com</li>
          <li><span role="img" aria-label="phone">📱</span> +91 7709769661</li>
          <li>
            <span role="img" aria-label="linkedin">🔗</span>
            <a href="https://www.linkedin.com/in/shobhitgaidhane/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <span role="img" aria-label="github">🐱</span>
            <a href="https://github.com/shobhit0663?tab=repositories" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VillageDropdown;
