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
import Cart from '../../components/Home/Cart';
import ProductDetail from './ProductDetail';
import Footer from '../../components/Home/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProductCategory from './ProductCategory';
class Home extends Component {
  constructor(props) {
    super(props);
    
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
        
         <Category  class="row" />
          <div class="container">
         <Switch>
           <Route path="/detail/:id" component={ProductDetail} >
             <ProductDetail />
          </Route>   
          <Route path="/product/:provideType/:provider" component={ProductCategory} >
             <ProductCategory />
          </Route>  
          <Route path="/product/:search" component={ProductCategory} >
             <ProductCategory />
          </Route>      
          <Route path="/" >
          <CateDete />
          <CategoryDetail title={"New Product"} />
          <Product   class="row"/>      
          <HotDeal class ="row" />
          {/* <CategoryDetail title={"TOP SELLING"} />
          <Product newProduct={this.state.topProduct}  class="row"/>   */}
          </Route>   
         </Switch>
         </div>
        </body>
        <Footer />
        )
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