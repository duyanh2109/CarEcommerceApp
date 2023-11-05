"use client";
import React from "react";
import { SearchButton } from "./";
import { SearchManufacture } from "./";
import { useState } from "react";
import SearchManufactures from "./SearchManufacture";
const SearchBar = () => {
  const [manufacture, setManufacture] = useState("");
  const handleSearch = () => {};
  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <SearchManufactures
          manufacture={manufacture}
          setManufacture={setManufacture}
        />
        <SearchButton otherClasses />
      </div>
    </form>
  );
};

export default SearchBar;
