import { updateLoginDisplayStatus, updatePageFixedTopStatus } from "actions";
import classNames from "classnames";
import * as firebase from "firebase/app";
import "firebase/auth";
import React, { Fragment, useEffect, useState } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import closeButton from "../../assets/Icon/login-close.svg";
import IconPerson from "../../assets/Icon/person-outline.svg";
import loginPicture from "../../assets/Image/login-picture.png";
import logoTW from "../../assets/Image/login-tailorwings-logo.png";

function Login() {
    /*--------------*/
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: "popup",
        // signInSuccessUrl: "/admin",
        // We will display Google and Facebook as auth providers.
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false,
        },
    };
    /*--------------*/
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggin, setIsLoggin] = useState(false);
    /*--------------*/
    const isLoginOpen = useSelector((state) => state.home.isLoginOpen);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        const unregisterAuthObserver = firebase
            .auth()
            .onAuthStateChanged((user) => {
                /*--------------*/
                if (user) {
                    if (JSON.stringify(user) !== JSON.stringify(currentUser)) {
                        /*--------------*/
                        setIsLoggin(true);
                        /*--------------*/
                        setCurrentUser(user);
                    }
                } else {
                    /*--------------*/
                    setCurrentUser(null);
                    /*--------------*/
                    setIsLoggin(false);
                }
            });
        return () => {
            unregisterAuthObserver();
        };
    });

    /*********************************
     *  Description: handle login display status change
     *
     *
     *  Call by:
     */
    function onLoginDisplayStatusChange() {
        /*--------------*/
        const action_updateLoginDisplayStatus = updateLoginDisplayStatus();
        dispatch(action_updateLoginDisplayStatus);
        /*--------------*/
        const action_updatePageFixedTopStatus = updatePageFixedTopStatus();
        dispatch(action_updatePageFixedTopStatus);
    }
    /************_END_****************/
    /*********************************
     *  Description: handle click on bg to close
     *
     *
     *  Call by:
     */
    function onBackgroundClick(e) {
        if (e.target.className === "c-login c-login--open") {
            onLoginDisplayStatusChange();
        }
    }
    /************_END_****************/
    return (
        <div
            className={classNames("c-login", { "c-login--open": isLoginOpen })}
            onClick={(e) => onBackgroundClick(e)}
        >
            <div className="c-login__content">
                <div
                    className="c-login__close"
                    onClick={onLoginDisplayStatusChange}
                >
                    <img src={closeButton} alt="close-button" />
                </div>
                <div className="c-login__detail">
                    <div className="c-login__picture">
                        {
                            currentUser ?
                            <img className="c-login__user-photo" src={currentUser.photoURL} alt="login-picture" />
                            : 
                            <img src={loginPicture} alt="login-picture" />
                        }
                    </div>
                    <span className="c-login__welcome">
                        Xin chào,{" "}
                        {currentUser ? currentUser.displayName : "bạn"}!
                    </span>
                    <div className="c-login__button">
                        {isLoggin ? (
                            <Link to="/admin/order">
                                <button className="c-login__go-to-admin">
                                    <img src={IconPerson} alt="icon-person" />
                                    <span>Quản lý</span>
                                </button>
                            </Link>
                        ) : (
                            <StyledFirebaseAuth
                                uiConfig={uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                        )}
                    </div>
                    {isLoggin ? (
                        <button
                            className="c-login__go-to-admin"
                            onClick={() => firebase.auth().signOut()}
                        >
                            <img src={IconPerson} alt="icon-person" />
                            <span>Đăng xuất</span>
                        </button>
                    ) : (
                        <Fragment />
                    )}
                    <img
                        className="c-login__logo"
                        src={logoTW}
                        alt="tailorwings"
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
