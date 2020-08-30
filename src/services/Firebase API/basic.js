import { database } from "../../firebase";
import { storage } from "../../firebase";
import firebase from "firebase/app";

export const fetchAll = (collection) => {
    return database
        .collection(collection)
        .get()
        .then((querySnapshot) => {
            let result = [];
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                data.id = doc.id;
                result.push(data);
            });
            return result;
        });
};

export const fetchDocument = (collection, doc) => {
    return database
        .collection(collection)
        .doc(doc)
        .get()
        .then((doc) => {
            if (doc.exists) {
                return doc.data();
            } else {
                return null;
            }
        });
};

export const fetchWithCondition = (collection, field, value) => {
    return database
        .collection(collection)
        .where(field, "==", value)
        .get()
        .then((querySnapshot) => {
            let result = [];
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                data.id = doc.id;
                result.push(data);
            });
            return result;
        });
};

export const fetchWithDoubleCondition = (
    collection,
    field1,
    value1,
    field2,
    value2
) => {
    return database
        .collection(collection)
        .where(field1, "==", value1)
        .where(field2, "==", value2)
        .get()
        .then((querySnapshot) => {
            let result = [];
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                data.id = doc.id;
                result.push(data);
            });
            return result;
        });
};

export const fetchWithTrippleCondition = (collection, condition) => {
    return database
        .collection(collection)
        .where(condition[0].field, "==", condition[0].value)
        .where(condition[1].field, "==", condition[1].value)
        .where(condition[2].field, "==", condition[2].value)
        .get()
        .then((querySnapshot) => {
            let result = [];
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                data.id = doc.id;
                result.push(data);
            });
            return result;
        });
};

export const fetchVisible = (collection) => {
    return database
        .collection(collection)
        .where("isVisible", "==", true)
        .get()
        .then((querySnapshot) => {
            let result = [];
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                data.id = doc.id;
                result.push(data);
            });
            return result;
        });
};

export const fetchVisibleCondition = (collection, field, value) => {
    return database
        .collection(collection)
        .where("isVisible", "==", true)
        .where(field, "==", value)
        .get()
        .then((querySnapshot) => {
            let result = [];
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                data.id = doc.id;
                result.push(data);
            });
            return result;
        });
};

export const fetchVisibilityCondition = (collection, field, value) => {
    return database
        .collection(collection)
        .where("visibility", "==", true)
        .where(field, "==", value)
        .get()
        .then((querySnapshot) => {
            let result = [];
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                data.id = doc.id;
                result.push(data);
            });
            return result;
        });
};

export const fetchDefaultProducts = () => {
    return database
        .collection("products")
        .where("visibility", "==", true)
        .where("default", "==", true)
        .get()
        .then((querySnapshot) => {
            let result = [];
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                data.id = doc.id;
                result.push(data);
            });
            return result;
        });
};

export const countSupportedFabric = (designID) => {
    return database
        .collection("products")
        .where("visibility", "==", true)
        .where("designID", "==", designID)
        .get()
        .then((querySnapshot) => {
            let result = querySnapshot.size || 0;
            return result;
        });
};

export const fetchDesignOwner = (designID) => {
    return database
        .collection("designers")
        .where("designs", "array-contains", designID)
        .get()
        .then((querySnapshot) => {
            let result = querySnapshot.docs[0].data().name || "";
            return result;
        });
};

export const fetchDesignInfo = (designID) => {
    return database
        .collection("designs")
        .where("id", "==", designID)
        .get()
        .then((querySnapshot) => {
            let result = querySnapshot.docs[0].data().description || "";
            return result;
        });
};

export const fetchFabricInfo = (fabricID) => {
    return database
        .collection("fabrics")
        .where("id", "==", fabricID)
        .get()
        .then((querySnapshot) => {
            let result = querySnapshot.docs[0].data().description || "";
            return result;
        });
};

/*--------------*/

export const addDocument = (collection, newItem) => {
    database
        .collection(collection)
        .add(newItem)
        .then(function () {
            let isSuccess = true;
            return isSuccess;
        })
        .catch(function (error) {
            let isSuccess = false;
            return isSuccess;
        });
};

export const setDocument = (collection, newItem, docName) => {
    console.log('collection :>> ', collection);
    console.log('newItem :>> ', newItem);
    console.log('docName :>> ', docName);
    return database
        .collection(collection)
        .doc(docName)
        .set({
            ...newItem,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(function () {
            let isSuccess = true;
            return isSuccess;
        })
        .catch(function (error) {
            let isSuccess = false;
            return isSuccess;
        });
};
