import { database } from "../firebase";

export const getBestSellers = () => {
    return database
        .collection("topList")
        .where("name", "==", "Best seller")
        .get()
        .then((querySnapshot) => {
            let result = [];
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                data.id = doc.id;
                result.push(data);
            });
            if (result.length === 1) {
                return database
                    .collection("products")
                    .where("designID", "in", result[0].designs)
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
            } else return null;
        });
};
