import React from "react";
import styled from "styled-components";

function SearchModal({ modal, setModal }) {
  const getModal = () => {
    setModal(!modal);
  };

  return (
    <SearchWrap>
      <SearchContent>
        <Header>
          <h2>지역검색</h2>
        </Header>
        <button onClick={getModal}>❌</button>
      </SearchContent>
    </SearchWrap>
  );
}

export default SearchModal;

const SearchWrap = styled.div`
  position: relative;
`;

const SearchContent = styled.div`
  background-color: red;
`;

const Header = styled.div``;
