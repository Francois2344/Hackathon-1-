import React from "react";
import axios from "axios";
import SwapItem from "./SwapItem";

class SwapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swaps: [],
      status: 'drink',
    };
    this.drink = this.drink.bind(this);
    this.meat = this.meat.bind(this);
    this.fish = this.fish.bind(this);
    this.cereals = this.cereals.bind(this);
    this.fruits = this.fruits.bind(this);
    this.vegetables = this.vegetables.bind(this);
    this.tools = this.tools.bind(this);
    this.wood = this.wood.bind(this);
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

  drink() {
    this.setState({
      status: 'drink',
    });
  }

  meat() {
    this.setState({
      status: 'meat',
    });
  }

  fish() {
    this.setState({
      status: 'fish',
    });
  }

  cereals() {
    this.setState({
      status: 'cereals',
    });
  }

  fruits() {
    this.setState({
      status: 'fruits',
    });
  }

  vegetables() {
    this.setState({
      status: 'vegetables',
    });
  }

  tools() {
    this.setState({
      status: 'tools',
    });
  }

  wood() {
    this.setState({
      status: 'wood',
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
            <button type="button" onClick={this.drink}>
              Drink
            </button>
            <button type="button" onClick={this.meat}>
              Meat
            </button>
            <button type="button" onClick={this.fish}>
              Fish
            </button>
            <button type="button" onClick={this.cereals}>
              Cereals
            </button>
            <button type="button" onClick={this.fruits}>
              Fruits
            </button>
            <button type="button" onClick={this.vegetables}>
              Vegetables
            </button>
            <button type="button" onClick={this.tools}>
              Tools
            </button>
            <button type="button" onClick={this.wood}>
              Wood
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
              if (status === 'drink') {
                return event.category === 'Drink';
              }
              if (status === 'meat') {
                return event.category === 'Meat';
              }
              if (status === 'fish') {
                return event.category === 'Fish';
              }
              if (status === 'cereals') {
                return event.category === 'Cereals';
              }
              if (status === 'fruits') {
                return event.category === 'Fruits';
              }
              if (status === 'vegetables') {
                return event.category === 'Vegetables';
              }
              if (status === 'tools') {
                return event.category === 'Tools';
              }
              if (status === 'wood') {
                return event.category === 'Wood';
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