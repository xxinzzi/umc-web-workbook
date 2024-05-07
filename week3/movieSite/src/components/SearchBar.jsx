import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 300px;
  height: 23px;
  border-radius: 7px;
  border: none;
  padding: 5px 10px;
`;

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    onSearch(searchQuery);
  },[searchQuery]);

  return (
    <SearchBarWrapper>
      <SearchForm>
          <SearchInput
            type="text"
            placeholder="검색"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <SearchIcon onClick={handleSearchClick}>
            <FontAwesomeIcon icon={faSearch} />
          </SearchIcon>
      </SearchForm>
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
