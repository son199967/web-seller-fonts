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





class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProduct: [],
      topProduct: [],
      adsProduct: []
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
  render() {
    return (
      <body>
                <Head />
       <Category  class="row" />
        <div class="container">

       <CateDete />
       <CategoryDetail title={"New Product"} />
       <Product newProduct={this.state.newProduct}  class="row"/>      
       <HotDeal class ="row" />
       <CategoryDetail title={"TOP SELLING"} />
       <Product newProduct={this.state.topProduct}  class="row"/>   
       </div>
      </body>
     
    )
  }
}

export default withRouter(Home);