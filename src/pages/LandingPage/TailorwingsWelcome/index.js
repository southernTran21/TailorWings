import React, { Component } from "react";
import Media from "react-media";
import MobileVersion from "./MobileVersion";
import DesktopVersion from "./DesktopVersion";
class TailorwingsWelcome extends Component {
    render() {
        const { history } = this.props;
        return (
            <Media queries={{ small: { maxWidth: 750 } }}>
                {(matches) =>
                    matches.small ? <MobileVersion history={history}/> : <DesktopVersion history={history}/>
                }
            </Media>
        );
    }
}

export default TailorwingsWelcome;
