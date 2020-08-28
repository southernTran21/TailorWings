import { database } from "../../firebase";
import { storage } from "../../firebase";
import firebase from "firebase/app";

export const addNewOrder = (newOrder) => {
    database
        .collection("orders")
        .add({...newOrder, orderDate: firebase.firestore.FieldValue.serverTimestamp()})
        .then(function () {
            return true;
        })
        .catch(function (error) {
            return false;
        });
};

export const setOrderDetail = (orderDetail, id) => {
    return database
        .collection("orderDetail")
        .doc(id)
        .set(orderDetail)
        .then(function () {
            return true;
        })
        .catch(function (error) {
            return error;
        });
};
