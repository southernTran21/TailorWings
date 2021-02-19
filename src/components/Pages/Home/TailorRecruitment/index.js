import ButtonCTA from "components/Button/CTA";
import React from "react";
import TailorRecruitmentDesktop from "assets/Image/tailor-recruitment-desktop.png";
import TailorRecruitmentMobile from "assets/Image/tailor-recruitment-mobile.jpg";
import { TAILOR_RECRUITMENT_ARRAY } from "../../../../constants";
import RecruitmentItem from "./RecruitmentItem";

const innerWidth = window.innerWidth;
const image = innerWidth > 768 ? TailorRecruitmentDesktop : TailorRecruitmentMobile;

function HomeTailorRecruitment() {
    return (
        <div className="c-home-tailor-recruitment">
            <div className="c-home-tailor-recruitment__image">
                <img
                    src={image}
                    alt="tailor-recruitment-ban-la-tho-may"
                />
            </div>
            <div className="c-home-tailor-recruitment__title">
                <span>We give tailor the wings</span>
                <span className="c-home-tailor-recruitment__sub-title">
                    Bạn là thợ may?
                </span>
                <span className="c-home-tailor-recruitment__sub-title">
                    Hãy trở thành đối tác của Tailor Wings
                </span>
            </div>
            <ul className="c-home-tailor-recruitment__list">
                {TAILOR_RECRUITMENT_ARRAY.map((desc, index) => {
                    return <RecruitmentItem text={desc} key={index} />;
                })}
            </ul>
            <div className="c-home-tailor-recruitment__button">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfuRlkLX1llCN0L9ZAwmhCxLS3NT5efPxNsbRMmxT3Oe7z0qw/viewform"
                    target="_blank"
                >
                    <ButtonCTA text="ĐĂNG KÝ NHẬN MAY" />
                </a>
            </div>
        </div>
    );
}

export default HomeTailorRecruitment;
