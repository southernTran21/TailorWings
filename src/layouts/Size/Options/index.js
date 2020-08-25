import SizeOptions from "components/Pages/Size/Options";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInputStatus } from "actions";

function OptionsContainer() {
    /*--------------*/
    const isDefaultInput = useSelector((state) => state.size.isDefaultInput);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    /*********************************
    *  Description: 
    *  
    *  
    *  Call by: 
    */
    function onSizeOptionChange(isDefault) {
        const action_updateInputStatus = updateInputStatus(isDefault);
        dispatch(action_updateInputStatus);
    }
    /************_END_****************/
    return (
        <div className="l-size__options">
            <SizeOptions isDefault={isDefaultInput} onSizeOptionChange={onSizeOptionChange}/>
        </div>
    );
}

export default OptionsContainer;
