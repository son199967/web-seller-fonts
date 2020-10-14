import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
import styles from './Admin.css';
import jQuery from 'jquery';



class Admin extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render(){
        return(
        <body>
		
            <div className="wrapper d-flex align-items-stretch">
                <nav id="sidebar" class="bg-dark">
                    <div class="p-4 pt-5">
                      <a href="#" class="img logo rounded-circle mb-5" ></a>
                      <ul className="list-unstyled components mb-5">
                      <li className="active">
                      <a href="#"><i className="fa fa-home fa-2x"></i> Tổng quan</a>
                  </li>
                  <li >
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="true" class="dropdown-toggle "> Đơn hàng</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Danh sách đơn Hàng</a>
                    </li>
                    <li>
                        <a href="#">Khách Trả hàng</a>
                    </li>
                    </ul>
                  </li>
                 

                  <li>
                  <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><span className="far fa-boxes"></span>Vận Chuyển</a>
                  <ul class="collapse list-unstyled" id="home">
                    <li>
                        <a href="#">Tổng quan</a>
                    </li>
                    <li>
                        <a href="#">Quản lý giao hàng</a>
                    </li>
                    <li>
                        <a href="#">Đối tác</a>
                    </li>
                  </ul>
                  </li>
                  <li>
                  <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><span className="far fa-boxes"></span>Khách Hàng</a>
                  <ul class="collapse list-unstyled" id="page">
                    <li>
                        <a href="#">Tổng quan</a>
                    </li>
                    <li>
                        <a href="#">Khách hàng</a>
                    </li>
                  </ul>
                  </li>
                  <li>
                  <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><span className="far fa-boxes"></span>Sản phẩm</a>
                  <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Danh sách sản phẩm</a>
                    </li>
                    <li>
                        <a href="#">Quản lý kho</a>
                    </li>
                    <li>
                        <a href="#">Nhập hàng</a>
                    </li>
                    <li>
                        <a href="#">Kiểm hàng</a>
                    </li>
                    <li>
                        <a href="#">Điều chỉnh giá</a>
                    </li>
                    <li>
                        <a href="#">Chương trình Khuyến mại</a>
                    </li>
                  </ul>
                  </li>
                </ul>
    
                <div class="footer">
                    <p>
                              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
                              </p>
                </div>
    
              </div>
            </nav>
    
           
          <div id="content" class="p-4 p-md-5">
    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
    
                <button type="button" id="sidebarCollapse" class="btn btn-primary">
                  <i class="fa fa-bars"></i>
                  <span class="sr-only">Toggle Menu</span>
                </button>
                <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
    
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
    
            <h2 class="mb-4">Sidebar #01</h2>
            <p>Lorem ipsum dolor sit<i class="fas fa-coffee"></i> amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
            </div>
      </body>
      
        )
    }
}
export default withRouter(Admin)