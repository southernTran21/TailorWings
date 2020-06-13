import { message, Select } from "antd";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRenderList } from "../../../actions";
import { updateDocument } from "../../../services/Fundamental";

OrderStatus.propTypes = {
    orderID: PropTypes.string,
    status: PropTypes.string,
    className: PropTypes.string,
};

OrderStatus.defaultProps = {
    orderID: "",
    status: "",
    className: "",
};

const { Option } = Select;
const STATUS_COLOR = [
    {
        status: "new",
        color: "#387A1F",
    },
    {
        status: "pending",
        color: "#F09033",
    },
    {
        status: "done",
        color: "#5A7FA8",
    },
    {
        status: "cancled",
        color: "#E5484A",
    },
];

function OrderStatus(props) {
    const { orderID, status, className } = props;
    const renderList = useSelector(
        (state) => state.adminOrderReducer.renderList
    );
    const [currentOrder, setCurrentOrder] = useState({});
    const [statusColor, setStatusColor] = useState("black");
    const [currentOrderIndex, setCurrentOrderIndex] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        /* get updatedOrder */
        if (renderList.length > 0) {
            let currentOrder = renderList.find((order, index) => {
                if (order.orderID === orderID) {
                    setCurrentOrderIndex(index);
                    return order;
                }
            });
            if (currentOrder) {
                setCurrentOrder(currentOrder);
            }
        }

        /* set status color */
        if (status != "") {
            let statusColor = getStatusColor(status);
            setStatusColor(statusColor);
        }
    }, [orderID, status, renderList]);

    /*********************************
     *  Description: set status color
     *
     *
     *  Call by: useEffect and handleStatusUpdate()
     */
    function getStatusColor(status) {
        let statusColor = STATUS_COLOR.find(
            (element) => element.status === status
        );
        if (statusColor) {
            return statusColor.color;
        } else {
            return "black";
        }
    }
    /************_END_****************/

    /*********************************
     *  Description: update status of order to firestore
     *
     *
     *  Call by: <Select>
     */
    function handleStatusUpdate(newStatus) {
        /* update order */
        if (!newStatus) return;
        let updatedOrder = { ...currentOrder };
        updatedOrder.status = newStatus;
        /* update order to firestore */
        if (!updatedOrder) return;
        updateDocument("orders", updatedOrder, updatedOrder.id).then(
            (isSuccess) => {
                if (isSuccess) {
                    message.success("Success!");
                    /* set new status color */
                    let statusColor = getStatusColor(newStatus);
                    setStatusColor(statusColor);
                    /* update renderList */
                    let updatedRenderList = [...renderList];
                    updatedRenderList[currentOrderIndex] = { ...updatedOrder };
                    /* update renderList to store */
                    const action_updateRenderList = updateRenderList(
                        updatedRenderList
                    );
                    dispatch(action_updateRenderList);
                }
            }
        );
    }
    /************_END_****************/

    return (
        <Select
            value={`${status}`}
            onChange={handleStatusUpdate}
            className={className}
            style={{
                color: statusColor,
                borderColor: statusColor,
            }}
        >
            <Option value="new">New</Option>
            <Option value="pending">Pending</Option>
            <Option value="done">Done</Option>
            <Option value="cancled">Cancled</Option>
        </Select>
    );
}

export default OrderStatus;
