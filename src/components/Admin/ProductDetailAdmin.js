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
            product: {
                id: null,
                productName: "",
                productInfo: "",
                productType: "",
                code: "",
                barcode: "",
                imageProduct: "",
                providerName: "",
                prices:
                {
                    unitPrice: null,
                    wholePrice: null,
                    importPrice: null
                }
                ,
                promotions: [
                    { amount: null }
                ],
                productDetail: {
                    content: "",
                    discription: "",
                    color: [],
                    size: [],
                    images: []
                }
            },
            type: [],
            imgXX: ""
        }
        
    }
    handleChangeObj = (e, name) => {
      console.log("xxm",e.target.value);
        const { product } = this.state
        this.setState({
            product: {
                ...product,
                [name]: e.target.value
            }
        });
    }
    handleChangeObjObj = (e, name) => {
        let a=null;
        if(name==="discription"){
            a=this.state.product.productDetail
            a.discription=e.target.value
        }
          const { product } = this.state
          this.setState({
              product: {
                  ...product,
                  productDetail:a  
              }
          });
      }
      handleChangeObjPrice = (e, name) => {
        let a=this.state.product.prices;
        if(name==="unitPrice"){         
            a.unitPrice=e.target.value
        }else if(name==="wholePrice"){     
            a.wholePrice=e.target.value
        }else if(name==="importPrice"){      
            a.importPrice=e.target.value
        }else{
            return;
        }
          const { product } = this.state
          this.setState({
              product: {
                  ...product,
                  prices:a  
              }
          });
      }
    changeImg = (e) => {
        this.setState({imgXX:e.target.value});
    }
    createNewProduct = () =>{
        axios.post(API_BASE_URL+'/product/createProduct/',this.state.product,{ headers: {
            Authorization: localStorage.getItem(ACCESS_TOKEN_NAME)
           }})
          .then( function(response) {
              if(response.status === 200){
               alert("Thêm Thành công sản phẩm giỏ hàng")
              }else {
                  alert("Có lỗi xảy ra")
              }
          })
          .catch(function (error) {
              console.log(error);
          });
    }
    addImgXX = () => {
        const { product } = this.state
        if (this.state.product.imageProduct === "") {
            console.log("co")
            this.setState({
                product: {
                    ...product,
                    imageProduct: this.state.imgXX
                }
            })
        }  
         
            let a =this.state.product.productDetail;
            a.images.push(this.state.imgXX)
            this.setState({
                product: {
                    ...product,
                    productDetail:a
                }
            })
            this.setState({imgXX:""});
    }
    componentDidMount() {
        this.getAllTypeProduct()
    }
    getAllTypeProduct = async () => {
        const type = await axios.get(API_BASE_URL + '/product/getAllTypeProduct')
            .then(function (response) {
                if (response.status === 200) {
                    console.log("ashajs", response.data)
                    return response.data;
                }
                else {
                    alert("Có lỗi xảy ra")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log("product", type)
        this.setState({ type })
    }

    render() {
        console.log("aaaa",this.state.product)
        const type = this.state.type.map((s) =>
            <option value={s}>{s}</option>
        )
        const imeges =this.state.product.productDetail.images.map((s) => 
            <img src={s} style={{width:"200px" ,background:"center"}}  class="img-thumbnail"/>
        )
        return (
            <div className="container mt-lg-5" style={{ backgroundColor: "#EFFBFB" }}>
                <h3 className="row mt-lg-5 pt-3 pl-3">Thêm mới sản phẩm</h3>
                <div className="row mt-lg-5">
                    <div className="col-8">
                        <div>
                            <form class="needs-validation" novalidate>
                                <div class="form-row rounded border-2 p-5" style={{ backgroundColor: "#FFFFFF" }}>
                                    <div class="col-md-6 mb-3 ">
                                        <label for="validationCustom01" className="float-left">Mã sản phẩm / SKU</label>
                                        <input type="text" class="form-control" id="validationCustom01" placeholder="Mã sản phẩm" value={this.state.product.code} onChange={(e) => this.handleChangeObj(e, "code")} required />
                                        <div class="valid-feedback">
                                            Looks good!
                                    </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="validationCustom02 " className="float-left">Barcode</label>
                                        <input type="number" class="form-control" id="validationCustom02" placeholder="Barcode" value={this.state.product.barcode} onChange={(e) => this.handleChangeObj(e, "barcode")} required />
                                        <div class="valid-feedback">
                                            Looks good!
      </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom02" className="float-left">Tên sản phẩm *</label>
                                        <input type="text" class="form-control" id="validationCustom02" placeholder="Tên sản phẩm *" value={this.state.product.productName} onChange={(e) => this.handleChangeObj(e, "productName")} required />
                                        <div class="valid-feedback">
                                            Looks good!
      </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="mt-5 ">

                            <form class="needs-validation" novalidate>
                                <div class="form-row rounded border-2 p-5" style={{ backgroundColor: "#FFFFFF" }} >
                                    <h5 className="col-12 float-left">Giá sản phẩm</h5>
                                    <div class="col-md-6 mb-3 ">
                                        <label for="validationCustom01" className="float-left">Giá bán lẻ</label>
                                        <input type="number" class="form-control" id="validationCustom01" placeholder="đ" value={this.state.product.prices.unitPrice} onChange={(e) => this.handleChangeObjPrice(e, "unitPrice")} required />
                                        <div class="valid-feedback">
                                            Looks good!
                                    </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="validationCustom02 " className="float-left">Giá bán buôn</label>
                                        <input type="number" class="form-control" id="validationCustom02" placeholder="đ" value={this.state.product.prices.wholePrice} onChange={(e) => this.handleChangeObjPrice(e, "wholePrice")} required />
                                        <div class="valid-feedback">
                                            Looks good!
      </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom02" className="float-left">Giá nhập</label>
                                        <input type="number" class="form-control" id="validationCustom02" placeholder="đ" value={this.state.product.prices.importPrice} onChange={(e) => this.handleChangeObjPrice(e, "importPrice")} required />
                                        <div class="valid-feedback">
                                            Looks good!
      </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="mt-5">

                            <form class="needs-validation" novalidate>
                                <div class="form-row rounded border-2 p-5" style={{ backgroundColor: "#FFFFFF" }} >
                                    <h5 className="col-12 float-left">Mô tả</h5>
                                    <div class="col-md-12 mb-3 ">
                                        <textarea name="Text1" cols="80" rows="5" value={this.state.product.productInfo} onChange={(e) => this.handleChangeObj(e, "productInfo")}></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className=" p-5 border-2" style={{ backgroundColor: "#FFFFFF" }}>
                            <h5>Phân loại</h5>
                            <form class="needs-validation" novalidate>
                                <div class="form-row rounded">
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom02" className="float-left">Loại sản phẩm *</label>
                                        <select class="form-control" value={this.state.product.productType} onChange={(e) => this.handleChangeObj(e, "productType")}>
                                            {type}
                                        </select>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom02" className="float-left">Nhãn hiệu</label>
                                        <div class="dropdown">
                                            <input type="text" class="form-control dropdown-toggle" id="validationCustom02" placeholder="Loại sản phẩm" value={this.state.product.providerName} onChange={(e) => this.handleChangeObj(e, "providerName")} required />
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
                        <div className=" mt-5 p-5 border-2" style={{ backgroundColor: "#FFFFFF" }}>
                            <a href={this.state.product.imageProduct}> </a>
                            <h5>Ảnh sản phẩm</h5>
                            <div className="row ">
                                <div className="text-center">
                                <img src={this.state.product.imageProduct} style={{width:"200px" ,background:"center"}}  class="img-thumbnail"/>
                                {imeges}
                            </div>
                            
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <button className="btn btn-success" type="submit" onClick={() => this.addImgXX()} >Thêm ảnh(+)</button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-success" >Add Ảnh link</button>
                                </div>
                                <div className="col-12 mt-4 form-group">
                                    <input type="text" class="form-control dropdown-toggle" id="validationCustom017" placeholder="Thêm Ảnh" value={this.state.imgXX} onChange={(e) => this.changeImg(e)} required />

                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="mt-5 col-12">
                    <form class="needs-validation" >
                        <div class="form-row rounded border-2 p-5" style={{ backgroundColor: "#FFFFFF" }} >
                            <h5 className="col-12 float-left">Mô tả Chi tiết</h5>
                            <div class="col-md-12 mb-3 ">
                                <textarea name="Text1"  cols="140" rows="5" value={this.state.product.productDetail.discription} onChange={(e) => this.handleChangeObjObj(e, "discription")}></textarea>

                            </div>
                        </div>
                    </form>
                </div>
                <div className="mt-5 col-12">
                    <form class="needs-validation" >
                        <div class="form-row rounded border-2 p-5" style={{ backgroundColor: "#FFFFFF" }} >
                        <button className="btn btn-success text-center" type="submit" onClick={() => this.createNewProduct()} >Thêm sản phẩm</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}
export default withRouter(ProductDetailAdmin)