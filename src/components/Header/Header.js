import React from 'react';
import { withRouter } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from '../../constants/apiContants';
function Header(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    if(props.location.pathname === '/') {
        title = 'Welcome'
    }
    // function renderLogout() {
    //     if(props.location.pathname === '/home'){
    //         return(
    //             <div className="ml-auto">
    //                 <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
    //             </div>
    //         )
    //     }
    // }
    function loginForm() {
        props.history.push('/login')
	}
	function home() {
        props.history.push('/')
	}
	function register() {
        props.history.push('/register')
    }
    return(
        // <nav className="navbar navbar-dark bg-primary">
        //     <div className ="row col-12 d-flex justify-content-center text-white">
        //         <img src="https://anphat.com.vn/media/banner/24_Auga1b049b3db2563cb3aa46dc7d71b4ac7.jpg"></img>
        //     </div>
        //     <div className="row col-12 d-flex justify-content-center text-white">
        //         <span className="h3">{props.title || title}</span>
        //         {renderLogout()}
        //     </div>
        // </nav>
        <header>
            <div id="top-header">
				<div class="container">
					<ul class="header-links pull-left">
						<li><a href="#"><i class="fa fa-phone"></i> +021-95-51-84</a></li>
						<li><a href="#"><i class="fa fa-envelope-o"></i> email@email.com</a></li>
						<li><a href="#"><i class="fa fa-map-marker"></i> 1734 Stonecoal Road</a></li>
					</ul>
					<ul class="header-links pull-right">
						<li><a href="#" onClick={register}><i class="fa fa-sign-in"></i>Đăng Kí</a></li>
						<li><a href="#" onClick={loginForm}><i class="fa fa-user-o"></i> Đăng Nhập</a></li>
					</ul>
				</div>
			</div>
            <div id="header">
				<div class="container">
					
					<div class="row">
						<div class="col-md-3">
							<div class="header-logo">
								<a href="#" class="logo"  onClick={home}>
									<img src="./img/logo.png" alt=""></img>
								</a>
							</div>
						</div>
						<div class="col-md-6">
							<div class="header-search">
								<form>
									<select class="input-select">
										<option value="0">All Categories</option>
										<option value="1">Category 01</option>
										<option value="1">Category 02</option>
									</select>
									<input class="input" placeholder="Search here"></input>
									<button class="search-btn">Search</button>
								</form>
							</div>
						</div>
					
						<div class="col-md-3 clearfix">
							<div class="header-ctn">
							
								<div>
									<a href="#">
										<i class="fa fa-heart-o"></i>
										<span>Your Wishlist</span>
										<div class="qty">2</div>
									</a>
								</div>
							
								<div class="dropdown">
									<a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
										<i class="fa fa-shopping-cart"></i>
										<span>Your Cart</span>
										<div class="qty">3</div>
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
						
								<div class="menu-toggle">
									<a href="#">
										<i class="fa fa-bars"></i>
										<span>Menu</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </header>
    )
}
export default withRouter(Header);