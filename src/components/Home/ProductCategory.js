import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
import Pagination from "react-js-pagination";
class ProductCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            provider:this.props.match.params.provider,
            provideType:this.props.match.params.provideType,
            branch:[],
            activePage: 0,
            itemsCountPerPage: 12,
            totalItemsCount: 0,
            pageRangeDisplayed: 5,
            productType:this.props.match.params.category,
            search:this.props.match.params.search,
            product: [
                {
                    id: null, productName: "", productInfo: [], productType: "", imageProduct: "", providerName: "",
                    prices: { unitPrice: null },
                    promotions: [{ amount: null }],
                    productDetail: null
                }
            ],
            productTop: [
                {
                    id: null, productName: "", productInfo: [], productType: "", imageProduct: "", providerName: "",
                    prices: { unitPrice: null },
                    promotions: [{ amount: null }],
                    productDetail: null
                }
            ],
        }
    }
    componentDidMount() {
        this.getAllProduction();
        this.getAllBranch();
        console.log("da1")
    }
    sendData(a) {
        console.log("aa" + a);
        this.props.history.push(`/detail/${a}`);
    }
    clickButomhh=(s)=>{
        this.setState({
            provider:s,
        })
        this.getAllProduction();
    }


    getAllProduction = async () => {
        let product=null
        if(this.props.match.params.search===undefined){
         product = await axios.get(API_BASE_URL + `/product/getProductTag?page=0&size=${this.state.itemsCountPerPage}&&provider=${this.state.provider}&&productType=${this.props.match.params.provideType}`)
            .then(function (response) {
                console.log("response:", response.data);
                if (response.status === 200) {
                    return response.data.content
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }else{
            product = await axios.get(API_BASE_URL + `/product/smartSearch?search=${this.props.match.params.search}`)
            .then(function (response) {
                console.log("responseKK:", response.data);
                if (response.status === 200) {
                    return response.data
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
  
        const productTop = await axios.get(API_BASE_URL + "/product/getProductStatus?page=0&size=6&&status=1")
            .then(function (response) {
                console.log("response:", response.data);
                if (response.status === 200) {
                    return response.data
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({ 
            product: product,
            totalItemsCount:product.totalElements,
            productTop: productTop.content
         })
    }
    getAllBranch= async() =>{
        console.log("0001",this.state.provideType)
        console.log("0002",this.state.provider)
        const branch = await axios.get(API_BASE_URL + `/product/getAllBranch?provider=${this.state.provider}&&type=${this.state.provideType}`)
        .then(function (response) {
           console.log("0000",response.data)
            if (response.status === 200) {
                return response.data
            }
        })
        .catch(function (error) {
            console.log(error);
        });
     console.log("branck",branch)
    this.setState({branch})
    }
    
    handlePageChange = async(pageNumber)=> {
        
        const cate = this.props.match.params.category
        const product = await axios.get(API_BASE_URL + `/product/getProductCate?cate=${cate}&&page=${pageNumber}&size=${this.state.itemsCountPerPage}&provider=${this.state.provider}`)
            .then(function (response) {
                console.log("response:", response.data);
                if (response.status === 200) {
                    return response.data
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        this.setState({ 
            product: product.content,
            totalItemsCount:product.totalElements
         })
         
      }
    render() {
        const category = this.state.category
        console.log("Pro",this.state.product)
        const listProduct = this.state.product.map((a) =>
            <div class="col-md-4 col-xs-6">
                <div class="product">
                    <div class="product-img">
                        <img src={a.imageProduct} alt="" onClick={() => this.sendData(a.id)} />
                        <div class="product-label">
                            <span class="sale">-30%</span>
                            <span class="new">NEW</span>
                        </div>
                    </div>
                    <div class="product-body">
                        <div class="product-rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <h3 class="product-name"><a href="#">{a.productName}</a></h3>
                        <h4 class="product-price">{a.prices.unitPrice} đ<del class="product-old-price">{a.prices.unitPrice}đ</del></h4>
                    </div>
                    
                </div>
            </div>
        )
        
        const branchList=this.state.branch.map((s) =>
        <div class="input-checkbox">
        <input type="button" onClick={() => this.clickButomhh(s)}/>
        <label for="brand-1">
            <span></span>
   {s}
    <small>(578)</small>
        </label>
    </div>
        )
        const advantis = this.state.productTop.map((a) =>
            <div class="product-widget">
                <div class="product-img" onClick={() => this.sendData(a.id)}>
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
                                       
                                       {branchList}
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
                                <div className="col-12">
                                    <Pagination style={{ float: "right" }}
                                        activePage={this.state.activePage}
                                        itemsCountPerPage={this.state.itemsCountPerPage}
                                        totalItemsCount={this.state.totalItemsCount}
                                        pageRangeDisplayed={5}
                                        onChange={this.handlePageChange}
                                        itemClass="page-item"
                                        linkClass="page-link"
                                    />
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