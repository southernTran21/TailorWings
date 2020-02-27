import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
} from 'react-router-dom'
import Design from './DesignPage/Design';
import Fabrics from './FabricsPage/Fabrics';

function CurrentContent(props) {
    switch (props.contentID) {
        case 'designs':
            return <Design />
            break;
        case 'fabrics'  :
            return <Fabrics />
            break;
        default:
            return <div>404 Error Not Found</div>
            break;
    }
}

class Content extends Component {
    render() {
        let { path, url } = this.props.match;
        let { contentID } = this.props.match.params;
        return (
            <Router>
                <Switch>
                    <Route path={`${path}`} component={() => <CurrentContent contentID={contentID} />} />
                </Switch>
            </Router>
        );
    }
}

export default Content;