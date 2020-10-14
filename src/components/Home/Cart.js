import React, { Component } from 'react'
 import axios from 'axios';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiContants';
import { withRouter } from "react-router-dom";
 class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cart:{
            totalPrice:null,
            feeShip:null,
            adress:"",
            telephone:null,
            cartItems:[
                {
                    productId:null,
                    amount:null,
                    color:null,
                    image:null,
                    nameProduct:null,
                    price:null,
                    totalPriceItem:null
                }
            ]
          }
        };
      }
      componentWillMount(){
          this.getCartDone()
      }
   
      getCartDone = async () => {
       
        const sizeD = await axios.get(API_BASE_URL+'/cart/getCartDone',{ headers: {
         authorization: localStorage.getItem(ACCESS_TOKEN_NAME)
        }})
            .then(function (response) {
                if(response.status === 200){
                    console.log("size",response.data)
                  return response.data
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        const cart = await axios.get(API_BASE_URL+'/cart/getCartFuture',{ headers: {
                authorization: localStorage.getItem(ACCESS_TOKEN_NAME)
               }})
                   .then(function (response) {
                       if(response.status === 200){
                           console.log("sizeF",response.data)
                         return response.data
                       }
                   })
                   .catch(function (error) {
                       console.log(error);
                   });
                   this.setState({cart})
        
    }
      render(){
          console.log("log",this.state.cart)
          const cartProduct= this.state.cart.cartItems.map((c) =>
          <tr> 
              <td data-th="Product"> 
               <div class="row"> 
                <div class="col-sm-7 hidden-xs "><img src={c.image} alt="Sản phẩm 1" class="img-responsive" width="100"></img>
                </div> 
                <div class="col-sm-5"> 
                 <p class="nomargin">{c.nameProduct}</p> 
                </div> 
               </div> 
              </td> 
              <td data-th="Price">{c.price} đ</td> 
              <td data-th="Quantity"><input class="form-control text-center" value={c.amount} type="number"/>
              </td> 
              <td data-th="Subtotal" class="text-center">{c.totalPriceItem} </td> 
              <td class="actions" data-th="">
               <button class="btn btn-info btn-sm"><i class="fa fa-edit"></i>
               </button> 
               <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i>
               </button>
              </td> 
             </tr> 
          )
          return(
           
            <div class="container "> 
            <div class="col-sm-12">
             <h4 class="mt-5">Gỏ Hàng <span>{this.state.cart.cartItems.length} sản phẩm</span></h4>
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
                 {cartProduct}
  </tbody>
  <tfoot> 
   <tr class="visible-xs"> 
          <td class="text-center"><strong>Tổng {this.state.cart.totalPrice}đ</strong>
    </td> 
   </tr> 
   <tr> 
    <td><a href="http://hocwebgiare.com/" class="btn btn-warning"><i class="fa fa-angle-left"></i> Tiếp tục mua hàng</a>
    </td> 
    <td colspan="2" class="hidden-xs"> </td> 
    <td class="hidden-xs text-center"><strong>Tổng tiền {this.state.cart.totalPrice} đ</strong>
    </td> 
    <td><a href="http://hocwebgiare.com/" class="btn btn-success btn-block">Thanh toán <i class="fa fa-angle-right"></i></a>
    </td> 
   </tr> 
  </tfoot> 
 </table>
 </div>
 <div class="col-sm-4 mt-5">
   
 
  </div>
</div>
      
          )
      }

}
export default withRouter(Cart);