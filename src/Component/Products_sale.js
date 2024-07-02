import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div className='container product'>
            <div className='product-section-1'>
                <h3>Sale Products</h3>
            </div>
            <div className='product-section-2'>
                {/* card 1 */}
                    <div className='card'>
                <Link className="link" to='/product-view' state={{ image: "./images/category_images/headphone.png" }}>
                        <div className='rating'>
                            <span className='rating-value'>4.2</span>
                        </div>
                        <div className='product'>
                            <img src='./images/category_images/headphone.png' width={"100px"} height={"100px"} className='product-image'></img>
                            <div className='product-details'>
                                <span className='product-type'>PROVOGUE</span>
                                <p className='product-description'>Men Formal Evening Black Artificial Leather, Texas Belt</p>
                            </div>
                        </div>
                        <div className='price'>
                            <span className='sale-price'>$120</span>
                            <div className='offers'>
                                <span className='actual-price'>$1,499</span>
                                <span className='discount'>88% off</span>
                            </div>
                        </div>
                </Link>
                    </div>
                {/* card 2 */}
                <div className='card'>
                <Link className="link" to='/product-view' state={{ image: "./images/category_images/cycle.png" }}>
                    <div className='rating'>
                        <span className='rating-value'>4.2</span>
                    </div>
                    <div className='product'>
                        <img src='./images/category_images/cycle.png' width={"100px"} height={"100px"} className='product-image'></img>
                        <div className='product-details'>
                            <span className='product-type'>PROVOGUE</span>
                            <p className='product-description'>Men Formal Evening Black Artificial Leather, Texas Belt</p>
                        </div>
                    </div>
                    <div className='price'>
                        <span className='sale-price'>$120</span>
                        <div className='offers'>
                            <span className='actual-price'>$1,499</span>
                            <span className='discount'>88% off</span>
                        </div>
                    </div>
                </Link>
                </div>
                {/* card 3 */}
                <div className='card'>
                <Link className="link" to='/product-view' state={{ image: "./images/category_images/food.png" }}>
                    <div className='rating'>
                        <span className='rating-value'>4.2</span>
                    </div>
                    <div className='product'>
                        <img src='./images/category_images/food.png' width={"100px"} height={"100px"} className='product-image'></img>
                        <div className='product-details'>
                            <span className='product-type'>PROVOGUE</span>
                            <p className='product-description'>Men Formal Evening Black Artificial Leather, Texas Belt</p>
                        </div>
                    </div>
                    <div className='price'>
                        <span className='sale-price'>$120</span>
                        <div className='offers'>
                            <span className='actual-price'>$1,499</span>
                            <span className='discount'>88% off</span>
                        </div>
                    </div>
                    </Link>
                </div>
                {/* card 4 */}
                <div className='card'>
                <Link className="link" to='/product-view' state={{ image: "./images/carousel/phone.png" }}>
                    <div className='rating'>
                        <span className='rating-value'>4.2</span>
                    </div>
                    <div className='product'>
                        <img src='./images/carousel/phone.png' width={"100px"} height={"100px"} className='product-image'></img>
                        <div className='product-details'>
                            <span className='product-type'>PROVOGUE</span>
                            <p className='product-description'>Men Formal Evening Black Artificial Leather, Texas Belt</p>
                        </div>
                    </div>
                    <div className='price'>
                        <span className='sale-price'>$120</span>
                        <div className='offers'>
                            <span className='actual-price'>$1,499</span>
                            <span className='discount'>88% off</span>
                        </div>
                    </div>
                </Link>
                </div>
                {/* card 5 */}
                <div className='card'>
                <Link className="link" to='/product-view' state={{ image: "./images/category_images/camera.png" }}>
                    <div className='rating'>
                        <span className='rating-value'>4.2</span>
                    </div>
                    <div className='product'>
                        <img src='./images/category_images/camera.png' width={"100px"} height={"100px"} className='product-image'></img>
                        <div className='product-details'>
                            <span className='product-type'>PROVOGUE</span>
                            <p className='product-description'>Men Formal Evening Black Artificial Leather, Texas Belt</p>
                        </div>
                    </div>
                    <div className='price'>
                        <span className='sale-price'>$120</span>
                        <div className='offers'>
                            <span className='actual-price'>$1,499</span>
                            <span className='discount'>88% off</span>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="view-more">
                    <img src="./images/category_images/arrow.png" width={"40px"} ></img>
                </div>
            </div>
        </div>
    )
}

export default Product