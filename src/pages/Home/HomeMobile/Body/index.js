import React, { Component, lazy, Suspense } from "react";
// import BodyHeader from "./BodyHeader";
// import FourSteps from "./FourSteps";
// import StrikingDesigns from "./StrikingDesigns";
// import Categories from "./Categories";
// import Collections from "./Collections";
// import AboutTailorWings from "./AboutTailorWings";
// import Counterpart from "./Counterpart";
// import Passion from "./Passion";
// import LazyLoad from "react-lazy-load";

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
        let maxHeight = window.innerHeight;
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
                    {/* <LazyLoad
                    height={"fit-content"}
                    offsetVertical={300}
                    // throttle={250}
                    onContentVisible={() => console.log('BodyHeader')}
                >
                    <BodyHeader />
                </LazyLoad>
                <LazyLoad
                    height={"fit-content"}
                    offsetVertical={300}
                    // throttle={250}
                    onContentVisible={() => console.log('FourSteps')}
                >
                    <FourSteps />
                </LazyLoad>
                <LazyLoad
                    height={"fit-content"}
                    offsetVertical={300}
                    // throttle={250}
                    onContentVisible={() => console.log('StrikingDesigns')}
                >
                    <StrikingDesigns
                        bestSellerInfo={this.props.bestSellerInfo}
                    />
                </LazyLoad>
                <LazyLoad
                    height={"fit-content"}
                    offsetVertical={300}
                    // throttle={250}
                    onContentVisible={() => console.log('Categories')}
                >
                    <Categories
                        visibilityProducts={this.props.visibilityProducts}
                    />
                </LazyLoad>
                <LazyLoad
                    height={"fit-content"}
                    offsetVertical={300}
                    // throttle={250}
                    onContentVisible={() => console.log('Collections')}
                >
                    <Collections collectionsInfo={this.props.collectionsInfo} />
                </LazyLoad>
                <LazyLoad
                    height={"fit-content"}
                    offsetVertical={300}
                    // throttle={250}
                    onContentVisible={() => console.log('AboutTailorWings')}
                >
                    <AboutTailorWings />
                </LazyLoad>
                <LazyLoad
                    height={"fit-content"}
                    offsetVertical={300}
                    // throttle={250}
                    onContentVisible={() => console.log('Counterpart')}
                >
                    <Counterpart />
                </LazyLoad>
                <LazyLoad
                    height={"fit-content"}
                    offsetVertical={300}
                    // throttle={250}
                    onContentVisible={() => console.log('Passion')}
                >
                    <Passion />
                </LazyLoad> */}
                </div>
            </Suspense>
        );
    }
}

export default Body;
