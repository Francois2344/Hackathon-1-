import React from "react";
import axios from "axios";
import SwapItem from "./SwapItem";

class SwapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swaps: [],
      status: 'all',
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
    .get(`https://raw.githubusercontent.com/Francois2344/hackathon1/main/swap/db.json`)
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
      status: 'all',
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
                return event.category === 'food';
              }
              if (status === 'clothes') {
                return event.category === 'clothes';
              }
              if (status === 'tools') {
                return event.category === 'tools';
              }
              if (status === 'livestock') {
                return event.category === 'livestock';
              }
              return event.category === '';
            }).map((event) => {
              return (
                <li key={event.id}>
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