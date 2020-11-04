import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import CollectionItem from "./CollectionItem";

function AutoSlidesPerViewMobile(collections) {
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
    /*--------------*/

    if (!collections) return <Fragment />;
    return (
        <Slider {...params}>
            {collections.map((collection, index) => {
                return (
                    <CollectionItem key={index} collectionInfo={collection} />
                );
            })}
        </Slider>
    );
}
/*--------------*/
function AutoSlidesPerViewDesktop(collections) {
    /*--------------*/
    const params = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    /*--------------*/

    if (!collections) return <Fragment />;
    return (
        <Slider {...params}>
            {collections.map((collection, index) => {
                return (
                    <div key={index}>
                        <CollectionItem collectionInfo={collection} />
                    </div>
                );
            })}
        </Slider>
    );
}
/*--------------*/

function HomeCollections() {
    const isDesktop = window.innerWidth > 768;
    /*--------------*/
    const collections = useSelector((state) => state.common.collections);
    /*--------------*/
    if (!collections) return <Fragment />;
    if (isDesktop) {
        return (
            <div className="c-home-collections">
                <h2 className="c-home-collections__title">Bộ Sưu Tập</h2>
                <div className="c-home-collections__list">
                    {AutoSlidesPerViewDesktop(collections)}
                </div>
            </div>
        );
    } else {
        return (
            <div className="c-home-collections">
                <h2 className="c-home-collections__title">Bộ Sưu Tập</h2>
                <div className="c-home-collections__list">
                    {AutoSlidesPerViewMobile(collections)}
                </div>
            </div>
        );
    }
}

export default HomeCollections;
