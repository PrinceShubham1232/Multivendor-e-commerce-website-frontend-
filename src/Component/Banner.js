import React from "react";
import '../App.css'

function Banner(props) {
    const banner = props.banner;
    return (
        <div className="banner container">
            <img src={banner}></img>
        </div>
    );
}

export default Banner;