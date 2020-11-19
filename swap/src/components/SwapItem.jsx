import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DIV = styled.div`

display: flex;
flex-direction: column;
text-align: left;
margin: 2rem;
padding: 1em;
width: auto;
height: auto;
font-family: Roboto, sans-serif;
background-color: rgba(203, 67, 53);
border-radius: 10px;
box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
font-size: 0.75em;

.category {
  color: black;
}

span,
h3,
h4 {
  font-size: 12px;
  margin: 0.5rem;
}

.swapPhoto {
  margin: auto;
  max-width: 15rem;
  height: auto;
}

.swapInformation {
  flex-wrap: wrap;
  margin: auto;
}

.addToCart {
  display: flex;
  justify-content: center;
}

input {
  font-size: 1rem;
}

.form-input {
  width: 2.5rem;
  height: 2rem;
  background-size : 1rem;
}

button {
  width: auto;
  text-align: center;
  margin: 1rem;
  border-radius: 15px;
}

.swapDetail {
  width: 10rem;
  font-size: 1rem;
  text-align: center;
  margin-top: 0.5rem;
}

@media screen and (min-width: 768px) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 1rem;
  max-width: 30rem;
  height: auto;
  background-color: rgba(203, 67, 53);
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 0.75em;

  .swapPhoto {
    width: 9rem;
    height: auto;
  }
  .swapInformation {
    width: 10rem;
    height: auto;
    margin: 1rem;
  }
  button {
    width: auto;
    text-align: center;
    margin: 1rem;
    border-radius: 15px;

  .swapDetail {
    width: 2rem;
    font-size: 1rem;
    text-align: center;
    margin-top: 0.5rem;
  }
}
`;

class SwapItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdded: true,
    };
  }
  addToCart() {
    this.setState({
      isAdded: !this.state.isAdded,
    });
  }
  render() {
    const { name, image, category, location, quantity, id } = this.props;
    return (
      <div>
        <DIV>
          <img className="swapPhoto" src={image} alt={name} />
          <div className="swapInformation">
            <div className="sawpCategory">
              <h3 className="category-title"> Category : {category !== undefined ? category : 'Divers'}</h3>
              <h3 className="name">{name}</h3>
            </div>
            <div className="swapLocation">
              <h4 className="location">Quantity : {quantity}</h4>
            </div>
            <div className="swapLocation">
              <h4 className="location">Where : {location}</h4>
            </div>
          </div>
          <div className="addToCart">
          <input
                type="number"
                className="form-input"
                name="Total"
                id="total"
                max= {quantity}
                min="0"
              />
          <button onClick={(e) => {this.addToCart()}}>
            {this.state.isAdded ? "Swap" : "Remove"}
          </button>
          </div>
        </DIV>
      </div>
    );
  }
}

SwapItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, 
  category: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired

};

export default SwapItem;