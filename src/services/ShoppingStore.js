import { database } from '../firebase';
import { storage } from '../firebase';
import firebase from 'firebase/app';

export const getDesignName = (collection, field, value) => {
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
            })
            return result;
        })
    }