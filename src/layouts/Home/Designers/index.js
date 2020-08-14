import HomeDesigners from "components/Pages/Home/Designers";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

// const DESIGNER_OBJECT = {
//     name: "Vũ Thị Phương Anh",
//     address: "TP.Hồ Chí Minh",
//     designsImage: new Array(57).fill(""),
//     avatar: "",
// };

// const DESIGNER_ARRAY = new Array(3).fill(DESIGNER_OBJECT);
const TITLE = ["Nhà Thiết Kế Nổi Bật", "Tham Gia Cộng Đồng", "Nhà Thiết Kế"];

function DesignersContainer() {
    /*--------------*/
    const designers = useSelector((state) => state.common.designers);
    const products = useSelector((state) => state.common.products);
    /*--------------*/
    const [designerList, setDesignerList] = useState([]);

    useEffect(() => {
        /*--------------*/
        if (designers.length > 0 && products.length > 0) {
            /*--------------*/
            let desingerInfo = designers.map((designer) => {
                /*--------------*/
                let designList = [...designer.designs];
                let designImages = [];
                /*--------------*/
                designList.forEach((design) => {
                    /*--------------*/
                    let relatedProducts =
                        products.find((product) => {
                            if (
                                product.designID === design &&
                                product.default
                            ) {
                                return product;
                            }
                        }) || "";
                    /*--------------*/
                    designImages.push(relatedProducts.image[0]);
                });
                /*--------------*/
                designer.designImages = designImages;
                return designer;
            });
            /*--------------*/
            if (desingerInfo.length > 0) {
                setDesignerList(desingerInfo);
            }
        }
    }, [designers, products]);

    if (designerList.length < 1) return <Fragment />;
    return (
        <section className="l-home__designers">
            <HomeDesigners title={TITLE} designers={designerList} />
        </section>
    );
}

export default DesignersContainer;
