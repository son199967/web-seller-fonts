import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
class Category extends Component {
  constructor(props) {
    super(props);
  }
  redirectTo=(e)=>{
     this.props.history.push(`/product/${e}`)
  }
  enter(){

  }

  render() {
    return (
    <nav class="navbar navbar-expand-sm bg-danger navbar-light">
      <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#" onClick={() =>this.redirectTo("Laptop")}>Máy tính xách tay- Laptop</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" onClick={() =>this.redirectTo("computer")}>Máy Tính - Máy chủ</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" onClick={() =>this.redirectTo("category")}>Linh kiện máy tính</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" onClick={() =>this.redirectTo("screen")}>Màn hình máy tính</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"onClick={() =>this.redirectTo("print")}>Máy in thiết bị văn phòng</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"onClick={() =>this.redirectTo("game")}>Gaming Gear</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"onClick={() =>this.redirectTo("gameN")}>GameNet</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"onClick={() =>this.redirectTo("data")}>TB lưu trữ,nghe nhìn</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"onClick={() =>this.redirectTo("network")}>Thiết bị mạng</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" onMouseEnter={this.enter} onClick={() =>this.redirectTo("water")}>CollingColling,Tản Nhiệt</a>
    </li>
    
   
  </ul>
  </nav>
    )
  }
}

export default withRouter(Category);