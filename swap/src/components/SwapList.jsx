import React from "react";
import SwapItem from "./SwapItem";
import styled from "styled-components";

const SWAPLIST = styled.div`
  padding-top: 10rem;
  padding-bottom: 5rem;

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  li {
    display: flex;
    list-style: none;
    justify-content: center;
  }

  .category {
    display: flex;
    justify-content: center;
    flex-warp: warp;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    margin: 0.5rem;
    width: 5rem;
  }
`;

class SwapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swaps: [],
      status: "all",
    };
    this.food = this.food.bind(this);
    this.clothes = this.clothes.bind(this);
    this.tools = this.tools.bind(this);
    this.livestock = this.livestock.bind(this);
    this.showAll = this.showAll.bind(this);
  }
  componentDidMount() {
    this.fetchSwaps();
  }

  fetchSwaps() {
        this.setState({
          swaps: JSON.parse(localStorage.getItem("stuff")),
        });
  }

  food() {
    this.setState({
      status: "food",
    });
  }

  clothes() {
    this.setState({
      status: "clothes",
    });
  }

  tools() {
    this.setState({
      status: "tools",
    });
  }

  livestock() {
    this.setState({
      status: "livestock",
    });
  }

  showAll() {
    this.setState({
      status: "all",
    });
  }

  render() {
    const { swaps, status } = this.state;
    return (
      <SWAPLIST className="SwapList">
        <div className="category">
          <button type="button" onClick={this.food}>
            Food
          </button>
          <button type="button" onClick={this.clothes}>
            Clothes
          </button>
          <button type="button" onClick={this.tools}>
            Tools
          </button>
          <button type="button" onClick={this.livestock}>
            Livestock
          </button>
          <button type="button" onClick={this.showAll}>
            All
          </button>
        </div>
        <ul>
          {swaps
            .filter((event) => {
              console.log(status);
              if (status === "all") {
                return true;
              }
              if (status === "food") {
                return event.category === "food";
              }
              if (status === "clothes") {
                return event.category === "clothes";
              }
              if (status === "tools") {
                return event.category === "tools";
              }
              if (status === "livestock") {
                return event.category === "livestock";
              }
              return event.category === "";
            })
            .map((event) => {
              return (
                <li key={event.id}>
                  <SwapItem {...event} />
                </li>
              );
            })}
        </ul>
      </SWAPLIST>
    );
  }
}

export default SwapList;
