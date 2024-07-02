import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

function Ourproduct() {
    return (
        <div className="py-3 py-md-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="mb-4">Our Products</h4>
                    </div>
                    <div className="col-md-3">
                        <div className="product-card">
                            <Link  to='/product-view'>
                                <div className="product-card-img">
                                    <label className="stock bg-success">In Stock</label>
                                    <img src="./images/products/laptop.jpg" alt="Laptop"></img>
                                </div>
                            </Link>
                            <div className="product-card-body">
                                <p className="product-brand">HP</p>
                                <Link to='/product-view'>
                                    <h5 className="product-name">
                                        <span>HP Laptop</span>
                                    </h5>
                                </Link>
                                <div>
                                    <span className="selling-price">$500</span>
                                    <span className="original-price">$799</span>
                                </div>
                                <div className="mt-2">
                                    <Link to='/cart' className="btn btn1">Add to Cart</Link>
                                    <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="product-card">
                            <div className="product-card-img">
                                <label className="stock bg-success">In Stock</label>
                                <img src="./images/products/phone.jpg" alt="Red MI Note 8"></img>
                            </div>
                            <div className="product-card-body">
                                <p className="product-brand">MI</p>
                                <h5 className="product-name">
                                    <a href="">
                                        Redmi Note 8
                                    </a>
                                </h5>
                                <div>
                                    <span className="selling-price">$200</span>
                                    <span className="original-price">$300</span>
                                </div>
                                <div className="mt-2">
                                    <a href="" className="btn btn1">Add To Cart</a>
                                    <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="product-card">
                            <div className="product-card-img">
                                <label className="stock bg-success">In Stock</label>
                                <img src="./images/products/shirt.webp" alt="Mens Shirt"></img>
                            </div>
                            <div className="product-card-body">
                                <p className="product-brand">Levis</p>
                                <h5 className="product-name">
                                    <a href="">
                                        Mens Shirt
                                    </a>
                                </h5>
                                <div>
                                    <span className="selling-price">$25</span>
                                    <span className="original-price">$50</span>
                                </div>
                                <div className="mt-2">
                                    <Link to='/cart' className="btn btn1"> Add to Cart</Link>
                                    <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="product-card">
                            <div className="product-card-img">
                                <label className="stock bg-success">In Stock</label>
                                <img src="./images/products/headphone.jpg" alt="Head Phone"></img>
                            </div>
                            <div className="product-card-body">
                                <p className="product-brand">Asus</p>
                                <h5 className="product-name">
                                    <a href="">
                                        Head Phone
                                    </a>
                                </h5>
                                <div>
                                    <span className="selling-price">$13</span>
                                    <span className="original-price">$20</span>
                                </div>
                                <div className="mt-2">
                                    <a href="" className="btn btn1">Add To Cart</a>
                                    <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="product-card">
                            <div className="product-card-img">
                                <label className="stock bg-success">In Stock</label>
                                <img src="./images/products/headphone.jpg" alt="Head Phone"></img>
                            </div>
                            <div className="product-card-body">
                                <p className="product-brand">Asus</p>
                                <h5 className="product-name">
                                    <a href="">
                                        Head Phone
                                    </a>
                                </h5>
                                <div>
                                    <span className="selling-price">$13</span>
                                    <span className="original-price">$20</span>
                                </div>
                                <div className="mt-2">
                                    <a href="" className="btn btn1">Add To Cart</a>
                                    <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="product-card">
                            <div className="product-card-img">
                                <label className="stock bg-success">In Stock</label>
                                <img src="./images/products/headphone.jpg" alt="Head Phone"></img>
                            </div>
                            <div className="product-card-body">
                                <p className="product-brand">Asus</p>
                                <h5 className="product-name">
                                    <a href="">
                                        Head Phone
                                    </a>
                                </h5>
                                <div>
                                    <span className="selling-price">$13</span>
                                    <span className="original-price">$20</span>
                                </div>
                                <div className="mt-2">
                                    <a href="" className="btn btn1">Add To Cart</a>
                                    <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="product-card">
                            <div className="product-card-img">
                                <label className="stock bg-success">In Stock</label>
                                <img src="./images/products/headphone.jpg" alt="Head Phone"></img>
                            </div>
                            <div className="product-card-body">
                                <p className="product-brand">Asus</p>
                                <h5 className="product-name">
                                    <a href="">
                                        Head Phone
                                    </a>
                                </h5>
                                <div>
                                    <span className="selling-price">$13</span>
                                    <span className="original-price">$20</span>
                                </div>
                                <div className="mt-2">
                                    <a href="" className="btn btn1">Add To Cart</a>
                                    <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="product-card">
                            <div className="product-card-img">
                                <label className="stock bg-success">In Stock</label>
                                <img src="./images/products/headphone.jpg" alt="Head Phone"></img>
                            </div>
                            <div className="product-card-body">
                                <p className="product-brand">Asus</p>
                                <h5 className="product-name">
                                    <a href="">
                                        Head Phone
                                    </a>
                                </h5>
                                <div>
                                    <span className="selling-price">$13</span>
                                    <span className="original-price">$20</span>
                                </div>
                                <div className="mt-2">
                                    <a href="" className="btn btn1">Add To Cart</a>
                                    <a href="" className="btn btn1"> <i className="fa fa-heart"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Ourproduct;