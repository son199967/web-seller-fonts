import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
class ProductCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newProduct: [
                {
                    id: null, productName: "", productInfo: "", productType: "", imageProduct: "", providerName: "",
                    prices: { unitPrice: null },
                    promotions: [{ amount: null }],
                    productDetail: null
                }
            ],
        }
    }
    componentWillMount() {
        this.getAllProduction();
        console.log("da1")
    }
    sendData (a) {
        console.log("aa"+a);
        this.props.history.push(`/detail/${a}`);
        }


    getAllProduction = async () => {


        const newProduct = await axios.get(API_BASE_URL + '/product/getAllProduct')
            .then(function (response) {
                console.log("response:", response.data);
                if (response.status === 200) {
                    return response.data
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        const topProduct = await axios.get(API_BASE_URL + '/product/getAllProduct')
            .then(function (response) {
                console.log("response:", response.data);
                if (response.status === 200) {
                    return response.data
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({ newProduct })
    }
    render() {
        const category = this.props.match.params.category
        const listProduct = this.state.newProduct.map((a) =>
            <div class="col-md-4 col-xs-6">
                <div class="product">
                    <div class="product-img">
                        <img src={a.imageProduct} alt="" onClick={() =>this.sendData(a.id)}/>
                        <div class="product-label">
                            <span class="sale">-30%</span>
                            <span class="new">NEW</span>
                        </div>
                    </div>
                    <div class="product-body">
                        <p class="product-category">Category</p>
                        <div class="product-rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <h3 class="product-name"><a href="#">{a.productName}</a></h3>
                        <h4 class="product-price">{a.prices.unitPrice} đ<del class="product-old-price">{a.prices.unitPrice}đ</del></h4>
                        
                        {/* <div class="product-btns">
                            <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
                            <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
                            <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
                        </div> */}
                    </div>
                    {/* <div class="add-to-cart">
                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
                    </div> */}
                </div>
            </div>
           )
        const advantis=this.state.newProduct.map((a) =>
                                <div class="product-widget">
                                        <div class="product-img" onClick={() =>this.sendData(a.id)}>
                                            <img src={a.imageProduct} alt="" />
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Category</p>
                                            <h3 class="product-name"><a href="#">{a.productName}</a></h3>
                                            <h4 class="product-price">{a.prices.unitPrice} đ <del class="product-old-price">{a.prices.unitPrice} đ</del></h4>
                                        </div>
                                    </div>

        
        )
        return (
            <div class="container">
                <div class="section">

                    <div class="container">

                        <div class="row">

                            <div id="aside" class="col-md-3">

                                <div class="aside">
                                    <h3 class="aside-title">Categories</h3>
                                    <div class="checkbox-filter">

                                        <div class="input-checkbox">
                                            <input type="checkbox" id="category-1" />
                                            <label for="category-1">
                                                <span></span>
										Laptops
										<small>(120)</small>
                                            </label>
                                        </div>

                                        <div class="input-checkbox">
                                            <input type="checkbox" id="category-2" />
                                            <label for="category-2">
                                                <span></span>
										Smartphones
										<small>(740)</small>
                                            </label>
                                        </div>

                                        <div class="input-checkbox">
                                            <input type="checkbox" id="category-3" />
                                            <label for="category-3">
                                                <span></span>
										Cameras
										<small>(1450)</small>
                                            </label>
                                        </div>

                                        <div class="input-checkbox">
                                            <input type="checkbox" id="category-4" />
                                            <label for="category-4">
                                                <span></span>
										Accessories
										<small>(578)</small>
                                            </label>
                                        </div>

                                        <div class="input-checkbox">
                                            <input type="checkbox" id="category-5" />
                                            <label for="category-5">
                                                <span></span>
										Laptops
										<small>(120)</small>
                                            </label>
                                        </div>

                                        <div class="input-checkbox">
                                            <input type="checkbox" id="category-6" />
                                            <label for="category-6">
                                                <span></span>
										Smartphones
										<small>(740)</small>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="aside">
                                    <h3 class="aside-title">Price</h3>
                                    <div class="price-filter">
                                        <div id="price-slider"></div>
                                        <div class="input-number price-min">
                                            <input id="price-min" type="number" />
                                            <span class="qty-up">+</span>
                                            <span class="qty-down">-</span>
                                        </div>
                                        <span>-</span>
                                        <div class="input-number price-max">
                                            <input id="price-max" type="number" />
                                            <span class="qty-up">+</span>
                                            <span class="qty-down">-</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="aside">
                                    <h3 class="aside-title">Brand</h3>
                                    <div class="checkbox-filter">
                                        <div class="input-checkbox">
                                            <input type="checkbox" id="brand-1" />
                                            <label for="brand-1">
                                                <span></span>
										SAMSUNG
										<small>(578)</small>
                                            </label>
                                        </div>
                                        <div class="input-checkbox">
                                            <input type="checkbox" id="brand-2" />
                                            <label for="brand-2">
                                                <span></span>
										LG
										<small>(125)</small>
                                            </label>
                                        </div>
                                        <div class="input-checkbox">
                                            <input type="checkbox" id="brand-3" />
                                            <label for="brand-3">
                                                <span></span>
										SONY
										<small>(755)</small>
                                            </label>
                                        </div>
                                        <div class="input-checkbox">
                                            <input type="checkbox" id="brand-4" />
                                            <label for="brand-4">
                                                <span></span>
										SAMSUNG
										<small>(578)</small>
                                            </label>
                                        </div>
                                        <div class="input-checkbox">
                                            <input type="checkbox" id="brand-5" />
                                            <label for="brand-5">
                                                <span></span>
										LG
										<small>(125)</small>
                                            </label>
                                        </div>
                                        <div class="input-checkbox">
                                            <input type="checkbox" id="brand-6" />
                                            <label for="brand-6">
                                                <span></span>
										SONY
										<small>(755)</small>
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                <div class="aside">
                                    <h3 class="aside-title">Top selling</h3>     
                                   {advantis}
                                </div>

                            </div>

                            <div id="store" class="col-md-9">
                                <div class="store-filter clearfix">
                                    <div class="store-sort">
                                        <label>
                                            Sort By:
									<select class="input-select">
                                                <option value="0">Popular</option>
                                                <option value="1">Position</option>
                                            </select>
                                        </label>

                                        <label>
                                            Show:
									<select class="input-select">
                                                <option value="0">20</option>
                                                <option value="1">50</option>
                                            </select>
                                        </label>
                                    </div>
                                    <ul class="store-grid">
                                        <li class="active"><i class="fa fa-th"></i></li>
                                        <li><a href="#"><i class="fa fa-th-list"></i></a></li>
                                    </ul>
                                </div>

                                <div class="row">
                                    {listProduct}
                                </div>
                                <div class="store-filter clearfix">
                                    <span class="store-qty">Showing 20-100 products</span>
                                    <ul class="store-pagination">
                                        <li class="active">1</li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(ProductCategory)