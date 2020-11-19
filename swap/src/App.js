<<<<<<< HEAD


=======
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import SwapList from './components/SwapList';
import Deposit from './components/Deposit';
import Account from './components/Account';
>>>>>>> c1f1ec0cfa517c9b503f24ec76feb7c62c5a595d

function App() {
  return (
    <Router>
      
    <div className="App">
<<<<<<< HEAD

=======
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/SwapList'>
        <SwapList />
      </Route>
      <Route path='/Deposit'>
        <Deposit />
      </Route>
      <Route path='/Account'>
        <Account />
      </Route>
      </Switch>
>>>>>>> c1f1ec0cfa517c9b503f24ec76feb7c62c5a595d
    </div>
    </Router>
    
  );
}

export default App;
