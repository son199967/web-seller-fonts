import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
import Product from '../Home/Product';
import { Button } from 'bootstrap';

class ProductAdmin extends Component {
    constructor(props) {
        super(props);
        this.state={
          content:"HELLO"
        }
    }
    render(){
        return(
        <div className="row bg-secondary">
            <div className="col-2">
            </div>
            <div className="col-8">
                <div className="row">
                 <div className="col-4 pt-5" >
                     <h2>Sản Phẩm</h2>  
                </div>
                    <div className="col-8 pt-5 ">
                    <button type="button" class="btn btn-secondary float-right">+Thêm sản phẩm</button>
                    </div>
                </div>
                <div className="row bg-light pl-5 ml-5">
                <div class="input-group md-form form-sm form-2 pt-3 pr-3">
                   <input class="form-control my-0 py-1 amber-border" type="text" placeholder="Search" aria-label="Search"/>
                 <div class="input-group-append">
                  <span class="input-group-text amber lighten-3" id="basic-text1"><i class="fa fa-search text-grey"
                   aria-hidden="true"></i></span>
                   </div>
                

                </div>
                <div class="container "> 
            <div class="col-sm-12">
             <h4 class="mt-5">Tất cả sản phẩm</h4>
            <table id="cart" class="table table-hover table-condensed"> 
             <thead> 
              <tr> 
               <th  class="col-sm-5">Tên sản phẩm</th> 
               <th  class="col-sm-1">Giá</th> 
               <th  class="col-sm-2">Số lượng</th> 
               <th class="text-center col-sm-2">Thành tiền</th> 
               <th  class="col-sm-2"> </th> 
              </tr> 
             </thead> 
             <tbody>
             <tr> 
              <td data-th="Product"> 
               <div class="row"> 
                <div class="col-sm-7 hidden-xs "><img src="https://anphat.com.vn/media/product/32903_32903_tuf_gaming_z490_plus_011.jpg" alt="Sản phẩm 1" class="img-responsive" width="100"></img>
                </div> 
                <div class="col-sm-5"> 
                 <p class="nomargin">myname</p> 
                </div> 
               </div> 
              </td> 
              <td data-th="Price">50.000 đ</td> 
              <td data-th="Quantity"><input class="form-control text-center" value="10" type="number"/>
              </td> 
              <td data-th="Subtotal" class="text-center">1000.000 </td> 
              <td class="actions" data-th="">
               <button class="btn btn-info btn-sm"><i class="fa fa-edit"></i>
               </button> 
               <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i>
               </button>
              </td> 
             </tr> 
  </tbody>
 </table>
 </div> 
  </div>
</div>
            </div>

        </div>
        )
    }
}
export default withRouter(ProductAdmin)