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
            <button type="button" onClick={this.activitytoshare}>
              Activité à partager
            </button>
            <button type="button" onClick={this.exhibition}>
              Expositions
            </button>
            <button type="button" onClick={this.theater}>
              Théatre
            </button>
            <button type="button" onClick={this.game}>
              Jeu
            </button>
            <button type="button" onClick={this.visit}>
              Visite
            </button>
            <button type="button" onClick={this.film}>
              Film / Projection
            </button>
            <button type="button" onClick={this.conference}>
              Conférence
            </button>
            <button type="button" onClick={this.meeting}>
              Rencontre
            </button>
            <button type="button" onClick={this.showAll}>
              Tous
            </button>
          </div>
        <ul>
          {this.state.swaps
            .filter((swap) => {
              if (this.state.swapDisplayed === true) {
                return swap;
              }
              return true;
            })
            .map((swap) => {
              return (
                <SwapItem
                  key={swap.id} {...swap}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

export default SwapList;