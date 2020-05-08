import React, { Component, lazy, Suspense } from "react";

const BodyHeader = lazy(() => import("./BodyHeader"));
const FourSteps = lazy(() => import("./FourSteps"));
const StrikingDesigns = lazy(() => import("./StrikingDesigns"));
const Categories = lazy(() => import("./Categories"));
const Collections = lazy(() => import("./Collections"));
const AboutTailorWings = lazy(() => import("./AboutTailorWings"));
const Counterpart = lazy(() => import("./Counterpart"));
const Passion = lazy(() => import("./Passion"));

class Body extends Component {
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <div className="bodyPage">
                    <BodyHeader />
                    <FourSteps />
                    <StrikingDesigns
                        bestSellerInfo={this.props.bestSellerInfo}
                    />
                    <Categories
                        visibilityProducts={this.props.visibilityProducts}
                    />
                    <Collections collectionsInfo={this.props.collectionsInfo} />
                    <AboutTailorWings />
                    <Counterpart />
                    <Passion />
                </div>
            </Suspense>
        );
    }
}

export default Body;
