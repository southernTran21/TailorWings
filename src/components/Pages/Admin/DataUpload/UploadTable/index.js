import PropTypes from "prop-types";
import React, { Fragment } from "react";

AdminPatternTable.propTypes = {
    headers: PropTypes.array,
    data: PropTypes.array,
};

AdminPatternTable.defaultProps = {
    headers: null,
    data: null,
};

function AdminPatternTable(props) {
    if (!props.headers || !props.data) return <Fragment />;
    return (
        <div className="c-admin-data-upload-table">
            <div className="c-admin-data-upload-table__header">
                {props.headers.map((header, index) => {
                    return (
                        <span
                            key={index}
                            className="c-admin-data-upload-table__col"
                        >
                            {header}
                        </span>
                    );
                })}
            </div>
            <div className="c-admin-data-upload-table__data">
                {props.data.map((param, index1) => {
                    const values = props.headers.map((header) => {
                        return param[header]
                    })
                    return (
                        <div
                            key={index1}
                            className="c-admin-data-upload-table__row"
                        >
                            {values.map((cellValue, index2) => {
                                return (
                                    <span
                                        key={index2}
                                        className="c-admin-data-upload-table__col"
                                    >
                                        {cellValue}
                                    </span>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default AdminPatternTable;
