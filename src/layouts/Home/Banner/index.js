import Banner from "components/Banner";
import React from "react";
import banner1 from "assets/Image/la-phu-nu-viet-ai-cung-co-it-nhat-mot-chiec-ao-dai.png";
import banner2 from "assets/Image/dep-la-mot-lua-chon-chon-dam-tailorwings-de-la-chinh-minh.png";

function BannerContainer() {
    return (
        <section className="l-home__banner">
            <Banner isSlide={true} banners={[banner1, banner2]} />
        </section>
    );
}

export default BannerContainer;
