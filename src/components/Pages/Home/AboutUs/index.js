import React from "react";
import aboutUS from "../../../../assets/Image/about-us-tailorwings.png";

function HomeAboutUs() {
    return (
        <a className="c-home-about-us-voucher" href="https://www.facebook.com/TailorWings" target="_blank">
            <img

                className="c-home-about-us__image"
                src={aboutUS}
                alt="about-tailor-wings"
            />
        </a>
    );
}

export default HomeAboutUs;
