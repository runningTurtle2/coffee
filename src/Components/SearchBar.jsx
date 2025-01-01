import React from "react";
import "../Styling/SearchBar.css";
import { IoSearch } from "react-icons/io5";
function SearchBar() {
  return (
    <div className="base">
      <div className="input-wrapper">
        <input type="text" placeholder="Find beans.." />
        <button className="search-btn" ><IoSearch width="100%" height="100%" display="block"/></button>
      </div>
    </div>
  );
}

export default SearchBar;
