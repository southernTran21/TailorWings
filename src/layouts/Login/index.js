import React, { Fragment, useEffect, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { StyledFirebaseAuth } from "react-firebaseui";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateAdminStatus } from "actions";

function LoginContainer() {
    /*--------------*/
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: "redirect",
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
    /*--------------*/
    const isAdmin = useSelector((state) => state.admin.isAdmin);
    const userInfo = useSelector((state) => state.admin.userInfo);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        const unregisterAuthObserver = firebase
            .auth()
            .onAuthStateChanged((user) => {
                /*--------------*/
                if (JSON.stringify(user) !== JSON.stringify(currentUser)) {
                    /*--------------*/
                    const action_updateAdminStatus = updateAdminStatus(user);
                    dispatch(action_updateAdminStatus);
                    /*--------------*/
                    setCurrentUser(user);
                }
            });
        return () => {
            unregisterAuthObserver();
        };
    });

    if (!firebase.auth().currentUser) {
        return (
            <div>
                <h1>My App</h1>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </div>
        );
    } else {
        return (
            <div>
                <h1>My App</h1>
                <p>Welcome {userInfo.name}! You are now signed-in!</p>
                {isAdmin ? (
                    <Link to="/admin">Go to Admin Page</Link>
                ) : (
                    <Fragment />
                )}
                <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
            </div>
        );
    }
}

export default LoginContainer;
