import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
import Product from '../Home/Product';
import { Button } from 'bootstrap';

class ProductAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newProduct: [
                {
                    id: null, productName: "", productInfo: "", productType: "", imageProduct: "", providerName: "",
                    prices: [{ unitPrice: null }],
                    promotions: [{ amount: null }],
                    productDetail: null
                }
            ],
        }
    }
    componentWillMount() {
        this.getAllProduction();
        console.log("da1")
    }


    getAllProduction = async () => {
        const newProduct = await axios.get(API_BASE_URL + '/product/getAllProduct')
            .then(function (response) {
                console.log("response:", response.data);
                if (response.status === 200) {
                    return response.data
                }
            })
            .catch(function (error) {
                console.log(error);
            })
        this.setState({ newProduct })
    }
    deleteProduct= async (id) =>{
     const status = await axios.delete(API_BASE_URL + '/product/deleteProduct?id='+id)
        .then(function (response) {
                return response.status;
        })
        .catch(function (error) {
            console.log(error);
        })
        console.log("status",status)
        if(status==200){
            this.getAllProduction();
        }
    }
    updateProduct = (id) =>{
        this.props.history.push("/admin/updateProduct/"+id)
    }
    render() {

        const cartProduct = this.state.newProduct.map((c, index) =>
            <tr>
                <td>
                    <p>#{index}</p>
                </td>
                <td data-th="Product">
                    <div class="row">
                        <div class="col-sm-7 hidden-xs "><img src={c.imageProduct} alt="Sản phẩm 1" class="img-responsive" width="100"></img>
                        </div>
                        <div class="col-sm-5">
                            <p class="nomargin">{c.productName}</p>
                        </div>
                    </div>
                </td>
                <td data-th="Price">{c.productType} </td>
                <td data-th="Price">{c.providerName} </td>
                <td data-th="Subtotal" class="text-center">Het hang </td>
                <td class="actions" data-th="">
                    <button class="btn btn-info btn-sm" onClick={() => this.updateProduct(c.id)}><i class="fa fa-edit"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" onClick={() =>this.deleteProduct(c.id)} ><i class="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        )
        return (

            <div class="container ">
                <div className="row m-0">
                    <h3 className=" col-3 mt-5">Sản Phẩm</h3>
                    <div className="col-8 m-0">
                    <div class="input-group md-form form-sm form-2 mt-5  m-0">
                            <input class="form-control my-0 py-1 amber-border" type="text" placeholder="Search" aria-label="Search" />
                            <div class="input-group-append">
                                <span class="input-group-text amber lighten-3" id="basic-text1"><i class="fa fa-search text-grey"
                                    aria-hidden="true"></i></span>
                            </div>
                        </div>
                        <div className="float-right mt-4">
                            <button type="button" class="btn btn-sm  btn-secondary float-right" onClick={() => this.props.history.push("/admin/addProduct")}>+Thêm sản phẩm</button>
                        </div>
                    </div>

                </div>
                <div className="col-12 mt-2">
                    <table id="cart" class=" table table-hover table-condensed">
                        <thead>
                            <tr>
                                <th style={{ width: "8%" }}>STT</th>
                                <th style={{ width: "50%" }}>Tên sản phẩm</th>
                                <th style={{ width: "10%" }}>Loại</th>
                                <th style={{ width: "10%" }}>Nhãn hiệu</th>
                                <th style={{ width: "10%" }}>Trạng thái	</th>
                                <th style={{ width: "12%" }}>Ngày khởi tạo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartProduct}
                        </tbody>
                    </table>
                </div>
            </div>


        )
    }
}
export default withRouter(ProductAdmin)