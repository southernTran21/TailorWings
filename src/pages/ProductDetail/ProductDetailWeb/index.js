import React, { Component } from "react";
import "./ProductDetailWeb.scss";
import NavBarWeb from "../../../components/NavBar/NavBarWeb/index";
import FabricSelectionWeb from "./FabricSelection";
import Steps from "./Steps";

export default class producDetailWeb extends Component {
    render() {
        return (
            <div className="pageProductDetailWeb">
                <NavBarWeb />
                <Steps/>
                <FabricSelectionWeb/>
            </div>
        );
    }
}
