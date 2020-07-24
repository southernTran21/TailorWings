import HomeDesigners from "components/Pages/Home/Designers";
import React from "react";

const DESIGNER_OBJECT = {
    name: "Vũ Thị Phương Anh",
    address: "TP.Hồ Chí Minh",
    designsImage: new Array(57).fill(""),
    avatar: "",
};

const DESIGNER_ARRAY = new Array(3).fill(DESIGNER_OBJECT);
const TITLE = ["Nhà Thiết Kế Nổi Bật", "Tham Gia Cộng Đồng", "Nhà Thiết Kế"]

DesignersContainer.propTypes = {};

function DesignersContainer(props) {
    return (
        <section className="l-home__designers">
            <HomeDesigners title={TITLE} designers={DESIGNER_ARRAY}/>
        </section>
    );
}

export default DesignersContainer;
