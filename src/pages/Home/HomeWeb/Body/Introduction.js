import React, { Component } from "react";

export default class Introduction extends Component {
    render() {
        return (
            <div className="introduction d-flex flex-column justify-content-center align-items-center fontMontserrat">
                <span>We Tailor Your Wings</span>
                <span>
                    Tự do lựa chọn để thể hiện phong cách của chính bạn.{" "}
                    <span className="text-bold">
                        Tất cả có trên cùng<br/> một ứng dụng.
                    </span>
                </span>
            </div>
        );
    }
}
