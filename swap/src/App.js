import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import SwapList from './components/SwapList';
import Deposit from './components/Deposit';
import Account from './components/Account';
import Header from './components/Header';
import Footer from './components/Footer';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

function App() {
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
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          transform: 'translateY(-3rem) translateX(1.5rem)',
          outline: 'none'
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
