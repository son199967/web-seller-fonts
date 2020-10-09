import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
class CateDete extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="row p-12 ml-5">
        <div class="col-md-4 col-xs-6">
						<div class="shop">
							<div class="shop-img">
								<img src="./img/shop03.png" alt=""></img>
							</div>
							<div class="shop-body">
								<h3>Accessories Collection</h3>
								<a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
				</div>
        <div class="col-md-4 col-xs-6">
						<div class="shop">
							<div class="shop-img">
								<img src="./img/shop03.png" alt=""></img>
							</div>
							<div class="shop-body">
								<h3>Accessories Collection</h3>
								<a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
          <div class="col-md-4 col-xs-6">
						<div class="shop">
							<div class="shop-img">
								<img src="../public/img/shop03.png" alt=""></img>
							</div>
							<div class="shop-body">
								<h3>Cameras Collection</h3>
								<a href="#" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
      </div>
    )
  }
}

export default withRouter(CateDete);