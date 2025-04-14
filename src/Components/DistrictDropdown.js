import React from 'react';
import './DistrictDropdown.css';

const DistrictDropdown = ({ geoData, selectedDistrict, onDistrictChange }) => {
  return (
    <fieldset className="district-fieldset">
      <legend className="district-legend">Select District</legend>
      <select
        onChange={onDistrictChange}
        value={selectedDistrict}
        className="district-select"
      >
        <option value="">Select a district</option>
        {geoData &&
          geoData.features.map((feature, idx) => (
            <option key={idx} value={feature.properties?.dtname}>
              {feature.properties?.dtname}
            </option>
          ))}
      </select>
    </fieldset>
  );
};

export default DistrictDropdown;
