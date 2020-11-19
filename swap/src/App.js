import { useEffect } from "react";
import axios from "axios";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import SwapList from './components/SwapList';
import Deposit from './components/Deposit';
import Account from './components/Account';
import Header from './components/Header';
import Footer from './components/Footer';
import {TinyButton as ScrollUpButton} from 'react-scroll-up-button';


function App() {
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Francois2344/hackathon1/main/swap/db.json"
      )
      .then((response) => {
        localStorage.setItem("stuff", JSON.stringify(response.data));
      });
  }, []);
  return (
    <Router>
      
    <div className="App">
      <Header />
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/SwapList'>
        <SwapList />
        <ScrollUpButton 
        style={{
          backgroundColor: 'none',
<<<<<<< HEAD
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          transform: 'translateY(-3rem) translateX(1.5rem)',
          outline: 'none'
=======
          
          width: '40px',
          height: '40px',
          outline: 'none',
          transform: 'translateY(-3rem) translateX(1.5rem)'

>>>>>>> 492ac9bcb0b4b8d92014d9500a40dc90649135f1
        }}/>
      </Route>
      <Route path='/Deposit'>
        <Deposit />
      </Route>
      <Route path='/Account'>
        <Account />
      </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
