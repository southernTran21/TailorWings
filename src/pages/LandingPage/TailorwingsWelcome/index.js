import React, { Component } from "react";
import Media from "react-media";
import MobileVersion from "./MobileVersion";
import DesktopVersion from "./DesktopVersion";
class TailorwingsWelcome extends Component {
    render() {
        return (
            <Media queries={{ small: { maxWidth: 750 } }}>
                {(matches) =>
                    matches.small ? <MobileVersion /> : <DesktopVersion />
                }
            </Media>
        );
    }
}

export default TailorwingsWelcome;
