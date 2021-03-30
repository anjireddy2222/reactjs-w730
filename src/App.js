import logo from './logo.svg';
import './App.css';
import Nav from  './components/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Singup';
import Feed from './components/Feed';


function App() {
  return (
    <>
<BrowserRouter>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <Nav />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/feed" component={Feed} />
      </Switch>
        </div>
      </div>
    </div>
</BrowserRouter>
    
    </>
  );
}

export default App;

