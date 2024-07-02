import React from "react";
import '../App.css';

function Brands() {
    return (
        <div className="container brand">
            <div className="brand-card">
                <div className="brand-card-inside">
                    <div className="brand-card-image">
                        <img src='./images/brands_logo/adidas.png'></img>
                    </div>
                    <hr></hr>
                    <div className="brand-card-content">
                        40% Off
                    </div>
                </div>
            </div>
            <div className="brand-card">
                <div className="brand-card-inside">
                    <div className="brand-card-image">
                        <img src='./images/brands_logo/nike.png'></img>
                    </div>
                    <hr></hr>
                    <div className="brand-card-content">
                        10% Off
                    </div>
                </div>
            </div>
            <div className="brand-card">
                <div className="brand-card-inside">
                    <div className="brand-card-image">
                        <img src='./images/brands_logo/pepe.png'></img>
                    </div>
                    <hr></hr>
                    <div className="brand-card-content">
                        50% Off
                    </div>
                </div>
            </div>
            <div className="brand-card">
                <div className="brand-card-inside">
                    <div className="brand-card-image">
                        <img src='./images/brands_logo/puma.png'></img>
                    </div>
                    <hr></hr>
                    <div className="brand-card-content">
                        30% Off
                    </div>
                </div>
            </div>
            <div className="brand-card">
                <div className="brand-card-inside">
                    <div className="brand-card-image">
                        <img src='./images/brands_logo/zara.png'></img>
                    </div>
                    <hr></hr>
                    <div className="brand-card-content">
                        20% Off
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brands;