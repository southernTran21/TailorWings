import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CollectionItem from "./CollectionItem";
import Swiper from "react-id-swiper";
import Slider from "react-slick";

HomeCollections.propTypes = {
    collectionInfo: PropTypes.array,
};
HomeCollections.defaultProps = {
    collectionInfo: [],
};

function AutoSlidesPerView(props) {
    // let { collectionsInfo } = props;
    const params = {
        swipeToSlide: true,
        infinite: true,
        initialSlide: 3,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        speed: 1000,
    };
    const collectionsInfo = new Array(3).fill("0");
    // if (collectionsInfo == null) {
    //     collectionsInfo = [];
    // }
    // return collectionsInfo.length > 0 ? (
    //     <Swiper {...params}>
    //         {collectionsInfo.map((collection, index) => {
    //             let imageCollection = this.getCollectionImage(collection.id);
    //             return <CollectionItem key={index} />;
    //         })}
    //     </Swiper>
    // ) : (
    //     ""
    // );
    if (!collectionsInfo) return <Fragment />;
    return (
        <Slider {...params}>
            {collectionsInfo.map((collection, index) => {
                // let imageCollection = this.getCollectionImage(collection.id);
                return <CollectionItem key={index} /> || <Fragment />;
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
