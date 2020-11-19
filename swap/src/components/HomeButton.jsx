import React, { Component } from "react";
import styled from "styled-components";

const HomeButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin-top: 12rem;
`;

const SearchButton = styled.button`
  height: 20vh;
  width: 90vw;
  background-color: rgb(203, 57, 53);
  box-shadow: 4px 4px 4px rgba(81, 90, 90, 0.4);
  color: white;
  outline: none;
  margin-top: 1rem;
  border: none;
  transition: ease-in-out 0.2s;
  :active {
    box-shadow: none;
  }
`;

const DepositButton = styled.button`
  height: 20vh;
  width: 90vw;
  background-color: rgb(203, 57, 53);
  box-shadow: 4px 4px 4px rgba(81, 90, 90, 0.4);
  color: white;
  outline: none;
  border: none;
  transition: ease-in-out 0.2s;
  :active {
    box-shadow: none;
  }
`;

class HomeButton extends Component {
  render() {
    return (
      <HomeButtonWrap>
        <DepositButton>Deposit</DepositButton>
        <SearchButton>Looking for Something ?</SearchButton>
      </HomeButtonWrap>
    );
  }
}

export default HomeButton;
