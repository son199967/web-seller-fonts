import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
import Product from '../../components/Home/Product';
import Category from '../../components/Home/Category';
import Head from '../../components/Head/Head';
import HotDeal from '../../components/Home/HotDeal';
import CategoryDetail from '../../components/Home/CategoryDetail';
import CateDete from '../../components/Home/CateDete';
import ProductDetail from './ProductDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProduct: [],
      topProduct: [],
      adsProduct: [],
      productDetailCheck: false,
      productDetail: [],
    };
  }
  componentWillMount() {
    this.getAllProduction();
    console.log("da1")
  }


  getAllProduction = (e) => {
    console.log("aaa" + this.state.email + "bbb" + this.state.password);
    const payload = {
      "email": this.state.email,
      "password": this.state.password,
    }

    var self = this;
    axios.get(API_BASE_URL + '/product/getAllProduct', payload)
      .then(function (response) {
        console.log("response:" + response.data);
        if (response.status === 200) {
          response.data.map((a) => console.log(a.productName));
          self.setState({ newProduct: response.data });
          self.setState({ topProduct: response.data });
        }
        else if (response.code === 401) {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  callbackFunction = (childData) => {
    this.setState({
      productDetail: childData,
      productDetailCheck:true
    
    })
   }
    
  render() {
    return(
      <Router>
        <body>
         <Head />
         <Category  class="row" />
          <div class="container">
         <Switch>
           <Route path="/detail/:id" component={ProductDetail} >
             <ProductDetail />
          </Route>   
          <Route path="/" >
          <CateDete />
          <CategoryDetail title={"New Product"} />
          <Product newProduct={this.state.newProduct}  class="row"/>      
          <HotDeal class ="row" />
          <CategoryDetail title={"TOP SELLING"} />
          <Product newProduct={this.state.topProduct}  class="row"/>  
          </Route>   
         </Switch>
         </div>
        </body>)
      </Router>
    )
    // if (this.state.productDetailCheck) {
    //   return (

    //     <body>
    //      <Head />
    //      <Category  class="row" />
    //       <div class="container">
    //      <ProductDetail productDetail={this.state.productDetail}/>
    //      </div>
    //     </body>)
    // }else{
    //   console.log("check:"+this.state.productDetailCheck)
    //   return (
    //     <body>
    //      <Head />
    //      <Category  class="row" />
    //       <div class="container">
    //      <CateDete />
    //      <CategoryDetail title={"New Product"} />
    //      <Product newProduct={this.state.newProduct} productDetail = {this.callbackFunction} class="row"/>      
    //      <HotDeal class ="row" />
    //      <CategoryDetail title={"TOP SELLING"} />
    //      <Product newProduct={this.state.topProduct} productDetail = {this.callbackFunction} class="row"/>   
    //      </div>
    //     </body>
       
    //   )
    // }
  }
}

export default withRouter(Home);