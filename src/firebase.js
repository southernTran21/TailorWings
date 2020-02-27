import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// var config = {
//     apiKey: "AIzaSyC3BpPa9SVRLKNHNfJjas_EtSZ6cKy9pBo",
//     authDomain: "tailor-wings.firebaseapp.com",
//     databaseURL: "https://tailor-wings.firebaseio.com",
//     projectId: "tailor-wings",
//     storageBucket: "tailor-wings.appspot.com",
//     messagingSenderId: "644924006961",
//     appId: "1:644924006961:web:f5636696f7f8096be4ab10",
//     measurementId: "G-77LPL7G91Y"
// };

var config = {
    apiKey: "AIzaSyDwkJjqZjDPYkisuhH65Uj-OMs5QZjFGpY",
    authDomain: "tailorwings-2019-fd8a1.firebaseapp.com",
    databaseURL: "https://tailorwings-2019-fd8a1.firebaseio.com",
    projectId: "tailorwings-2019-fd8a1",
    storageBucket: "tailorwings-2019-fd8a1.appspot.com",
    messagingSenderId: "427131276338",
    appId: "1:427131276338:web:a530611bc4df11b2c7402b",
    measurementId: "G-CRLB32Y2J3"
};

firebase.initializeApp(config);
export const database = firebase.firestore();
export const storage = firebase.storage();
export default { database, storage };