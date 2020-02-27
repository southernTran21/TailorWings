import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
import classNames from 'classnames'

export default class SelectionCategory extends Component {
    AutoSlidesPerView = () => {
        const { categoriesInfo, currentActiveCategory } = this.props;
        const params = {
            slidesPerView: 'auto',
            spaceBetween: 10,
            slideToClickedSlide: true,
            centeredSlides: true,
            centeredSlidesBounds: true
        };
        let isAllActive = currentActiveCategory === 'all';
        return (
            <Swiper {...params}>
                <Link
                    style={{
                        height: 'fit-content',
                        width: 'fit-content',
                        border: 'none',
                        textDecoration: 'none',
                    }}
                    to={{
                        pathname: '/shopping-store',
                        search: '?cat=all'
                    }}
                    onClick={() => this.props.categoryActiveHandling('all')}
                >
                    <div className={classNames('contentSelection', { active: isAllActive })}>
                        <span>Tất cả</span>
                    </div>
                </Link>

                {categoriesInfo.map((category, index) => {
                    let isActive = currentActiveCategory === category.id; 
                    return (
                        <Link
                            key={index}
                            style={{
                                height: 'fit-content',
                                width: 'fit-content',
                                border: 'none',
                                textDecoration: 'none',
                            }}
                            to={{
                                pathname: '/shopping-store',
                                search: `?cat=${category.id}`
                            }}
                            onClick={() => this.props.categoryActiveHandling(category.id)}
                        >
                            <div key={index} className={classNames('contentSelection', { active: isActive })}>
                                <span>{category.name}</span>
                            </div>
                        </Link>
                    )
                })}
            </Swiper>
        );
    };

    render() {
        return (
            <div className='carousel-wraper'>{this.AutoSlidesPerView()}</div>
        );
    }
}
