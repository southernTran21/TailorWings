import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { updateBodyMetric } from "actions";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import NumberFormat from "react-number-format";

const INPUT_LIMIT = 3;

ModifiedSizeInput.propTypes = {
    bodyMetric: PropTypes.object,
    onBodyMetricChange: PropTypes.func,
};

ModifiedSizeInput.defaultProps = {
    bodyMetric: { chest: "", waist: "", hip: "" },
    onBodyMetricChange: null,
};

function ModifiedSizeInput(props) {
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    const typingTimeoutRef = useRef(null);
    /*--------------*/
    if (!props.onBodyMetricChange) return <Fragment />;

    /*********************************
     *  Description:
     *
     *
     *  Call by:
     */
    function onInputChange(e) {
        /*--------------*/
        const value = e.target.value;
        const name = e.target.name;
        /*--------------*/
        if (value.length < 0 || value.length > INPUT_LIMIT) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            let newBodyMetric = { ...props.bodyMetric, [name]: value };
            /*--------------*/
            const action_updateBodyMetric = updateBodyMetric(newBodyMetric);
            dispatch(action_updateBodyMetric);
        }, 50);
    }
    /************_END_****************/
    return (
        <div class="c-size-modified">
            <label className="c-size-modified__item" for="first">
                <span className="c-size-modified__text">Ngực</span>
                <div className="c-size-modified__input-wrapper">
                    <NumberFormat
                        id="chest"
                        name="chest"
                        value={props.bodyMetric.chest}
                        className="c-size-modified__input"
                        format="###"
                        onChange={onInputChange}
                    />
                    <span className="c-size-modified__text">cm</span>
                </div>
            </label>
            <label className="c-size-modified__item" for="second">
                <span className="c-size-modified__text">Eo</span>
                <div className="c-size-modified__input-wrapper">
                    <NumberFormat
                        id="waist"
                        name="waist"
                        value={props.bodyMetric.waist}
                        className="c-size-modified__input"
                        format="###"
                        onChange={onInputChange}
                    />
                    <span className="c-size-modified__text">cm</span>
                </div>
            </label>
            <label className="c-size-modified__item" for="third">
                <span className="c-size-modified__text">Mông</span>
                <div className="c-size-modified__input-wrapper">
                    <NumberFormat
                        id="hip"
                        name="hip"
                        value={props.bodyMetric.hip}
                        className="c-size-modified__input"
                        format="###"
                        onChange={onInputChange}
                    />
                    <span className="c-size-modified__text">cm</span>
                </div>
            </label>
        </div>
    );
}

export default ModifiedSizeInput;
