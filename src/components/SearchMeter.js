import React from "react";

import "./Common.css";

function SearchMeter() {
  const handleSearch = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("pppp", position);
    });
  };
  return (
    <div>
      <button className="search-meter" onClick={handleSearch}>
        Find Meter by Current Location
      </button>
    </div>
  );
}

export default SearchMeter;
