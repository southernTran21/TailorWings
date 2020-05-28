import React, { Component } from "react";
import HeaderAdmin from "./HeaderAdmin";
import Sidebar from "./Sidebar";
import ReactGA from "react-ga";
import AdminSidebar from '../../components/Admin/AdminSideBar'
import Content from "./Content/index";
import './Admin.scss';

const initGA = () => {
    ReactGA.initialize("UA-159143322-1");
};

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

export class Admin extends Component {
    componentDidMount() {
        initGA();
        logPageView();
    }
    render() {
        const { match, history } = this.props; //keep this
        return (
            <div className="admin">

                {/* <AdminSidebar />
                <Content /> */}

                {/* keep this */}
                <HeaderAdmin history={history} />
                <Sidebar match={match} history={history} />
                {/* keep this */}

            </div>  
        );
    }
}

export default Admin;
