import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { getDocument } from "services/Fundamental";

class FirebaseAuthExample extends Component {
    state = { isSignedIn: false };
    // uiConfig = {
    //     signInFlow: "popup",
    //     signInOptions: [
    //         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //     ],
    //     callbacks: {
    //         signInSuccess: (result) => {
    //             console.log('result :>> ', result);
    //         },
    //     },
    // };
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ isSignedIn: !!user });
            console.log("user", user);
        });
    };

    loginWithGoogle = () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
                console.log("user :>> ", user);
                let accountInfo = getDocument("accounts", user.uid)
                    .then((result) => {
                        console.log("success result :>> ", result);
                    })
                    .catch((result) => {
                        console.log("fail result :>> ", result);
                    });
                console.log("accountInfo :>> ", accountInfo);
            })
            .catch(function (error) {
                console.log("error :>> ", error);
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    };

    render() {
        return (
            <div className="App">
                {this.state.isSignedIn ? (
                    <span>
                        <div
                            style={{
                                fontFamily: "Nunito",
                                fontWeight: "300",
                            }}
                        >
                            Signed In!
                        </div>
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
                    // <StyledFirebaseAuth
                    //     uiConfig={this.uiConfig}
                    //     firebaseAuth={firebase.auth()}
                    // />
                    <div>
                        <button onClick={this.loginWithGoogle}>Google</button>
                    </div>
                )}
            </div>
        );
    }
}

export default FirebaseAuthExample;
