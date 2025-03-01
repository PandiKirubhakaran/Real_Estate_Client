import React from "react";
import './Filter.scss';

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search results for <b>Chennai</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">City Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
      <div className="item">
          <label htmlFor="type">Type</label>
         <select name='type' id="type">
        <option value="">Any</option>
        <option value="buy">Buy</option>
        <option value="rent">Rent</option>
         </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name='propety' id="property">
        <option value="">Any</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="condo">Condo</option>
        <option value="land">Land</option>
         </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bathroom">Bath Room</label>
          <input
            type="number"
            id="bathroom"
            name="bathroom"
            placeholder="any"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
