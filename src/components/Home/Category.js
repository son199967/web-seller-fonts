import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <nav class="navbar navbar-expand-sm bg-danger navbar-light">
      <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Hot Deals</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Categories</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Laptops</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Smartphones</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Cameras</a>
    </li>
  </ul>
  </nav>
    )
  }
}

export default withRouter(Category);