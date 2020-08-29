import React from "react";
import PropTypes from "prop-types";
import DesignerInfo from "components/Pages/DesignerProfile/Info";

const DESIGNER_INFO = {
    starNumber: 4,
    name: "Phương An",
    description: `“Style is a way to say who you are without having to speak.”`,
    address: "TP. Hồ Chí Minh",
    designNumber: 37,
};

InfoContainer.propTypes = {
    starNumber: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
    designNumber: PropTypes.number,
};

InfoContainer.defaultProps = {
    starNumber: 0,
    name: "",
    description: "",
    address: "",
    designNumber: 0,
};

function InfoContainer(props) {
    const { starNumber, name, description, address, designNumber } = props;
    return (
        <div className="l-designer__info">
            <DesignerInfo
                info={{ starNumber, name, description, address, designNumber }}
            />
        </div>
    );
}

export default InfoContainer;
