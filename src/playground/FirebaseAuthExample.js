import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

class FirebaseAuthExample extends Component {
    state = { isSignedIn: false };
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false,
        },
    };
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ isSignedIn: !!user });
            console.log("user", user);
        });
    };

    render() {
        return (
            <div className="App">
                {this.state.isSignedIn ? (
                    <span>
                        <div>Signed In!</div>
                        <button onClick={() => firebase.auth().signOut()}>
                            Sign out!
                        </button>
                        <h1>
                            Welcome {firebase.auth().currentUser.displayName}
                        </h1>
                        <img
                            alt="profile picture"
                            src={firebase.auth().currentUser.photoURL}
                        />
                    </span>
                ) : (
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                )}
            </div>
        );
    }
}

export default FirebaseAuthExample;
