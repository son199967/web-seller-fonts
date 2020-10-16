import React, { Component } from 'react';
import { withRouter, Router, Switch } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
import styles from './Admin.css';
import jQuery from 'jquery';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Button } from 'bootstrap';
import ProductAdmin from './ProductAdmin'



class Admin extends Component {
    constructor(props) {
        super(props);
        this.state={
          content:"HELLO"
        }
    }
    handleCChange = () => {
      this.setState({
          content:"home"
      });
  }
//   componentDidMount(){
//      if(localStorage.getItem(ACCESS_TOKEN_NAME)!=="null"){
//         const a= this.callAPI();
//         if(a !==200){
//             localStorage.setItem(ACCESS_TOKEN_NAME,null);
//             alert("Bạn không phải là admin");
//             this.props.history.push("/login");
//             return;
//         }
//         this.props.history.push("/admin");
//         return;     
//      }else{
//      this.props.history.push("/login");
//      }
//   }
  callAPI = async (e) => {
    console.log("aaa"+this.state.email+"bbb"+this.state.password);
    const user = await axios.get(API_BASE_URL+'/infoUser',{ headers: {
     authorization: localStorage.getItem(ACCESS_TOKEN_NAME)
    }})
        .then(function (response) {
            if(response.status === 200){
              return response.status
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        return user;
}
check =() =>{
    console.log("admin",this.state.content)
    if(this.state.content==="home"){
            return <h1>Home</h1>
    }else if(this.state.content==="productsList"){
        return <ProductAdmin />
    }
    return <h2>AHIHI</h2>
}
       
    render(){
        
     
      console.log("ajdh",this.state.content);
      const styleH= {  backgroundColor: 'black',color: 'red'};
        return(
          <div>
            <div style={{ backgroundColor: 'black',color: 'red'}}>
          <SideNav onSelect={(selected) => {
           this.setState({content:selected})
          } }>
             
          <SideNav.Toggle />
          
          <SideNav.Nav defaultSelected="home">
          <h2 className="pt-5" style={{color:"white"}}>bar</h2>
              <NavItem eventKey="home">
                  <NavIcon>
                      <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      Tổng quan
                  </NavText>
              </NavItem>
              <NavItem eventKey="cartiteam">
                  <NavIcon>
                      <i className="fa fa-shopping-cart" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      Đơn Hàng
                  </NavText>
                  <NavItem eventKey="cart">
                      <NavText>
                                  Danh sách đơn hàng
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="charts/barchart">
                      <NavText>
                                 Khách trả hàng
                      </NavText>
                  </NavItem>
              </NavItem>
              <NavItem eventKey="delivery">
                  <NavIcon>
                      <i className="fa fa-truck" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      Vận chuyển
                  </NavText>
                  <NavItem eventKey="products/1">
                      <NavText>
                          Tổng quan
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="products/2">
                      <NavText>
                         Quản lý giao hàng
                      </NavText>
                  </NavItem>
              </NavItem>
              <NavItem eventKey="user">
                  <NavIcon>
                      <i className="fa fa-user" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                     Quản lý khách hàng
                  </NavText>
              </NavItem>
              <NavItem eventKey="products">
                  <NavIcon>
                      <i className="fa fa-archive" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                     Sản phẩm
                  </NavText>
                  <NavItem eventKey="productsList">
                      <NavText>
                          Danh sách sản phẩm
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="products/1">
                      <NavText>
                         Quản lý kho
                      </NavText>
                      
                  </NavItem>
                  
              </NavItem>
          </SideNav.Nav>
          </SideNav>
          </div>
          <div>
            <ProductAdmin />
          </div>
          </div>
        )
    }
}
export default withRouter(Admin)