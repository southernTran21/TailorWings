import {
    updateFetchedBestSellers,
    updateFetchedDesigns,
    updateFetchedCategories,
    updateFetchedCollections,
} from "actions";
import { BackTop } from "antd";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Media from "react-media";
import { useDispatch } from "react-redux";
import { getAllData } from "services/Fundamental";
import { getBestSellers } from "services/HomepageFunction";
import HomeMobile from "./HomeMobile";
import HomeDesktop from "./HomeDesktop";

const initGA = () => {
    ReactGA.initialize("UA-159143322-2");
};

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        initGA();
        logPageView();
        /*--------------*/
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        /*--------------*/
        Promise.all([
            getBestSellers(),
            getAllData("designs"),
            getAllData("categories"),
            getAllData("collections"),
        ]).then((result) => {
            if (result.length > 0) {
                /*--------------*/
                const fetchedBestSellers = [...result[0]];
                const fetchedDesigns = [...result[1]];
                const fetchedCategories = [...result[2]];
                const fetchedCollections = [...result[3]];
                /*--------------*/
                const action_updateFetchedBestSellers = updateFetchedBestSellers(
                    fetchedBestSellers
                );
                dispatch(action_updateFetchedBestSellers);
                /*--------------*/
                const action_updateFetchedDesigns = updateFetchedDesigns(
                    fetchedDesigns
                );
                dispatch(action_updateFetchedDesigns);
                /*--------------*/
                const action_updateFetchedCategories = updateFetchedCategories(
                    fetchedCategories
                );
                dispatch(action_updateFetchedCategories);
                /*--------------*/
                const action_updateFetchedCollections = updateFetchedCollections(
                    fetchedCollections
                );
                dispatch(action_updateFetchedCollections);
                /*--------------*/
            }
        });
        /*--------------*/
    }, []);

    function renderContentHandling() {
        /*--------------*/
        return (
            <Media queries={{ small: { maxWidth: 750 } }}>
                {(matches) =>
                    matches.small ? (
                        <React.Fragment>
                            <HomeMobile />
                            <BackTop />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <HomeDesktop />
                            <BackTop />
                        </React.Fragment>
                    )
                }
            </Media>
        );
    }

    return <React.Fragment>{renderContentHandling()}</React.Fragment>;
}

export default Home;

// let timeOut;
// export default class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isPageLoading: false,
//             bestSellers: null,
//             designs: null,
//         };
//     }

//     componentDidMount() {
//         initGA();
//         logPageView();
//         /*--------------*/
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//         });
//         /*--------------*/
//         Promise.all([getBestSellers(), getAllData("designs")]).then(
//             (result) => {
//                 if (result.length == 2) {
//                     this.setState({
//                         bestSellers: result[0],
//                         designs: result[1],
//                     });
//                 }
//             }
//         );
//         /*--------------*/

//         // if (this.props.history.location.state != null) {
//         //     if (this.props.history.location.state.prevPath != null) {
//         //         this.setState({
//         //             isPageLoading: false,
//         //         });
//         //     } else {
//         //         timeOut = setTimeout(
//         //             () => this.setState({ isPageLoading: false }),
//         //             2000
//         //         );
//         //     }
//         // } else {
//         //     timeOut = setTimeout(
//         //         () => this.setState({ isPageLoading: false }),
//         //         2000
//         //     );
//         // }
//     }

//     // componentWillMount() {
//     //     clearTimeout(timeOut);
//     // }

//     renderContentHandling = () => {
//         const { isPageLoading, bestSellers, designs } = this.state;
//         /*--------------*/
//         if (isPageLoading) {
//             return <PageLoading />;
//         } else {
//             /*--------------*/
//             return (
//                 <Media queries={{ small: { maxWidth: 750 } }}>
//                     {(matches) =>
//                         matches.small ? (
//                             <React.Fragment>
//                                 <HomeMobile
//                                     bestSellers={bestSellers}
//                                     designs={designs}
//                                 />
//                                 <BackTop />
//                             </React.Fragment>
//                         ) : (
//                             <React.Fragment>
//                                 <HomeDesktop
//                                     bestSellers={bestSellers}
//                                     designs={designs}
//                                 />
//                                 <BackTop />
//                             </React.Fragment>
//                         )
//                     }
//                 </Media>
//             );
//             /*--------------*/
//         }
//     };

//     render() {
//         return <React.Fragment>{this.renderContentHandling()}</React.Fragment>;
//     }
// }
