import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
class ProductDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <h1>Prodution detail</h1>
    )
  }
}

export default withRouter(ProductDetail);