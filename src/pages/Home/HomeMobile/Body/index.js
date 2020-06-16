import React, { Component } from "react";
import AboutTailorWings from "./AboutTailorWings";
import BodyHeader from "./BodyHeader";
import Categories from "./Categories";
import Collections from "./Collections";
import Counterpart from "./Counterpart";
import FourSteps from "./FourSteps";
import Passion from "./Passion";
import StrikingDesigns from "./StrikingDesigns";

class Body extends Component {
    render() {
        return (
                <div className="bodyPage">
                    <BodyHeader />
                    <FourSteps />
                    <StrikingDesigns bestSellers={this.props.bestSellers}/>
                    <Categories
                        categories={this.props.categories}
                    />
                    <Collections collections={this.props.collections} />
                    <AboutTailorWings />
                    <Counterpart />
                    <Passion />
                </div>
        );
    }
}

export default Body;
