import React from "react";
import Banner from "components/Banner";
import bannerImage from "assets/Image/what-is-your-color.png";

function BannerContainer() {
    return (
        <section className="l-fabrics__banner">
            <Banner isSlide={false} banners={[bannerImage]} />
        </section>
    );
}

export default BannerContainer;
