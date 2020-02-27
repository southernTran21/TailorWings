import React, { Component } from 'react';
import HeaderAdmin from './HeaderAdmin';
import Sidebar from './Sidebar';
import ReactGA from 'react-ga'

const initGA = () => {
    console.log('initGA');
    ReactGA.initialize('UA-159143322-1')
}

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search)
}

export class Admin extends Component {
    componentDidMount() {
        initGA()
        logPageView()
    }
    render() {
        const { match, history } = this.props;
        return (
            <div className="admin">
                <HeaderAdmin history={history} />
                <Sidebar match={match} history={history} />
            </div >
        );
    }
}

export default Admin;
