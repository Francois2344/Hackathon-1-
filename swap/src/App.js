import React from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SwapList from "./components/SwapList";
import Deposit from "./components/Deposit";
import Account from "./components/Account";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalList: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  getApi() {
    axios
      .get(
        "https://raw.githubusercontent.com/Francois2344/hackathon1/main/swap/db.json"
      )
      .then((response) => {
        localStorage.setItem("stuff", JSON.stringify(response.data));
      });
  }

  increment() {
    
    this.setState({
      totalList: this.state.totalList + 1,
    });
}

decrement() {
    this.setState({
      totalList: this.state.totalList - 1,
    });
}

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/SwapList">
              <SwapList totalList={this.state.totalList} increment={this.increment} decrement={this.decrement}/>
              <ScrollUpButton
                style={{
                  backgroundColor: "none",
                  width: "40px",
                  height: "40px",
                  outline: "none",
                  transform: "translateY(-3rem) translateX(1.5rem)",
                }}
              />
            </Route>
            <Route path="/Deposit">
              <Deposit />
            </Route>
            <Route path="/Account">
              <Account />
            </Route>
          </Switch>
          <Footer totalList={this.state.totalList}/>
        </div>
      </Router>
    );
  }
}

export default App;
