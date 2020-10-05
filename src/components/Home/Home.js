import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProduct:[],
      topProduct:[],
      adsProduct:[]
    };
  }
  componentWillMount () {
    
    this.getAllProduction();
    console.log("da1")
  }

  
  getAllProduction = (e) => {
    console.log("aaa"+this.state.email+"bbb"+this.state.password);
    const payload={
        "email":this.state.email,
        "password":this.state.password,
    }
   
    var self = this;
    axios.get(API_BASE_URL+'/product/getAllProduct', payload)
        .then(function (response) {
          console.log("response:"+response);
            if(response.status === 200){
              response.data.map((a) => console.log(a.productName));
              self.setState({newProduct: response.data});
            }
            else if(response.code === 401){
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
render(){
  console.log("datax :"+this.state.newProduct);
  const listItems = this.state.newProduct.map((a) =>
  <div class="product md-col-1">
  <div class="product-img">
    <img src="./img/product01.png" alt=""></img>
    <div class="product-label">
      <span class="sale">-30%</span>
      <span class="new">NEW</span>
    </div>
  </div>
  <div class="product-body">
    <p class="product-category">Category</p>
<h3 class="product-name"><a href="#">{a.productName}</a></h3>
    <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
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
    return(
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

export default withRouter(Home);