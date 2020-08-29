import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Slider from "react-slick";
import CollectionItem from "./CollectionItem";
import CollectionDamDuTiec from "../../../../assets/Image/collection-dam-du-tiec.jpg";
import CollectionDamCongSo from "../../../../assets/Image/collection-dam-cong-so.jpg";
import CollectionDamDaoPho from "../../../../assets/Image/collection-dam-dao-pho.jpg";

HomeCollections.propTypes = {
    collectionInfo: PropTypes.array,
};
HomeCollections.defaultProps = {
    collectionInfo: [],
};

const COLLECTION_INFO = [
    {
        id: "damdaopho",
        name: "Đầm Dạo Phố",
        image: CollectionDamDaoPho,
        desc: "Thoải mái lựa chọn khi ra đường.",
    },
    {
        id: "damdutiec",
        name: "Đầm Dư Tiệc",
        image: CollectionDamDuTiec,
        desc: "Thoải mái lựa chọn khi ra đường.",
    },
    {
        id: "damcongso",
        name: "Đầm Công Sở",
        image: CollectionDamCongSo,
        desc: "Thoải mái lựa chọn khi ra đường.",
    },
];

function AutoSlidesPerView(props) {
    /*--------------*/
    const params = {
        swipeToSlide: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        speed: 500,
    };

    if (!COLLECTION_INFO) return <Fragment />;
    return (
        <Slider {...params}>
            {COLLECTION_INFO.map((collection, index) => {
                return (
                    (
                        <CollectionItem
                            key={index}
                            collectionInfo={collection}
                        />
                    ) || <Fragment />
                );
            })}
        </Slider>
    );
}
/*--------------*/

function HomeCollections(props) {
    const isDesktop = window.innerWidth > 768;
    if (isDesktop) {
        return (
            <div className="c-home-collections">
                <h2 className="c-home-collections__title">Bộ Sưu Tập</h2>
                <div className="c-home-collections__list">
                    <CollectionItem collectionInfo={COLLECTION_INFO[0]} />
                    <CollectionItem collectionInfo={COLLECTION_INFO[1]} />
                    <CollectionItem collectionInfo={COLLECTION_INFO[2]} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="c-home-collections">
                <h2 className="c-home-collections__title">Bộ Sưu Tập</h2>
                <div className="c-home-collections__list">
                    {AutoSlidesPerView(props)}
                </div>
            </div>
        );
    }
}

export default HomeCollections;
