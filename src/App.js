import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/LoginForm/Login';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/Home/Home';
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
        <div>
          <Switch>
            <Route path="/register" component={RegistrationForm}>
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login" component={Login}>
              <Login showError={updateErrorMessage} updateTitle={updateTitle}/>
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
