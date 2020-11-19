import React from "react";
import styled from "styled-components";

const DIV = styled.div`
 depo {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: auto;
 }
 .yourProduct {
     padding: 30px;
 }

 .productdepo {
     display:flex;
     justify-content: column;

 }

 select {
     width: 80%;
     text-align: center;
     align-self: center;
 }

`;

function Deposit() {
  const [form, setForm] = React.useState({
    product: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <label htmlFor="category">Category</label>
          <select name="category" id="category-select">
            <option value="">Select your category</option>
            <option value="Food">Food</option>
            <option value="Clothes">Clothes</option>
            <option value="Tools">Tools</option>
            <option value="Livestock">Livestock</option>
          </select>
          <div className="productdepo">
            <label htmlFor="product">Product</label>
            <input
              type="text"
              name="product"
              value={form.product}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="">Amount</label>
            <input
              type="number"
              name="amount"
              min="1"
              max="300"
              value={form.amount}
              onChange={(e) => handleChange(e)}
            />
            <button onClick={handleSubmit}>Troc</button>
          </div>
        </depo>
      </div>
    </DIV>
  );
}

export default Deposit;
