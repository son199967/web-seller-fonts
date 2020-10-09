import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("datax :" + this.props.newProduct.productName);
    const listItems = this.props.newProduct.map((a) =>
      <div class="product col-md-3">
        <div class="product-img">
          <img src={a.imageProduct} alt=""></img>
          <div class="product-label">
            <span class="sale">-30%</span>
            <span class="new">NEW</span>
          </div>
        </div>
        <div class="product-body">
          <p class="product-category">Category</p>
          <h3 class="product-name"><a href="#">{a.productName}</a></h3>
          <h4 class="product-price">{a.prices.unitPrice} <del class="product-old-price">{a.prices.unitPrice}</del></h4>
          <div class="product-rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
          <div class="product-btns">
            <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
            <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
            <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
          </div>
        </div>
        <div class="add-to-cart">
          <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
        </div>
      </div>
    );
    return (
      <div class="col-md-12">
        <div class="row">
          <div class="products-tabs">
            <div id="tab1" class="tab-pane active">
              <div class="products-slick" data-nav="#slick-nav-1">
                {listItems}
                <div id="slick-nav-1" class="products-slick-nav"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(Product);