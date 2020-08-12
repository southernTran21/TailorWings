import React from "react";
import PropTypes from "prop-types";

ModifiedSizeInput.propTypes = {};

function ModifiedSizeInput(props) {
    return (
        <div class="c-size-modified">
            <label className="c-size-modified__item" for="first">
                <span className="c-size-modified__text">Ngực</span>
                <div className="c-size-modified__input-wrapper">
                    <input
                        type="text"
                        id="first"
                        name="first"
                        className="c-size-modified__input"
                        maxlength="3"
                        placeholder="___"
                    />
                    <span className="c-size-modified__text">cm</span>
                </div>
            </label>
            <label className="c-size-modified__item" for="second">
                <span className="c-size-modified__text">Eo</span>
                <div className="c-size-modified__input-wrapper">
                    <input
                        type="text"
                        id="second"
                        name="second"
                        className="c-size-modified__input"
                        maxlength="3"
                        placeholder="___"
                    />
                    <span className="c-size-modified__text">cm</span>
                </div>
            </label>
            <label className="c-size-modified__item" for="third">
                <span className="c-size-modified__text">Mông</span>
                <div className="c-size-modified__input-wrapper">
                    <input
                        type="text"
                        id="third"
                        name="third"
                        className="c-size-modified__input"
                        maxlength="3"
                        placeholder="___"
                    />
                    <span className="c-size-modified__text">cm</span>
                </div>
            </label>
        </div>
    );
}

export default ModifiedSizeInput;
