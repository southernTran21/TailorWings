import Banner from "components/Banner";
import React, { useEffect, useState } from "react";
import { BANNER_CATEGORIES } from "../../../constants";

const innerWidth = window.innerWidth;

function BannerContainer() {
    /*--------------*/
    const urlSearch = window.location.search.match(/cat=(.*)\b/);
    const catIDFromURL = urlSearch ? urlSearch[1] : "all";
    /*--------------*/
    const [bannerImage, setBannerImage] = useState(BANNER_CATEGORIES[0].image);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        if (catIDFromURL) {
            /*--------------*/
            let bannerImage =
                BANNER_CATEGORIES.find(
                    (banner) => banner.id === catIDFromURL
                ) || null;
            /*--------------*/
            if (bannerImage) {
                /*--------------*/
                if (innerWidth > 768) {
                    setBannerImage(
                        bannerImage
                            ? bannerImage.desktop
                            : BANNER_CATEGORIES[0].desktop
                    );
                    /*--------------*/
                } else {
                    /*--------------*/
                    setBannerImage(
                        bannerImage
                            ? bannerImage.mobile
                            : BANNER_CATEGORIES[0].mobile
                    );
                    /*--------------*/
                }
                /*--------------*/
            }
        }
        /*--------------*/
    }, [catIDFromURL]);
    /*--------------*/
    return (
        <section className="l-designs__banner">
            <Banner banners={[bannerImage]} />
        </section>
    );
}

export default BannerContainer;
