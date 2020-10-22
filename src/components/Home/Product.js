import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Pagination from "react-js-pagination";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
        itemsCountPerPage: 12,
        totalItemsCount: 0,
        pageRangeDisplayed: 5,
      newProduct: [
        {
          id:null,  productName:"",productInfo:"", productType:"", imageProduct:"", providerName:"", 
         prices:[  	{unitPrice:null}], 
         promotions:[{ amount:null} ], 
		 productDetail:null
        }
      ],
      
  }
}
componentDidMount(){
  this.getAllProduction();
}
handlePageChange = async(pageNumber)=> {
  const newProduct = await axios.get(API_BASE_URL + '/product/getAllProduct'+"?size="+this.state.itemsCountPerPage+"&page="+pageNumber)
  .then(function (response) {
    if (response.status === 200) {
      return response.data
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  this.setState({
    newProduct:newProduct.content,
    totalItemsCount:newProduct.totalElements,
  })
}
  getAllProduction = async() => {
   
    const newProduct =  await axios.get(API_BASE_URL + '/product/getAllProduct'+"?size="+this.state.itemsCountPerPage+"&page=0")
    .then(function (response) {
     
      if (response.status === 200) {
        return response.data
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log("responseMM:" , newProduct);
    this.setState({
      newProduct:newProduct.content,
      totalItemsCount:newProduct.totalElements,
    })
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
    console.log("dataxx:" , this.state.newProduct);
    const listItems = this.state.newProduct.map((a) =>
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
          <h4 className="product-price">{a.prices.unitPrice}đ <del class="product-old-price">{a.prices.unitPrice}đ</del></h4>
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
        <div className="row">

        <div className="col-12">
          <Pagination style ={{float: "right"}}
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

    )
  }
}

export default withRouter(Product);