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
      <div class="col-md-12">
      <div class="section-title">
    <h3 class="title">{this.props.title}</h3>
        <div class="section-nav">
          <ul class="section-tab-nav tab-nav">
            <li class="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
            <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
            <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
            <li><a data-toggle="tab" href="#tab1">Accessories</a></li>
          </ul>
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(Category);