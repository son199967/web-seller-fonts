import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Head from './components/Head/Head';

import Login from './components/LoginForm/Login';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/Home/Home';
import Cart from './components/Home/Cart';
import MyAccount from './components/Home/MyAccount'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AlertComponent from './components/AlertComponent/AlertComponent';
function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
    <div className="App">
      <Header title={title}/>
      <Head />
        <div >
          <Switch>
          <Route path="/cart" component={Cart} >
             <Cart />
          </Route>   
            <Route path="/register" component={RegistrationForm}>
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login" component={Login}>
              <Login showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/myaccount" component={MyAccount}>
              <MyAccount showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/" component={Home}>
              <Home/>
            </Route>

          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
    </div>
    </Router>
  );
}

export default App;
