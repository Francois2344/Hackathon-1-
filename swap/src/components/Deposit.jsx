import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  depo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 40%;
  }
  .yourProduct {
    padding: 30px;
  }

  .productdepo {
    display: flex;
    justify-content: column;
    align-items: center;
  }

  select {
    width: 80%;
    text-align: center;
    align-self: center;
  }
  input {
    display: flex;
    height: 30%;
    width: 100%;
    border: 2px solid #cb4435;
  }
  .myButton {
    box-shadow: inset 0px 1px 0px -37px #cf866c;
    background-color: #cb4435;
    border-radius: 3px;
    border: 1px solid #942911;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #854629;
    margin-top: 20px;
  }
  .myButton:hover {
    background-color: #bc3315;
  }
  .myButton:active {
    position: relative;
    top: 1px;
  }
`;

function Deposit() {
  const [stuff, setStuff] = React.useState(
    JSON.parse(localStorage.getItem("stuff"))
  );
  const [form, setForm] = React.useState({
    category: "",
    name: "",
    location: "",
    quantity: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    form.id = stuff.length + 1;
    stuff.push(form);
    localStorage.setItem("stuff", JSON.stringify(stuff));
    console.log(JSON.parse(localStorage.getItem("stuff")));
  };

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <DIV>
      <div className="deposit">
        <depo onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="your-deposit">Your Deposit</label>
          <img
            className="yourProduct"
            src="https://via.placeholder.com/150"
            alt=""
          />
          <label htmlFor="category">
            Category
            <select
              onChange={(e) => handleChange(e)}
              name="category"
              id="category"
            >
              <option value="">Select your category</option>
              <option value="Food">Food</option>
              <option value="Clothes">Clothes</option>
              <option value="Tools">Tools</option>
              <option value="Livestock">Livestock</option>
            </select>
          </label>
          <label htmlFor="name">
            Product
            <select
              onChange={(e) => handleChange(e)}
              className="productdepo"
              name="name"
              id="name"
            >
              <option value="">Select your product</option>
              <option value="RED WINE">RED WINE</option>
              <option value="QUAIL EGGS">QUAIL EGGS</option>
              <option value="BOAR">BOAR</option>
              <option value="ARMOUR">ARMOUR</option>
              <option value="SICKLE">SICKLE</option>
              <option value="GRINDING WHEEL">GRINDING WHEEL</option>
              <option value="HORSES">HORSES</option>
              <option value="DRESS">DRESS</option>
              <option value="PAIR OF SANDALS">PAIR OF SANDALS</option>
              <option value="CAP">CAP</option>
              <option value="POTATOES">POTATOES</option>
              <option value="PORK">PORK</option>
            </select>
          </label>
          <div className="productdepo">
            <label htmlFor="">Quantity</label>
            <input
              type="number"
              name="quantity"
              min="1"
              max="300"
              onChange={(e) => handleChange(e)}
            />
            <button className="myButton" onClick={handleSubmit}>
              Troc
            </button>
          </div>
        </depo>
      </div>
    </DIV>
  );
}
export default Deposit;
