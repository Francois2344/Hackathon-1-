import React, { Component } from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

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
        <Link to='/Deposit'><DepositButton>Deposit</DepositButton></Link>
        <Link to='/SwapList'><SearchButton>Looking for Something ?</SearchButton></Link>
      </HomeButtonWrap>
    );
  }
}

export default HomeButton;
