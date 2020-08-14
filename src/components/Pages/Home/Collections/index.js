import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Slider from "react-slick";
import CollectionItem from "./CollectionItem";
import CollectionDamDaoPho from "../../../../assets/Image/dam-dao-pho-collection.png";

HomeCollections.propTypes = {
    collectionInfo: PropTypes.array,
};
HomeCollections.defaultProps = {
    collectionInfo: [],
};

function AutoSlidesPerView(props) {
    const params = {
        swipeToSlide: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        speed: 500,
    };
    const collectionsInfo = [
        {
            id: "damdaopho",
            name: "Đầm Dạo Phố",
            image: CollectionDamDaoPho,
            desc: "Thoải mái lựa chọn khi ra đường."
        },
        {
            id: "damdutiec",
            name: "Đầm Dư Tiệc",
            image: CollectionDamDaoPho,
            desc: "Thoải mái lựa chọn khi ra đường."
        },
        {
            id: "damcongso",
            name: "Đầm Công Sở",
            image: CollectionDamDaoPho,
            desc: "Thoải mái lựa chọn khi ra đường."
        },
        
    ];

    if (!collectionsInfo) return <Fragment />;
    return (
        <Slider {...params}>
            {collectionsInfo.map((collection, index) => {
                return <CollectionItem key={index} collectionInfo={collection}/> || <Fragment />;
            })}
        </Slider>
    );
}

function HomeCollections(props) {
    return (
        <div className="c-home-collections">
            <h2 className="c-home-collections__title">Bộ Sưu Tập</h2>
            <div className="c-home-collections__list">
                {AutoSlidesPerView(props)}
            </div>
        </div>
    );
}

export default HomeCollections;
