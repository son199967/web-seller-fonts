import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
import Product from '../Home/Product';
import { Button } from 'bootstrap';

class ProductDetailAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="container mt-lg-5" style={{backgroundColor:"#EFFBFB"}}>
                <h3 className="row mt-lg-5 p-3">Thêm mới sản phẩm</h3>
                <div className="row mt-lg-5">
                    <div className="col-8">
                        <div>
                        <form class="needs-validation" novalidate>
                            <div class="form-row rounded"style={{backgroundColor:"#FFFFFF"}}>
                                <div class="col-md-6 mb-3 ">
                                    <label for="validationCustom01" className="float-left">Mã sản phẩm / SKU</label>
                                    <input type="text" class="form-control" id="validationCustom01" placeholder="Mã sản phẩm" value="" required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom02 " className="float-left">Barcode</label>
                                    <input type="text" class="form-control" id="validationCustom02" placeholder="Barcode" value="" required />
                                    <div class="valid-feedback">
                                        Looks good!
      </div>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label for="validationCustom02" className="float-left">Tên sản phẩm *</label>
                                    <input type="text" class="form-control" id="validationCustom02" placeholder="Tên sản phẩm *" value="" required />
                                    <div class="valid-feedback">
                                        Looks good!
      </div>
                                </div>
                            </div>
                        </form>
                        </div>
                        <div className="mt-5 ">
                            
                        <form class="needs-validation" novalidate>
                            <div class="form-row rounded" style={{backgroundColor:"#FFFFFF"}} >
                            <h5 className="col-12 float-left">Giá sản phẩm</h5>
                                <div class="col-md-6 mb-3 ">
                                    <label for="validationCustom01" className="float-left">Giá bán lẻ</label>
                                    <input type="text" class="form-control" id="validationCustom01" placeholder="đ" value="" required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom02 " className="float-left">Giá bán buôn</label>
                                    <input type="text" class="form-control" id="validationCustom02" placeholder="đ" value="" required />
                                    <div class="valid-feedback">
                                        Looks good!
      </div>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label for="validationCustom02" className="float-left">Giá nhập</label>
                                    <input type="text" class="form-control" id="validationCustom02" placeholder="đ" value="" required />
                                    <div class="valid-feedback">
                                        Looks good!
      </div>
                                </div>
                            </div>
                        </form>
                        </div>
                    
                    </div>
                    <div className="col-4">
                        <div className=" p-3" style={{backgroundColor:"#FFFFFF"}}>
                            <h5>Phân loại</h5>
                            <form class="needs-validation" novalidate>
                                <div class="form-row rounded">
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom02" className="float-left">Loại sản phẩm *</label>
                                        <div class="dropdown">
                                            <input type="text" class="form-control dropdown-toggle" id="validationCustom02" placeholder="Loại sản phẩm" value="" required />

                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom02" className="float-left">Nhãn hiệu</label>
                                        <div class="dropdown">
                                            <input type="text" class="form-control dropdown-toggle" id="validationCustom02" placeholder="Loại sản phẩm" value="" required />

                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom02" className="float-left">Tags</label>
                                        <div class="dropdown">
                                            <input type="text" class="form-control dropdown-toggle" id="validationCustom02" placeholder="Loại sản phẩm" value="" required />

                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className=" mt-5 p-3" style={{backgroundColor:"#FFFFFF"}}>
                            <h5>Ảnh sản phẩm</h5>
                            <div className="row"> 
                              <div className="col-6"> 
                              <button className="btn btn-success" >Thêm ảnh(+)</button>
                              </div>
                              <div className="col-6"> 
                              <button className="btn btn-success" >Add Ảnh link</button>
                              </div>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}
export default withRouter(ProductDetailAdmin)