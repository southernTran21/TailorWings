import React from "react";
import PropTypes from "prop-types";

Note.propTypes = {};

function Note(props) {
    return (
        <div className="admin-order-detail__note d-flex flex-column">
            <span className="admin-order-detail__note--text1">Note</span>
            <span className="admin-order-detail__note--text2">
                No notes from customer
            </span>
        </div>
    );
}

export default Note;
