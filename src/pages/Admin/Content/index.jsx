import React from "react";
import { Suspense } from "react";
import { Switch, Redirect, Route, useRouteMatch } from "react-router-dom";

//lazy load - Code splitting
const Order = React.lazy(() => import("./Order"));

function Content() {
    const match = useRouteMatch();
    return (
        <div className="admin-content">
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Redirect exact from={`${match.url}`} to="/admin/order" />

                    <Route path={`${match.url}/order`} component={Order} />
                </Switch>
            </Suspense>
        </div>
    );
}

export default Content;
