import React, { Fragment, useRef } from "react";
import closeButton from "../../../assets/Icon/login-close.svg";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import loader from "assets/Image/image-loader.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactImageAppear from "react-image-appear";
import { updatePageFixedTopStatus } from "actions";
import { WHITE_PRODUCT_SOURCE_LINK } from "../../../constants";

function WhiteProductModal() {
    /*--------------*/
    const isPageFixedTop = useSelector((state) => state.common.isPageFixedTop);
    const selectedWhiteProduct = useSelector(
        (state) => state.common.selectedWhiteProduct
    );
    /*--------------*/
    const swiperRef = useRef(null);
    /*--------------*/
    const dispatch = useDispatch();
    /*********************************
     *  Description: handle slide move
     *
     *
     *  Call by:
     */
    function onSlide(isNext) {
        if (swiperRef.current) {
            if (isNext) {
                swiperRef.current.swiper.slideNext();
            } else {
                swiperRef.current.swiper.slidePrev();
            }
        }
    }
    /************_END_****************/
    /*********************************
     *  Description:
     *
     *
     *  Call by:
     */
    function onModalClose() {
        /*--------------*/
        const action_updatePageFixedTopStatus = updatePageFixedTopStatus();
        dispatch(action_updatePageFixedTopStatus);
        /*--------------*/
    }
    /************_END_****************/
    /*********************************
     *  Description: handle click on bg to close
     *
     *
     *  Call by:
     */
    function onBackgroundClick(e) {
        if (
            e.target.className ===
            "c-white-product-modal c-white-product-modal--open"
        ) {
            onModalClose();
        }
    }
    /************_END_****************/
    if (!selectedWhiteProduct) return <Fragment />;
    /*--------------*/
    const { image, name, id } = selectedWhiteProduct;
    /*--------------*/
    let imageList = [image.T, image.C, image.S];
    imageList =
        image.pattern !== undefined && image.pattern !== null
            ? [...imageList, image.pattern]
            : imageList;
    /*--------------*/
    let srcLink =
        WHITE_PRODUCT_SOURCE_LINK.find((src) => src.id === id) || null;
    srcLink = srcLink ? srcLink.link : "tailorwings.com";
    /*--------------*/
    return (
        <div
            className={classNames("c-white-product-modal", {
                "c-white-product-modal--open": isPageFixedTop,
            })}
            onClick={(e) => onBackgroundClick(e)}
        >
            <div className="c-white-product-modal__content">
                <div
                    className="c-white-product-modal__close"
                    onClick={onModalClose}
                >
                    <img src={closeButton} alt="close-button" />
                </div>
                <div className="c-white-product-modal__detail">
                    <div className="c-white-product-modal__image">
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                        >
                            {imageList.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        {item !== "" && item ? (
                                            <img
                                                className="c-white-product-modal__image-item"
                                                key={index}
                                                src={item}
                                                alt="white-product"
                                            />
                                        ) : (
                                            <div className="c-white-product-modal__image-item"></div>
                                        )}
                                    </SwiperSlide>
                                    // <SwiperSlide key={index}>
                                    //     <ReactImageAppear
                                    //         className="c-white-product-modal__image--wrapper"
                                    //         src={item || ""}
                                    //         animationDuration="1s"
                                    //         loader={loader}
                                    //         loaderStyle={{
                                    //             backgroundColor: "transparent",
                                    //         }}
                                    //         placeholderStyle={{
                                    //             backgroundColor: "transparent",
                                    //         }}
                                    //     />
                                    // </SwiperSlide>
                                );
                            })}
                            <div
                                class="swiper-button-next"
                                name="next"
                                onClick={() => onSlide(true)}
                            >
                                <i class="fas fa-chevron-right"></i>
                            </div>
                            <div
                                class="swiper-button-prev"
                                name="prev"
                                onClick={() => onSlide(false)}
                            >
                                <i class="fas fa-chevron-left"></i>
                            </div>
                        </Swiper>
                    </div>
                    <div className="c-white-product-modal__text">
                        <span className="c-white-product-modal__title">
                            Bạn muốn chọn mua {name} ?
                        </span>
                        <span className="c-white-product-modal__desc">
                            Bạn sẽ được THỎA THÍCH LỰA CHỌN: VẢI(chất liệu + họa
                            tiết) với bất kỳ SỐ ĐO nào cho thiết kế này.
                        </span>
                        <a
                            href="https://www.messenger.com/t/TailorWings"
                            target="_blank"
                        >
                            <button className="c-white-product-modal__button">
                                BẤM VÀO ĐÂY
                            </button>
                        </a>
                        <span className="c-white-product-modal__desc">
                            Thời trang đơn giản là sự vừa vặn và được may riêng
                            cho chính bạn.
                        </span>
                        <span className="c-white-product-modal__desc">
                            Giá chỉ từ 499k. Nhận đầm trong 3-5 ngày làm việc.
                        </span>
                        <span className="c-white-product-modal__desc">
                            Thông tin sản phẩm gốc:{" "}
                            <a href={srcLink} target="_blank">{srcLink}</a>
                        </span>
                        <span className="c-white-product-modal__desc">
                            HÃY ĐỂ TAILOR WINGS GIÚP BẠN
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhiteProductModal;
