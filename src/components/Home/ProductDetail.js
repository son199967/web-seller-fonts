import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
import ReactImageMagnify from 'react-image-magnify';
class ProductDetail extends Component {
  constructor(props) {
	super(props);
	this.state = {
		product :{
		 id:null, 
		 productName:"",
		 productInfo:"", 
		 productType:"", 
		 code:"",
		 imageProduct:"",
		  providerName:"", 
		 prices:
			{
				unitPrice:null,
				wholePrice:null,
				importPrice:null
			}
		 , 
		 promotions:[
			 {amount:null}
		 ], 
		 productDetail :{
			content:"",
			discription:"",
			color:[],
			size:[],
			images:[]
		}
		},
		cartIteam:{
			id:null,
			productId:this.props.match.params.id,
			amount:1,
			size:null,
			color:null,
		} 

       

	  };
  }
  handleChangeObj = (e,name) => {
	  console.log("itea:",e.target.value)
	  const {cartIteam} =this.state
	this.setState({
      cartIteam:{
		  ...cartIteam,
		  [name]:e.target.value
	  }
	});
}
  handleChange = (e,name) => {
	this.setState({
		[name]:e.target.value,
	});
}
addProductToCart = () => {
	console.log("ahahah",localStorage.getItem(ACCESS_TOKEN_NAME))
	if (localStorage.getItem(ACCESS_TOKEN_NAME)==="null" || localStorage.getItem(ACCESS_TOKEN_NAME)===null) {
		alert("Bạn Phải Đăng Nhập")
		this.props.history.push("/login")
	}else{
	axios.post(API_BASE_URL+'/cart/createCart/',this.state.cartIteam,{ headers: {
		Authorization: localStorage.getItem(ACCESS_TOKEN_NAME)
	   }})
	  .then( function(response) {
		  if(response.status === 200){
		   alert("Thêm Thành công sản phẩm giỏ hàng")
		  }else {
			  alert("Có lỗi xảy ra")
		  }
	  })
	  .catch(function (error) {
		  console.log(error);
	  });
	}
	  
  }

getProductById = async() => {
  const product = await axios.get(API_BASE_URL+'/product/getProductById/'+this.props.match.params.id)
	.then( function(response) {
		if(response.status === 200){
		console.log("ashajs",response.data)
         return response.data;
		}
		else {
			alert("Có lỗi xảy ra")
		}
	})
	.catch(function (error) {
		console.log(error);
	});
	console.log("product",product)
	this.setState({product})
}

 componentDidMount = () => {
        this.getProductById();
 }
  render() {
	  console.log("GGG",this.state.product.productDetail)
	  const size = this.state.product.productDetail.size.map((s) =>
	  <option value={s}>{s}</option>
	  ) 
	  const color = this.state.product.productDetail.color.map((s) =>
	  <option value={s}>{s}</option>
	  ) 
	  const images = this.state.product.productDetail.images.map((s) =>
	  <div className="product-preview">
	  <img src={s} alt="" />
         </div>
	  )
	  console.log("cartItem",this.state.cartIteam)
    return (
      <div className="section">
			<div className="container">
					<div className="row">

					<div className="col-md-5 col-md-push-2">
						<div id="product-main-img">
							<div className="product-preview">
								<img src={this.state.product.imageProduct} alt="" />
							</div>
							{images}
						</div>
					</div>
					<div className="col-md-2  col-md-pull-5">
						<div id="product-imgs">
						    <div className="product-preview">
								<img src={this.state.product.imageProduct} alt="" />
							</div>
							{images}
						</div>
					</div>
					<div className="col-md-5">
						<div className="product-details">
             	<h2 className="product-name">{this.state.product.productName}</h2>
							<div>
								<div className="product-rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o"></i>
								</div>
								<a  href="#" className="review-link">10 Review(s) | Add your review</a>
							</div>
							<div>
								<h3 className="product-price">{this.state.product.prices.unitPrice} VND <del className="product-old-price">{this.state.product.prices.unitPrice} VND</del></h3>
								<span className="product-available">In Stock</span>
							</div>
                         	<p>{this.state.product.productDetail.content}</p>

							<div className="product-options">
								<label>
									Size
									<select className="input-select" value={this.state.cartIteam.size} onChange={(e) =>this.handleChangeObj(e,"size")}>
										{size}
									</select>
								</label>
								<label>
								<select className="input-select" value={this.state.cartIteam.color} onChange={(e) => this.handleChangeObj(e,"color")}>
										{color}
									</select>
								</label>
							</div>

							<div className="add-to-cart">
								<div className="qty-label">
								AMOUNT
									<div className="input-number">
										<input type="number" value={this.state.cartIteam.amount} onChange={(e => this.handleChangeObj(e,"amount"))}></input>
										<span className="qty-up" >+</span>
										<span className="qty-down">-</span>
                    
									</div>
								</div>
								<button className="add-to-cart-btn" type="submit" onClick={() =>this.addProductToCart()}><i className="fa fa-shopping-cart"></i> add to cart</button>
							</div>

							<ul className="product-btns">
								<li><a href="./img/product08.png"><i className="fa fa-heart-o"></i> add to wishlist</a></li>
								<li><a href="./img/product08.png"><i className="fa fa-exchange"></i> add to compare</a></li>
							</ul>

							<ul className="product-links">
								<li>Category:</li>
								<li><a href="./img/product08.png">Headphones</a></li>
								<li><a href="./img/product08.png">Accessories</a></li>
							</ul>

							<ul className="product-links">
								<li>Share:</li>
								<li><a href="./img/product08.png"><i className="fa fa-facebook"></i></a></li>
								<li><a href="./img/product08.png"><i className="fa fa-twitter"></i></a></li>
								<li><a href="./img/product08.png"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="./img/product08.png"><i className="fa fa-envelope"></i></a></li>
							</ul>

						</div>
					</div>

					<div className="col-md-12">
						<div id="product-tab">
							<ul className="tab-nav">
								<li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
								<li><a data-toggle="tab" href="#tab2">Details</a></li>
								<li><a data-toggle="tab" href="#tab3">Reviews (3)</a></li>
							</ul>
							<div className="tab-content">
								<div id="tab1" className="tab-pane fade in active">
									<div className="row">
										<div className="col-md-12">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
								</div>
								<div id="tab2" className="tab-pane fade in">
									<div className="row">
										<div className="col-md-12">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
								</div>
								<div id="tab3" className="tab-pane fade in">
									<div className="row">
										<div className="col-md-3">
											<div id="rating">
												<div className="rating-avg">
													<span>4.5</span>
													<div className="rating-stars">
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star-o"></i>
													</div>
												</div>
												<ul className="rating">
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
														</div>
														<div class="rating-progress">
															{/* <div style="width: 80%;"></div> */}
														</div>
														<span class="sum">3</span>
													</li>
													<li>
														<div class="rating-stars">
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star-o"></i>
														</div>
														<div class="rating-progress">
															{/* <div style="width: 60%;"></div> */}
														</div>
														<span class="sum">2</span>
													</li>
													<li>
														<div class="rating-stars">
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star-o"></i>
															<i class="fa fa-star-o"></i>
														</div>
														<div class="rating-progress">
															<div></div>
														</div>
														<span class="sum">0</span>
													</li>
													<li>
														<div class="rating-stars">
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star-o"></i>
															<i class="fa fa-star-o"></i>
															<i class="fa fa-star-o"></i>
														</div>
														<div class="rating-progress">
															<div></div>
														</div>
														<span class="sum">0</span>
													</li>
													<li>
														<div class="rating-stars">
															<i class="fa fa-star"></i>
															<i class="fa fa-star-o"></i>
															<i class="fa fa-star-o"></i>
															<i class="fa fa-star-o"></i>
															<i class="fa fa-star-o"></i>
														</div>
														<div class="rating-progress">
															<div></div>
														</div>
														<span class="sum">0</span>
													</li>
												</ul>
											</div>
										</div>
										<div class="col-md-6">
											<div id="reviews">
												<ul class="reviews">
													<li>
														<div class="review-heading">
															<h5 class="name">John</h5>
															<p class="date">27 DEC 2018, 8:0 PM</p>
															<div class="review-rating">
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star-o empty"></i>
															</div>
														</div>
														<div class="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div class="review-heading">
															<h5 class="name">John</h5>
															<p class="date">27 DEC 2018, 8:0 PM</p>
															<div class="review-rating">
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star-o empty"></i>
															</div>
														</div>
														<div class="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div class="review-heading">
															<h5 class="name">John</h5>
															<p class="date">27 DEC 2018, 8:0 PM</p>
															<div class="review-rating">
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star-o empty"></i>
															</div>
														</div>
														<div class="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
												</ul>
												<ul class="reviews-pagination">
													<li class="active">1</li>
													<li><a href="./img/product08.png">2</a></li>
													<li><a href="./img/product08.png">3</a></li>
													<li><a href="./img/product08.png">4</a></li>
													<li><a href="./img/product08.png"><i class="fa fa-angle-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="col-md-3">
											<div id="review-form">
												<form class="review-form">
													<input class="input" type="text" placeholder="Your Name" />
													<input class="input" type="email" placeholder="Your Email" />
													<textarea class="input" placeholder="Your Review"></textarea>
													<div class="input-rating">
														<span>Your Rating: </span>
													
													</div>
													<button class="primary-btn">Submit</button>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
  }
}

export default withRouter(ProductDetail);