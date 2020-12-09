import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./pages/login"
import Signup from "./pages/signup"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
