import React, { Component } from 'react'
import './MediaButton.css'
import classNames from 'classnames'
import { history } from "../../app/App"

export default class MediaButton extends Component {
    constructor(props) {
        super(props);
        let isHome = true;
        let isStore = false;
        if (this.props.history.location.pathname !== "/") {
            isHome = false
        }
        if (this.props.history.location.pathname !== "/shopping-store") {
            isStore = false
        }
        let isDisable = false;
        if (!isHome && !isStore) {
            isDisable = true;
        }
        // let isCollapse = false;
        // if ( window.location.pathname === '/' ) {
        //     isCollapse = false;
        // }else if ( window.location.pathname === '/shopping-store' ) {
        //     isCollapse = true;
        // }else {
        //     isDisable = true;
        // }

        this.state = {
            isCollapse: false,
            isHide: true,
            isFirstScroll: false,
            windowHeight: window.innerHeight,
            isChange: false,
            isHome: isHome,
            isStore: isStore,
            isDisable: isDisable
        }
        this._collapseHandler = this._collapseHandler.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        const { history } = this.props;
        this.unlisten = history.listen(location => {
            let isHome = false;
            let isStore = false;
            if (location.pathname === "/") {
                isHome = true;
            }
            if (location.pathname === "/shopping-store") {
                isStore = true;
            }
            let isDisable = false;
            if (!isHome && !isStore) {
                isDisable = true;
            }
            this.setState({
                isHome,
                isStore,
                isDisable
            });
        })
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        this.unlisten();
        window.removeEventListener("scroll", this.handleScroll);
    }

    _collapseHandler = () => {
        this.setState({ isCollapse: !this.state.isCollapse, isFirstScroll: true });
    }

    handleScroll = () => {
        const { windowHeight, isHome, isStore } = this.state;
        if (isHome || isStore) {
            const currentScrollPos = window.scrollY;
            const isChange = currentScrollPos >= (windowHeight / 4);
            if (isChange) {
                if (this.state.isFirstScroll === false) {
                    this.setState({ isHide: false })
                }
            } else {
                this.setState({ isHide: true, isFirstScroll: false })
            }
        }
    }


    render() {
        const { isHide, isCollapse, isStore, isDisable } = this.state;
        return (
            <div id="media" className={classNames({ disable: isDisable })}>
            {/*<div id="media" className={classNames({ disable: true })}> */}
                <div className={classNames("container-media", { hide: isHide })}>
                    <button id="shop" onClick={() => this.props.scrollToTop()}>
                        <i className="fas fa-chevron-up fa-lg"></i>
                    </button>
                    <a href="https://www.facebook.com/TailorWings" id="facebook" className={classNames({ mediaCollapse: isCollapse }, { mediaStore: isStore })}>
                        <i className="fab fa-facebook-f fa-lg"></i>
                    </a>
                    <a href="https://www.instagram.com/?hl=vi" id="instagram" className={classNames({ mediaCollapse: isCollapse }, { mediaStore: isStore })}>
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="https://chat.zalo.me" id="zalo" className={classNames({ mediaCollapse: isCollapse }, { mediaStore: isStore })}>
                        <img src="http://hoangkimbeauty.com/wp-content/uploads/2018/11/icon-zalo-1.png" alt="zalo" />
                    </a>
                    <button id="toggle" onClick={this._collapseHandler} className={classNames({ mediaToggle: isCollapse }, { mediaStore: isStore })}>
                        <i className={isCollapse ? "far fa-thumbs-up fa-lg" : "fas fa-times fa-2x"}></i>
                    </button>
                </div>
            </div>
        )
    }
}
