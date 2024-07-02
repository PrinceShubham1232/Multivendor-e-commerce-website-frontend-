import React from "react";
import '../App.css'
function Footer() {
    return (
        <div>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className="footer-heading">Muti Vendor</h4>
                            <div className="footer-underline"></div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-heading">Quick Links</h4>
                            <div className="footer-underline"></div>
                            <div className="mb-2"><a href="" className="text-white">Home</a></div>
                            <div className="mb-2"><a href="" className="text-white">About Us</a></div>
                            <div className="mb-2"><a href="" className="text-white">Contact Us</a></div>
                            <div className="mb-2"><a href="" className="text-white">Blogs</a></div>
                            <div className="mb-2"><a href="" className="text-white">Sitemaps</a></div>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-heading">Shop Now</h4>
                            <div className="footer-underline"></div>
                            <div className="mb-2"><a href="" className="text-white">Collections</a></div>
                            <div className="mb-2"><a href="" className="text-white">Trending Products</a></div>
                            <div className="mb-2"><a href="" className="text-white">New Arrivals Products</a></div>
                            <div className="mb-2"><a href="" className="text-white">Featured Products</a></div>
                            <div className="mb-2"><a href="" className="text-white">Cart</a></div>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-heading">Reach Us</h4>
                            <div className="footer-underline"></div>
                            <div className="mb-2">
                                <p>
                                    <i className="fa fa-map-marker"></i> #444,Lorem Ipsum is simply dummy text of the printing and typesetting industry, India - 560077
                                </p>
                            </div>
                            <div className="mb-2">
                                <a href="" className="text-white">
                                    <i className="fa fa-phone"></i> +91 989-XXX-XXXX
                                </a>
                            </div>
                            <div className="mb-2">
                                <a href="" className="text-white">
                                    <i className="fa fa-envelope"></i> multivendor@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <p className=""> &copy; 2023 - Multi Vendor - Ecommerce. All rights reserved.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="social-media">
                                <span>Get Connected:</span>
                                <a href=""><i className="fa fa-facebook"></i></a>
                                <a href=""><i className="fa fa-twitter"></i></a>
                                <a href=""><i className="fa fa-instagram"></i></a>
                                <a href=""><i className="fa fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;