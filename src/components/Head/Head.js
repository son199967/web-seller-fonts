import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';

class Head extends Component {
    constructor(props) {
        super(props);
        this.state={
         sizeF:0,
         sizeD:0,
         search:null
        }

      }
      componentDidMount(){
          this.getCartDone()
      }
      handleCChange = (e,name) => {
        this.setState({
            [name]:e.target.value,
        });
    }
    checkLoginredicecrTocart=() => {
        if(localStorage.getItem(ACCESS_TOKEN_NAME)==="null"|| localStorage.getItem(ACCESS_TOKEN_NAME)===null){
           return;
        }
        return (<div>
                            <a href="#" onClick={() =>this.redirectToCart()}>
                                <i className="fa fa-shopping-cart"></i>
                                <span>Giỏ Hàng</span>
                             <div className="qty">{this.state.sizeF}</div>
                            </a>
                        </div>)
    }

    getCartDone = async () => {
       
        const sizeD = await axios.get(API_BASE_URL+'/cart/getCartDone',{ headers: {
         authorization: localStorage.getItem(ACCESS_TOKEN_NAME)
        }})
            .then(function (response) {
                if(response.status === 200){
                    console.log("size",response.data.length)
                  return response.data.length
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        const sizeF = await axios.get(API_BASE_URL+'/cart/getCartFuture',{ headers: {
                authorization: localStorage.getItem(ACCESS_TOKEN_NAME)
               }})
                   .then(function (response) {
                       if(response.status === 200){
                           console.log("sizeF",response.data.cartItems.length)
                         return response.data.cartItems.length
                       }
                   })
                   .catch(function (error) {
                       console.log(error);
                   });
                   this.setState({
                       sizeF:sizeF,
                       sizeD:sizeD
                   })
        
    }
    redirectToHome = () => {
        this.props.history.push("/")
    }
    redirectToOrder = () => {
        const searchX=this.state.search;
        console.log("seacrch",searchX);
        this.props.history.push(`/product/${searchX}`);
    }
    redirectToCart = () => {
        this.props.history.push("/cart");
    
    }
render() {
    console.log("size",this.state.sizeF)
 return(
    <div id="header">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="header-logo">
                        <a href="#" className="logo">
                            <img src="./img/logo.png" onClick={this.redirectToHome} alt=""></img>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="header-search">
                        <form>
                            <select className="input-select">
                                <option value="0">All Categories</option>
                                <option value="1">Category 01</option>
                                <option value="1">Category 02</option>
                            </select>
                            <input className="input" placeholder="Search here" value={this.state.search} onChange={(e) =>this.handleCChange(e,"search")}></input>
                            <button className="search-btn" value="submit" onClick={() =>this.redirectToOrder()}>Search</button>
                        </form>
                    </div>
                </div>
            
                <div className="col-md-3 clearfix">
                    <div className="header-ctn">
                    {this.checkLoginredicecrTocart()}
                        
                        {/* <div>
                            <a href="#">
                                <i class="fa fa-heart-o"></i>
                                <span>Your Cart</span>
                             <div class="qty">{this.state.sizeF}</div>
                            </a>
                        </div> */}
                    
                        {/* <div class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <i class="fa fa-shopping-cart"></i>
                                <span>Your Cart</span>
                            <div class="qty">{}</div>
                            </a>
                            <div class="cart-dropdown">
                                <div class="cart-list">
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product01.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price"><span class="qty">1x</span>$980.00</h4>
                                        </div>
                                        <button class="delete"><i class="fa fa-close"></i></button>
                                    </div>

                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product02.png" alt=""></img>
                                        </div>
                                        <div class="product-body">
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price"><span class="qty">3x</span>$980.00</h4>
                                        </div>
                                        <button class="delete"><i class="fa fa-close"></i></button>
                                    </div>
                                </div>
                                <div class="cart-summary">
                                    <small>3 Item(s) selected</small>
                                    <h5>SUBTOTAL: $2940.00</h5>
                                </div>
                                <div class="cart-btns">
                                    <a href="#">View Cart</a>
                                    <a href="#">Checkout  <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                 */}
                        <div className="menu-toggle">
                            <a href="#">
                                <i className="fa fa-bars"></i>
                                <span>Menu</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 )
}
}
export default withRouter(Head);