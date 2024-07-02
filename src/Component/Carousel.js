import React from 'react';
import '../App.css';
function Carousel() {
    return (
        <div className='container'>
            <div className='card-section1'>
                <div className='card1'>
                    <div className='container card-elements' >
                        <h5 className='card-element1'>
                            Ultra HD Premium Sound
                        </h5>
                        <div className='card-element2 '>
                            <div className='card-image'>
                                <img src='./images/category_images/headphone.png'></img>
                            </div>
                            <div className='card-content'>
                                <span className='from'>From </span>
                                <span className='price'>$250 </span><br />
                                <span>Sony,Samsung, LG and more. Instant 10% discount on Visa and Master Card</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card1 card2'>
                    <div className='container card-elements' >
                        <h5 className='card-element1'>
                            Silver Stallion 20T
                        </h5>
                        <div className='card-element2 '>
                            <div className='card-image'>
                                <img src='./images/category_images/cycle.png'></img>
                            </div>
                            <div className='card-content'>

                                <span>Never Before Deals </span><br />
                                <span className='from'>Buy Now! $1500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-section2' >
                <div id="carouselExampleDark" className="carousel carousel-dark slides" data-bs-ride="carousel" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className='card3'>
                                <div className='discount'>
                                    <span>50% Discount</span>
                                </div>
                                <div className='container card3-elements'>
                                    <div className='card3-element1'>
                                        <span className='name'>Google Pixel 14Pro</span><br />
                                        <span className='about'>Now avilable at affordable price</span>
                                        <br />
                                        <br />
                                        <span className=' old-price about'>$2000 </span>
                                        <span className='name'> From</span>
                                        <span className='new-price'> $1000</span>
                                        <div className='buy-btn'>
                                            <button className='buy'>BUY NOW</button>
                                        </div>
                                    </div>
                                    <div className='card3-element2'>
                                        <img src='./images/carousel/phone.png'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className='card3'>
                                <div className='discount'>
                                    <span>35% Discount</span>
                                </div>
                                <div className='container card3-elements'>
                                    <div className='card3-element1'>
                                        <span className='name'>Hp Laptops </span><br />
                                        <span className='about'>Now avilable at affordable price</span>
                                        <br />
                                        <br />
                                        <span className=' old-price about'>$3000 </span>
                                        <span className='name'> From</span>
                                        <span className='new-price'> $2000</span>
                                        <div className='buy-btn'>
                                            <button className='buy'>BUY NOW</button>
                                        </div>
                                    </div>
                                    <div className='card3-element2'>
                                        <img src='./images/carousel/laptop.png'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='card3'>
                                <div className='discount'>
                                    <span>50% Discount</span>
                                </div>
                                <div className='container card3-elements'>
                                    <div className='card3-element1'>
                                        <span className='name'>Apple airpods</span><br />
                                        <span className='about'>Now avilable at affordable price</span>
                                        <br />
                                        <br />
                                        <span className=' old-price about'>$2000 </span>
                                        <span className='name'> From</span>
                                        <span className='new-price'> $1000</span>
                                        <div className='buy-btn'>
                                            <button className='buy'>BUY NOW</button>
                                        </div>
                                    </div>
                                    <div className='card3-element2'>
                                        <img src='./images/carousel/earpods.png'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Carousel;
