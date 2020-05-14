import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { useRouteMatch, Route, Switch } from "react-router-dom";

//Lazy load - code splitting
const GeneralInfo = React.lazy(() => import("./GeneralInfo"));
const DetailInfo = React.lazy(() => import("./DetailInfo"));

function Order() {
    const match = useRouteMatch();
    console.log("match :>> ", match);
    return (
        <div className="admin-order">
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route
                        exact
                        path={`${match.url}`}
                        component={GeneralInfo}
                    />
                    <Route
                        path={`${match.url}/:orderID`}
                        component={DetailInfo}
                    />
                </Switch>
            </Suspense>
        </div>
    );
}

export default Order;
