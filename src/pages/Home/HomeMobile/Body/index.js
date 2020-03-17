import React, { Component } from "react";
import BodyHeader from "./BodyHeader";
import FourSteps from "./FourSteps";
import StrikingDesigns from "./StrikingDesigns";
import Categories from "./Categories";
import Collections from "./Collections";
import AboutTailorWings from "./AboutTailorWings";
import Counterpart from "./Counterpart";
import Passion from "./Passion";

class Body extends Component {
    render() {
        return (
            <div className="bodyPage">
                <BodyHeader />
                <FourSteps />
                <StrikingDesigns bestSellerInfo={this.props.bestSellerInfo} />
                <Categories
                    visibilityProducts={this.props.visibilityProducts}
                />
                <Collections collectionsInfo={this.props.collectionsInfo} />
                <AboutTailorWings />
                <Counterpart />
                <Passion />
            </div>
        );
    }
}

export default Body;
