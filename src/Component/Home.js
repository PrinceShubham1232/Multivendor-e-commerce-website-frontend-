import React from "react";
import Navbar from './Navbar';
import Carousel from './Carousel';
import Featured from './Featured';
import Banner from "./Banner";
// import Ourproduct from './Ourproduct';
import Footer from './Footer';
import Category from "./Category";
import Products_sale from "./Products_sale";
import Product_new_arr from "./Products_new_arr";
import Brands from "./Brands";
// import Prouduct_list from "./Product_list";
// import ProductView from "./ProductView";
// import Menu from "./Menu";

function Home() {
    const banner1 = "./images/category_images/sale-banner.png";
    const banner2 = "./images/category_images/supper-sale-banner.png";

    return (
        <div>
            <Navbar />
            <Carousel />
            <Featured />
            <Banner banner={banner1} />
            <Products_sale />
            <Category />
            <Product_new_arr />
            <Banner banner={banner2} />
            <Brands />
            {/* <Ourproduct /> */}
            {/* <ProductView /> */}
            {/* <Prouduct_list /> */}
            <Footer />
        </div>
    );
}

export default Home;