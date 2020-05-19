import React from "react";
import { useSelector } from "react-redux";

function Note() {
    const orderDetail = useSelector(
        (state) => state.adminOrderReducer.orderDetail
    );

    if (!orderDetail)
        return <div className="admin-order-detail__note d-flex flex-column" />;

    const { notes } = orderDetail;

    return (
        <div className="admin-order-detail__note d-flex flex-column">
            <span className="admin-order-detail__note--text1">Note</span>
            <span className="admin-order-detail__note--text2">
                {notes !== '' ? notes : 'Not any note for this order' }
            </span>
        </div>
    );
}

export default Note;
