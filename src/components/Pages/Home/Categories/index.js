import CategoryItem from "components/Pages/Home/Categories/CategoryItem";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

function HomeCategories() {
    const isDesktop = window.innerWidth > 768;
    /*--------------*/
    const categories = useSelector((state) => state.common.categories);
    /*--------------*/

    if (!categories) return <Fragment />;
    /*--------------*/
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    /*--------------*/
    if (isDesktop) {
        return (
            <ul className="c-category-list">
                <Slider {...settings}>
                    {categories.map((category, index) => {
                        return (
                            <div key={index}>
                                <CategoryItem category={category} />
                            </div>
                        );
                    })}
                </Slider>
            </ul>
        );
    } else {
        return (
            <ul className="c-category-list">
                {categories.map((category, index) => {
                    return (
                        <CategoryItem key={index} category={category} />
                    );
                })}
            </ul>
        );
    }
}

export default HomeCategories;
