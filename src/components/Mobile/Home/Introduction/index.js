import React from "react";
import {
    INTRO_TITLE,
    INTRO_DESC,
    STEPS_ARRAY,
} from "constants/Mobile/Home/HomeConstantMobile";
import StepItem from "./StepItem";

Introduction.propTypes = {};

function Introduction(props) {
    return (
        <div className="m-intro">
            <h3 className="m-intro__title">
                <span>{ INTRO_TITLE || '' }</span>
            </h3>
            <p className="m-intro__desc">{ INTRO_DESC || '' }</p>
            <ul className="m-intro__list">
                {STEPS_ARRAY.map((step, index) => {
                    return <StepItem text={step} key={index} />;
                }) || '' }
            </ul>
        </div>
    );
}

export default Introduction;
