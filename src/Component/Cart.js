import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../App.css';

function Cart(){
    return (
        <div>
            <Navbar/>
        <div className="py-3 py-md-5 bg-light">
        <div className="container">
    
            <div className="row">
                <div className="col-md-12">
                    <div className="shopping-cart">

                        <div className="cart-header d-none d-sm-none d-mb-block d-lg-block">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Products</h4>
                                </div>
                                <div className="col-md-2">
                                    <h4>Price</h4>
                                </div>
                                <div className="col-md-2">
                                    <h4>Quantity</h4>
                                </div>
                                <div className="col-md-2">
                                    <h4>Remove</h4>
                                </div>
                            </div>
                        </div>

                        <div className="cart-item">
                            <div className="row">
                                <div className="col-md-6 my-auto">
                                    <a href="">
                                        <label className="product-name">
                                            <img src="./images/products/laptop.jpg" alt=""></img>
                                            Hp Laptop
                                        </label>
                                    </a>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <label className="price">$569 </label>
                                </div>
                                <div className="col-md-2 col-7 my-auto">
                                    <div className="quantity">
                                        <div className="input-group">
                                            <span className="btn btn1"><i className="fa fa-minus"></i></span>
                                            <input type="text" value="1" className="input-quantity" />
                                            <span className="btn btn1"><i className="fa fa-plus"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-5 my-auto">
                                    <div className="remove">
                                        <a href="" className="btn btn-danger btn-sm">
                                            <i className="fa fa-trash"></i> Remove
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="row">
                                <div className="col-md-6 my-auto">
                                    <a href="">
                                        <label className="product-name">
                                            <img src="./images/products/laptop.jpg" alt=""></img>
                                            Hp Laptop
                                        </label>
                                    </a>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <label className="price">$569 </label>
                                </div>
                                <div className="col-md-2 col-7 my-auto">
                                    <div className="quantity">
                                        <div className="input-group">
                                            <span className="btn btn1"><i className="fa fa-minus"></i></span>
                                            <input type="text" value="1" className="input-quantity" />
                                            <span className="btn btn1"><i className="fa fa-plus"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-5 my-auto">
                                    <div className="remove">
                                        <a href="" className="btn btn-danger btn-sm">
                                            <i className="fa fa-trash"></i> Remove
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="row">
                                <div className="col-md-6 my-auto">
                                    <a href="">
                                        <label className="product-name">
                                            <img src="./images/products/laptop.jpg"  alt=""></img>
                                            Hp Laptop
                                        </label>
                                    </a>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <label className="price">$569 </label>
                                </div>
                                <div className="col-md-2 col-7 my-auto">
                                    <div className="quantity">
                                        <div className="input-group">
                                            <span className="btn btn1"><i className="fa fa-minus"></i></span>
                                            <input type="text" value="1" className="input-quantity" />
                                            <span className="btn btn1"><i className="fa fa-plus"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-5 my-auto">
                                    <div className="remove">
                                        <a href="" className="btn btn-danger btn-sm">
                                            <i className="fa fa-trash"></i> Remove
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                                
                    </div>
                </div>
            </div>

        </div>
    </div>
    <Footer/>
    </div>
    );
}
export default Cart;