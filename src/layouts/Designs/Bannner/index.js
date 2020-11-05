import bannerImage from "assets/Image/dep-la-mot-lua-chon-chon-dam-tailorwings-de-la-chinh-minh.png";
import Banner from "components/Banner";
import React from "react";

function BannerContainer() {
    return (
        <section className="l-designs__banner">
            <Banner banners={[bannerImage]} />
        </section>
    );
}

export default BannerContainer;
