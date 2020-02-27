import React, { Component } from 'react'
import Media from 'react-media';
import HomeWeb from './HomeWeb/Index';
import HomeMobile from './HomeMobile/Index';
import ReactGA from 'react-ga'

const initGA = () => {
    console.log('initGA');
    ReactGA.initialize('UA-159143322-1')
}

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search)
}

export default class Home extends Component {

    componentDidMount() {
        initGA()
        logPageView()
    }

    render() {
        return (
            <Media queries={{ small: { maxWidth: 1024 } }}>
                {matches =>
                    matches.small ?
                        (
                            <HomeMobile
                                history={this.props.history}
                                visibilityProducts={this.props.visibilityProducts}
                            />
                        ) :
                        (
                            <HomeWeb />
                        )
                }
            </Media>
        )
    }
}
