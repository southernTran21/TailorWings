import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DefaultSizeInput from "components/DefaultSizeInput";
import ModifiedSizeInput from "components/ModifiedSizeInput";
import { useSelector, useDispatch } from "react-redux";
import { updateBodyMetric, updateSize } from "actions";

function OptionContentContainer() {
    let INITIAL_SIZE_INFO = [
        {
            size: "XS",
            isActive: false,
        },
        {
            size: "S",
            isActive: false,
        },
        {
            size: "M",
            isActive: false,
        },
        {
            size: "L",
            isActive: false,
        },
        {
            size: "XL",
            isActive: false,
        },
        {
            size: "XXL",
            isActive: false,
        },
    ];
    /*--------------*/
    const isDefaultInput = useSelector((state) => state.size.isDefaultInput);
    const size = useSelector((state) => state.size.size);
    const bodyMetric = useSelector((state) => state.size.bodyMetric);
    /*--------------*/
    const [sizeInfo, setSizeInfo] = useState(INITIAL_SIZE_INFO);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        if (size) {
            let newSizeInfo = sizeInfo.map((info) => {
                if (info.size === size.id) {
                    info.isActive = true;
                } else {
                    info.isActive = false;
                }
                return info;
            });
            /*--------------*/
            setSizeInfo(newSizeInfo);
        } else {
            setSizeInfo(INITIAL_SIZE_INFO);
        }
    }, [size]);

    /*********************************
     *  Description: handle size change
     *
     *
     *  Call by:
     */
    function onSizeChange(size) {
        if (size) {
            const action_updateSize = updateSize(size);
            dispatch(action_updateSize);
        }
    }
    /************_END_****************/

    /*********************************
     *  Description: handle bodyMetric change
     *
     *
     *  Call by:
     */
    function onBodyMetricChange(bodyMetric) {
        if (bodyMetric) {
            const action_updateBodyMetric = updateBodyMetric(bodyMetric);
            dispatch(action_updateBodyMetric);
        }
    }
    /************_END_****************/

    return (
        <div className="l-size__option-content">
            {isDefaultInput ? (
                <DefaultSizeInput
                    sizeInfo={sizeInfo}
                    onSizeChange={onSizeChange}
                />
            ) : (
                <ModifiedSizeInput
                    bodyMetric={bodyMetric}
                    onBodyMetricChange={onBodyMetricChange}
                />
            )}
        </div>
    );
}

export default OptionContentContainer;
