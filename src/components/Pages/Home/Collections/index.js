import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import CollectionItem from "./CollectionItem";

// function AutoSlidesPerViewMobile(collections) {
//     /*--------------*/
//     const params = {
//         swipeToSlide: true,
//         infinite: true,
//         arrows: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         adaptiveHeight: true,
//         speed: 500,
//     };
//     /*--------------*/

//     if (!collections) return <Fragment />;
//     return (
//         <Slider {...params}>
//             {collections.map((collection, index) => {
//                 return (
//                     <CollectionItem key={index} collectionInfo={collection} />
//                 );
//             })}
//         </Slider>
//     );
// }
// /*--------------*/
// function AutoSlidesPerViewDesktop(collections) {
//     /*--------------*/
//     const params = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//     };
//     /*--------------*/

//     if (!collections) return <Fragment />;
//     return (
//         <Slider {...params}>
//             {collections.map((collection, index) => {
//                 return (
//                     <div key={index}>
//                         <CollectionItem collectionInfo={collection} />
//                     </div>
//                 );
//             })}
//         </Slider>
//     );
// }
// /*--------------*/

function AutoSlidesPerViewMobile(categories) {
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
    let arrangedCategories = [];
    if (categories) {
        categories.forEach((category) => {
            switch (category.id) {
                case "aodai":
                    arrangedCategories[0] = { ...category };
                    break;

                case "plussize":
                    arrangedCategories[1] = { ...category };
                    break;

                case "damxoe":
                    arrangedCategories[2] = { ...category };
                    break;

                case "damom":
                    arrangedCategories[3] = { ...category };
                    break;

                case "damsuong":
                    arrangedCategories[5] = { ...category };
                    break;

                default:
                    break;
            }
        });
    }
    /*--------------*/
    if (!categories) return <Fragment />;
    return (
        <Slider {...params}>
            {arrangedCategories.map((category, index) => {
                return <CollectionItem key={index} collectionInfo={category} />;
            })}
        </Slider>
    );
}
/*--------------*/
function AutoSlidesPerViewDesktop(categories) {
    /*--------------*/
    const params = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    /*--------------*/
    let arrangedCategories = [];
    if (categories) {
        categories.forEach((category) => {
            switch (category.id) {
                case "aodai":
                    arrangedCategories[0] = { ...category };
                    break;

                case "plussize":
                    arrangedCategories[1] = { ...category };
                    break;

                case "damom":
                    arrangedCategories[2] = { ...category };
                    break;

                case "damxoe":
                    arrangedCategories[3] = { ...category };
                    break;

                case "damsuong":
                    arrangedCategories[5] = { ...category };
                    break;

                default:
                    break;
            }
        });
    }
    /*--------------*/
    if (!arrangedCategories) return <Fragment />;
    return (
        <Slider {...params}>
            {arrangedCategories.map((category, index) => {
                return (
                    <div key={index}>
                        <CollectionItem collectionInfo={category} />
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
    // const collections = useSelector((state) => state.common.collections);
    const categories = useSelector((state) => state.common.categories);
    /*--------------*/
    // if (!collections) return <Fragment />;
    if (!categories) return <Fragment />;
    /*--------------*/
    if (isDesktop) {
        return (
            <div className="c-home-collections">
                {/* <h2 className="c-home-collections__title">Bộ Sưu Tập</h2> */}
                <h2 className="c-home-collections__title">Danh mục sản phẩm</h2>
                <div className="c-home-collections__list">
                    {/* {AutoSlidesPerViewDesktop(collections)} */}
                    {AutoSlidesPerViewDesktop(categories)}
                </div>
            </div>
        );
    } else {
        return (
            <div className="c-home-collections">
                {/* <h2 className="c-home-collections__title">Bộ Sưu Tập</h2> */}
                <h2 className="c-home-collections__title">Categories</h2>
                <div className="c-home-collections__list">
                    {/* {AutoSlidesPerViewMobile(collections)} */}
                    {AutoSlidesPerViewMobile(categories)}
                </div>
            </div>
        );
    }
}

export default HomeCollections;
