import React from "react";
import PropTypes from "prop-types";
import TailorRecruitment from "../../../../assets/Image/tailor-recruitment.png";
import ButtonCTA from "components/Button/CTA";
import RecruitmentItem from "./RecruitmentItem";
import { TAILOR_RECRUITMENT_ARRAY } from "../../../../constants";

HomeTailorRecruitment.propTypes = {};

function HomeTailorRecruitment(props) {
    return (
        <div className="c-home-tailor-recruitment">
            <div className="c-home-tailor-recruitment__image">
                <img src={TailorRecruitment} alt="" />
            </div>
            <div className="c-home-tailor-recruitment__title">
                <span>We Give Tailor The Wings</span>
            </div>
            <ul className="c-home-tailor-recruitment__list">
                {TAILOR_RECRUITMENT_ARRAY.map((desc, index) => {
                    return <RecruitmentItem text={desc} key={index} />;
                })}
            </ul>
            <div className="c-home-tailor-recruitment__button">
                <ButtonCTA text="ĐĂNG KÝ NHẬN MAY" />
            </div>
        </div>
    );
}

export default HomeTailorRecruitment;
