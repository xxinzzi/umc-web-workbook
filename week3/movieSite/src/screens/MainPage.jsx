import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import Search from "../components/SearchResult";
import SearchResult from "../components/SearchResult";

const Banner = styled.div`
  display: flex;
  height: 230px;
  width: 100vw;
  color: white;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  display: flex;
  width: 100vw;
  color: white;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainPage = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
        <Banner>환영합니다</Banner>
        <Text>Find your movies !</Text>
        <SearchContainer>
          <SearchBar onSearch={handleSearch} />
          {searchQuery && (<SearchResult searchQuery={searchQuery}/> )}
        </SearchContainer>
    </div>
  );
};

export default MainPage;
