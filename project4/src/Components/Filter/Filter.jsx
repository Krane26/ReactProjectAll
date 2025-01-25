import React from 'react';

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        onChange={(e) => setFilterRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;

