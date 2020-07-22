import IntroItem from "components/Pages/Home/Introduction/IntroItem";
import React from "react";
import {
    INTRODUCTION_ARRAY,
    INTRODUCTION_SUB_TITLE,
    INTRODUCTION_TITLE,
} from "../../../../constants";

function HomeIntroduction(props) {
    return (
        <div className="c-home-introduction">
            <h2 className="c-home-introduction__title">{INTRODUCTION_TITLE}</h2>
            <p className="c-home-introduction__sub-title">
                {INTRODUCTION_SUB_TITLE}
            </p>
            <ul className="c-home-introduction__list">
                {INTRODUCTION_ARRAY.map((title, index) => {
                    return <IntroItem text={title} key={index} />;
                })}
            </ul>
        </div>
    );
}

export default HomeIntroduction;
