import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Head from './components/Head/Head';

import Login from './components/LoginForm/Login';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/Home/Home';
import Cart from './components/Home/Cart';
import MyAccount from './components/Home/MyAccount';
import Admin from './components/Admin/Admin';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

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
      
        <div >
          <Switch>
             <Route path="/cart" component={Cart} >
             <Header title={title}/>
             <Head />
             <Cart />
            </Route>   
            <Route path="/admin" component={Admin}>
              <Admin />
            </Route>
            <Route path="/register" component={RegistrationForm}>
            <Header title={title}/>
            <Head />
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login" component={Login}>
            <Header title={title}/>
            <Head />
              <Login showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/myaccount" component={MyAccount}>
            <Header title={title}/>
             <Head /> 
              <MyAccount showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/" component={Home}>
            <Header title={title}/>
            <Head />
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
