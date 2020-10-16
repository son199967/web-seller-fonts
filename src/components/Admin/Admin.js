import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
import styles from './Admin.css';
import jQuery from 'jquery';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Button } from 'bootstrap';
import ProductAdmin from './ProductAdmin'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import ProductDetailAdmin from './ProductDetailAdmin';



class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "home"
        }
    }
    handleCChange = () => {
        this.setState({
            content: "home"
        });
    }
    componentDidMount() {
        if (localStorage.getItem(ACCESS_TOKEN_NAME) !== "null" && localStorage.getItem(ACCESS_TOKEN_NAME) !== null) {
            console.log("aaa1")
            var self =this
          axios.get(API_BASE_URL + '/checkAdmin', {
                headers: {
                    authorization: localStorage.getItem(ACCESS_TOKEN_NAME) }  })
                .then(function (response) {
                    console.log("bb", response)
                    if (response.data==="not admin") {
                        localStorage.setItem(ACCESS_TOKEN_NAME, null);
                        alert("Bạn Không phải là admin")
                        self.props.history.push("/login")
                        return response.data;
                    } 
                })
                .catch(function (error) {
                    console.log(error);
                });
        }else{
            console.log("mm");
            alert("Bạn Không phải là admin")
            this.props.history.push("login")
        }
        
        console.log("xxx",this.state.content)
        if (this.state.content === "home") {
            return <h1>Home</h1>
        } else if (this.state.content === "/admin/product") {
           
        }
        
    }
    callAPI = async (e) => {
        const a = await axios.get(API_BASE_URL + '/checkAdmin', {
            headers: {
                authorization: localStorage.getItem(ACCESS_TOKEN_NAME)
            }
        })
            .then(function (response) {
                console.log("bb", response)
                if (response.status === 200) {
                    return response
                }
            }).catch(function (error) {
                console.log(error);
            });
        console.log("bb", a)
        return a;
    }

    check = (e) => {
        console.log("ee",e);
    this.props.history.push("/admin/addProduct");
    }
    checkKK = (e) => {
        console.log("ee",e);
    this.props.history.push("/admin/product");
    }

    render() {


        return (
            <div>
                <Router>
                    <div>
                        <div >
                            <SideNav onSelect={(selected) => {
                                
                            }} style={{ backgroundColor: 'black' }} >

                                <SideNav.Toggle />

                                <SideNav.Nav defaultSelected="home">
                                    <h2 className="pt-5" ></h2>
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
                                        <NavItem eventKey="/admin/product">
                                            <NavText>
                                               <a href="#" onClick={() => this.checkKK("admin/product")}> Danh sách sản phẩm</a>
                       </NavText>
                                        </NavItem>
                                        <NavItem eventKey="products/1">
                                            <NavText>
                                                <a href="#" onClick={() =>this.check("admin/addProduct")}>Quản lý kho</a>
                       </NavText>

                                        </NavItem>

                                    </NavItem>
                                </SideNav.Nav>
                            </SideNav>
                        </div>
                    </div>

                    <Switch>
                        <Route path="/admin/product" component={ProductAdmin}>
                            <ProductAdmin />
                        </Route>
                        <Route path="/admin/addProduct" component={ProductAdmin}>
                            <ProductDetailAdmin />
                        </Route>

                    </Switch>

                </Router>
            </div>

        )
    }
}
export default withRouter(Admin)