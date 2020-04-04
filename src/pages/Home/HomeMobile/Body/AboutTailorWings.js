import React, { Component } from "react";

import Image from "../../../../assets/imageHomePage/Dottie.jpg";

class AboutTailorWings extends Component {
    render() {
        return (
            <div className="weYour-wraper d-flex flex-column justify-content-around">
                <div className="title__weyour d-flex flex-column justify-content-center align-items-center">
                    <span className="title1">We Tailor Your Wings</span>
                    <span className="text-center title2">
                        “Qua năm tháng, tôi thấu hiểu rằng điều quan trọng của
                        một bộ váy nằm ở chính người phụ nữ sẽ mặc nó” - YSL
                    </span>
                </div>
                <div className="image-wraper">
                    <img src={Image} />
                </div>
            </div>
        );
    }
}

export default AboutTailorWings;
