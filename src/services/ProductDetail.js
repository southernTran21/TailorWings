import { database } from '../firebase';
import { storage } from '../firebase';
import firebase from 'firebase/app';

export const getSupportedFabrics = (collection, supportedFabricID) => {
    return database
        .collection(collection)
        .get()
        .then((querySnapshot) => {
            let result = [];
            querySnapshot.forEach((doc) => {
                let fabric = doc.data();
                fabric.id = doc.id;
                if ( supportedFabricID.includes(fabric.type) ) {
                    result.push(fabric);
                }
            })
            return result;
        })
}

export const getRelatedProducts = (collection, designID) => {
    return database
        .collection(collection)
        .get()
        .then((querySnapshot) => {
            let result = [];
            querySnapshot.forEach((doc) => {
                let product = doc.data();
                product.id = doc.id;
                if ( product.designID.split('')[0] === designID.split('')[0] && product.visibility === true && product.designID !== designID) {
                    result.push(product);
                }
            })
            return result;
        })
}


