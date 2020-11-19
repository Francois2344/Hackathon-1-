import React from "react";
import axios from "axios";
import SwapItem from "./SwapItem";

class SwapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swaps: [],
      status: 'food',
    };
    this.food = this.food.bind(this);
    this.clothes = this.clothes.bind(this);
    this.tools= this.tools.bind(this);
    this.livestock = this.livestock.bind(this);
    this.showAll = this.showAll.bind(this);
  }
  componentDidMount() {
    this.fetchSwaps();
  }

  fetchSwaps() {
    axios
    .get("")
    .then((response) => {
      this.setState({
        swaps: response.data,
      });
    });
  }

  food() {
    this.setState({
      status: 'food',
    });
  }

  clothes() {
    this.setState({
      status: 'clothes',
    });
  }

  tools() {
    this.setState({
      status: 'tools',
    });
  }

  livestock() {
    this.setState({
      status: 'livestock',
    });
  }

  showAll() {
    this.setState({
      status: 'All',
    });
  }

  render() {
    const { swaps, status } = this.state;
    return (
      <div className="SwapList">
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
        {swaps.filter((event) => {
              console.log(status);
              if (status === 'all') {
                return true;
              }
              if (status === 'food') {
                return event.category === 'Food';
              }
              if (status === 'clothes') {
                return event.category === 'Clothes';
              }
              if (status === 'tools') {
                return event.category === 'Tools';
              }
              if (status === 'livestock') {
                return event.category === 'Livestock';
              }
              return event.category === '';
            }).map((event) => {
              return (
                <li key={event.id}>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <SwapItem {...event} />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default SwapList;