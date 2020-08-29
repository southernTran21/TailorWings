import HomeDesigners from "components/Pages/Home/Designers";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TITLE = ["Nhà Thiết Kế Nổi Bật", "Tham Gia Cộng Đồng", "Nhà Thiết Kế"];

function DesignersContainer() {
    /*--------------*/
    const designers = useSelector((state) => state.common.designers);
    const defaultProducts = useSelector((state) => state.common.defaultProducts);
    /*--------------*/
    const [designerList, setDesignerList] = useState([]);

    useEffect(() => {
        /*--------------*/
        if (designers.length > 0 && defaultProducts.length > 0) {
            /*--------------*/
            let desingerInfo = designers.map((designer) => {
                /*--------------*/
                let designList = [...designer.designs];
                let designImages = [];
                /*--------------*/
                designList.forEach((design) => {
                    /*--------------*/
                    let relatedProducts =
                        defaultProducts.find((product) => {
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
    }, [designers, defaultProducts]);

    if (designerList.length < 1) return <Fragment />;
    return (
        <section className="l-home__designers">
            <HomeDesigners title={TITLE} designers={designerList} />
        </section>
    );
}

export default DesignersContainer;
