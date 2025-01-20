import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <label>Cari Barang</label>
      <input type="text" onChange={(e) => onSearch(e.target.value)} />
    </div>
  );
};

export default SearchBar;
