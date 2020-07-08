import { database } from "../firebase";

export const getFirstDefaultProducts = (limit) => {
    return database
        .collection("products")
        .where("default", "==", true)
        .orderBy("productID", "asc")
        .limit(limit)
        .get()
        .then((documentSnapshots) => {
            const result = documentSnapshots.docs.map((snapshot) => {
                return snapshot.data();
            });
            return result;
        });
};

export const getMoreDefaultProducts = (start, productsPerView) => {
    if (!start) return null;    
    return database
        .collection("products")
        .where("default", "==", true)
        .orderBy("productID", "asc")
        .startAfter(start)
        .limit(productsPerView)
        .get()
        .then((querySnapshot) => {
            const result = querySnapshot.docs.map((snapshot) => {
                return snapshot.data();
            });
            return result;
        });
};

export const getFirstProductsInCategory = (limit, category) => {
    return database
        .collection("products")
        .where("default", "==", true)
        .where("catID", "==", category)
        .orderBy("productID", "asc")
        .limit(limit)
        .get()
        .then((documentSnapshots) => {
            const result = documentSnapshots.docs.map((snapshot) => {
                return snapshot.data();
            });

            return result;
        });
};

export const getMoreProductsInCategory = (
    start,
    productsPerView,
    categoryID
) => {
    if (!start) return null;
    const startAfter = start;
    return database
        .collection("products")
        .where("default", "==", true)
        .where("catID", "==", categoryID)
        .orderBy("productID", "asc")
        .startAfter(startAfter)
        .limit(productsPerView)
        .get()
        .then((querySnapshot) => {
            const result = querySnapshot.docs.map((snapshot) => {
                return snapshot.data();
            });
            return result;
        });
};

export const getFirstProductsInCollection = (limit, collectionID) => {
    return database
        .collection("products")
        .where("collectionID", "array-contains", collectionID)
        .orderBy("collectionID")
        .limit(limit)
        .get()
        .then((documentSnapshots) => {
            const result = documentSnapshots.docs.map((snapshot) => {
                return snapshot.data();
            });
            return result;
        });
};

export const getMoreProductsInCollection = (
    start,
    productsPerView,
    collectionID
) => {
    if (!start) return null;
    return database
        .collection("products")
        .where("collectionID", "array-contains", collectionID)
        .orderBy("collectionID")
        .startAfter(start)
        .limit(productsPerView)
        .get()
        .then((documentSnapshots) => {
            const result = documentSnapshots.docs.map((snapshot) => {
                return snapshot.data();
            });
            return result;
        });
};
