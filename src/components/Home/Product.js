import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Product extends Component {
  constructor(props) {
    super(props);
  }
  sendData (a) {
    console.log("aa"+a);
    this.props.history.push(`/detail/${a}`);
    }
    addProductToCart(id){
    
    }
      callAPIAdd = async (a) => {
        const user = await axios.post(API_BASE_URL+'/cart/createCart',{ headers: {
         authorization: localStorage.getItem(ACCESS_TOKEN_NAME)
        }})
            .then(function (response) {
                if(response.status === 200){
                  alert("Thêm Thành Công Sản Phẩm giỏ hàng")
                  return null
                }
                else {
                  alert("Đã có lỗi xảy ra");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            return null
    }    
    
  

  render() {
    console.log("dataxx:" , this.props.newProduct);
    const listItems = this.props.newProduct.map((a) =>
       
      <div className="product col-3" >
        <div className="product-img" onClick={() =>this.sendData(a.id)} >
          <img src={a.imageProduct} alt=""></img>
          <div className="product-label">
            <span className="sale">-30%</span>
            <span className="new">NEW</span>
          </div>
        </div>
        <div className="product-body">
        <div className="product-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <h3 className="product-name"><a href="#">{a.productName}</a></h3>
          <h4 className="product-price">{a.prices[0].unitPrice}đ <del class="product-old-price">{a.prices[0].unitPrice}đ</del></h4>
        </div>
      </div>
    );
    return (
      <div className="col-md-12">
        <div className="row">
          <div className="products-tabs">
            <div id="tab1" className="tab-pane active">
              <div className="products-slick row" data-nav="#slick-nav-1">
                {listItems}
                <div id="slick-nav-1" className="products-slick-nav"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(Product);