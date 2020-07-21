import IntroItem from "components/Pages/Home/IntroItem";
import React from "react";
import { INTRODUCTION_SUB_TITLE, INTRODUCTION_TITLE, INTRODUCTION_ARRAY } from "../../../constants";

IntroductionContainer.propTypes = {};

function IntroductionContainer(props) {
    return (
        <section className="home-introduction">
            <h2 className="home-introduction__title">{INTRODUCTION_TITLE}</h2>
            <p className="home-introduction__sub-title">
                {INTRODUCTION_SUB_TITLE}
            </p>
            <ul className="home-introduction__list">
                {INTRODUCTION_ARRAY.map((title, index) => {
                    return <IntroItem text={title} key={index} />
                }
                )}
            </ul>
        </section>
    );
}

export default IntroductionContainer;
