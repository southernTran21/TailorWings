import React from "react";
import PropTypes from "prop-types";
import Avatar from "components/Avatar";
import Stars from "components/Stars";
import ButtonProfile from "components/Button/ButtonProfile";
import { Link } from "react-router-dom";

const NUMBER_DESIGN_RENDER = 3;

DesignerCard.propTypes = {
    designer: PropTypes.object,
};

DesignerCard.defaultProps = {
    designer: null,
};

function DesignerCard(props) {
    if (!props.designer) return <div className="c-designer-card"></div>;

    const { name, address, designImages, avatar, stars, id } = props.designer;
    const designListComponent =
        designImages.length > 0 ? (
            <div className="c-designer-card__design-list">
                <img
                    className="c-designer-card__design-image"
                    src={designImages[0]}
                    alt="designs"
                />
                <img
                    className="c-designer-card__design-image"
                    src={designImages[1]}
                    alt="designs"
                />
                <img
                    className="c-designer-card__design-image"
                    src={designImages[2]}
                    alt="designs"
                />
                <div className="c-designer-card__remain">
                    +{designImages.length - NUMBER_DESIGN_RENDER || 0}
                </div>
            </div>
        ) : (
            <div className="c-designer-card__design-list"></div>
        );

    return (
        <Link
            to={{
                pathname: "/designer-profile",
                search: `?id=${id}`,
            }}
        >
            <li className="c-designer-card">
                <div className="c-designer-card__info-content">
                    <div className="c-designer-card__avatar-wrapper">
                        <div className="c-designer-card__avatar">
                            <Avatar image={avatar || ""} />
                        </div>
                        <div className="c-designer-card__stars">
                            <Stars number={stars} />
                        </div>
                    </div>
                    <div className="c-designer-card__info-wrapper">
                        <span className="c-designer-card__name">
                            {name || ""}
                        </span>
                        <span className="c-designer-card__address">
                            {address || ""}
                        </span>
                        <div className="c-designer-card__design-number">
                            <p>{designImages.length || 0}</p>
                            <p>designs</p>
                        </div>
                        <div className="c-designer-card__button">
                            <ButtonProfile text="Xem Profile" />
                        </div>
                    </div>
                </div>
                {designListComponent}
            </li>
        </Link>
    );
}

export default DesignerCard;
