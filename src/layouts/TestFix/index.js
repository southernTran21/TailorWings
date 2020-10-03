import React, { useState, useEffect } from "react";
import {
    fetchWithCondition,
    fetchAll,
    fetchDocument,
    setDocument,
} from "../../services/Firebase API/basic";
import { productPriceCalculate } from "../../services/CommonFunctions";
import { storage } from "../../firebase";
// import firebase, { functions } from "firebase/app";
import firebase from 'firebase/app'
import 'firebase/functions'

import test300x300 from "../../assets/Image/test.jpg";

function TestFix() {
    /*--------------*/
    const [faultList, setFaultList] = useState([]);
    /*--------------*/
    /*********************************
     *  Description:
     *
     *
     *  Call by:
     */
    function onClick() {
        const sayHello = firebase.app().functions('asia-south1').httpsCallable('sayHello');
        sayHello()
            .then((result) => {
                console.log(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    /************_END_****************/
    /*--------------*/
    useEffect(() => {
        // var helloWorld = firebase.functions().httpsCallable("helloWorld");
        // helloWorld("hello").then((result) => {
        //     console.log("result :>> ", result);
        // });
        /*-------This is for fix PRODUCT NAME UNDEFINED-------*/
        // /*--------------*/
        // async function fetchNameFault() {
        //     try {
        //         let fetchedFaults = await fetchAll("products");
        //         /*--------------*/
        //         fetchedFaults = fetchedFaults.filter((item) => {
        //             return item.name === undefined;
        //         });
        //         if (fetchedFaults.length > 0) {
        //             /*--------------*/
        //             const relatedDesignID = [
        //                 ...new Set(
        //                     fetchedFaults.map((fault) => {
        //                         return fault.designID;
        //                     })
        //                 ),
        //             ];
        //             /*--------------*/
        //             const fetchedDesigns = await Promise.all(
        //                 relatedDesignID.map((id) =>
        //                     fetchDocument("designs", id)
        //                 )
        //             );
        //             /*--------------*/
        //             let fixedProducts = fetchedFaults.map((fault) => {
        //                 let designName = fetchedDesigns.find(
        //                     (design) => design.id === fault.designID
        //                 );
        //                 designName = designName ? designName.name : "";
        //                 console.log("designName :>> ", designName);
        //                 return { ...fault, name: designName };
        //             });
        //             if (fixedProducts.length > 0) {
        //                 // Promise.all(
        //                 //     fixedProducts.map((product) =>
        //                 //         setDocument(
        //                 //             "products",
        //                 //             product,
        //                 //             product.productID
        //                 //         )
        //                 //     )
        //                 // );
        //             }
        //         }
        //         setFaultList(fetchedFaults);
        //     } catch (error) {
        //         console.log("error :>> ", error);
        //     }
        // }
        /*--------------*/
        // fetchNameFault();
        /*-------this is for PRICE FIX-------*/
        // async function fetchPriceFault() {
        //     try {
        //         let fetchedFaults = await fetchAll("products");
        //         /*--------------*/
        //         fetchedFaults = fetchedFaults.filter((item) => {
        //             return item.price === 0;
        //         });
        //         console.log("fetchedFaults :>> ", fetchedFaults);
        //         /*--------------*/
        //         if (fetchedFaults.length > 0) {
        //             /*--------------*/
        //             const relatedDesignID = [
        //                 ...new Set(
        //                     fetchedFaults.map((fault) => {
        //                         return fault.designID;
        //                     })
        //                 ),
        //             ];
        //             /*--------------*/
        //             const relatedFabricID = [
        //                 ...new Set(
        //                     fetchedFaults.map((fault) => {
        //                         return fault.fabricID;
        //                     })
        //                 ),
        //             ];
        //             /*--------------*/
        //             let fetchedDesigns = await Promise.all(
        //                 relatedDesignID.map((id) =>
        //                     fetchDocument("designs", id)
        //                 )
        //             );
        //             fetchedDesigns = fetchedDesigns.filter(Boolean);
        //             /*--------------*/
        //             let fetchedFabrics = await Promise.all(
        //                 relatedFabricID.map((id) =>
        //                     fetchDocument("fabrics", id)
        //                 )
        //             );
        //             fetchedFabrics = fetchedFabrics.filter(Boolean);
        //             /*--------------*/
        //             if (
        //                 fetchedDesigns.length > 0 &&
        //                 fetchedFabrics.length > 0
        //             ) {
        //                 let fixedProducts = fetchedFaults.map((item) => {
        //                     let relatedDesign = fetchedDesigns.find(
        //                         (design) => design.id === item.designID
        //                     );
        //                     let relatedFabric = fetchedFabrics.find(
        //                         (fabric) => {
        //                             return fabric.id === item.fabricID;
        //                         }
        //                     );
        //                     /*--------------*/
        //                     let designPrice = relatedDesign
        //                         ? relatedDesign.price
        //                         : null;
        //                     let designLength = relatedDesign
        //                         ? relatedDesign.length
        //                         : null;
        //                     let fabricPrice = relatedFabric
        //                         ? relatedFabric.price
        //                         : null;
        //                     /*--------------*/
        //                     let productPrice = null;
        //                     if (designPrice && designLength && fabricPrice) {
        //                         productPrice = productPriceCalculate(
        //                             designPrice,
        //                             designLength,
        //                             fabricPrice
        //                         );
        //                     } else {
        //                         console.log(
        //                             "item.productID :>> ",
        //                             item.productID
        //                         );
        //                     }
        //                     /*--------------*/
        //                     return { ...item, price: productPrice || 0 };
        //                 });
        //                 /*--------------*/
        //                 if (fixedProducts.length > 0) {
        //                     // Promise.all(
        //                     //     fixedProducts.map((product) =>
        //                     //         setDocument(
        //                     //             "products",
        //                     //             product,
        //                     //             product.productID
        //                     //         )
        //                     //     )
        //                     // );
        //                 }
        //             }
        //         }
        //         /*--------------*/
        //         setFaultList(fetchedFaults);
        //     } catch (error) {
        //         console.log("error :>> ", error);
        //     }
        // }
        // /*--------------*/
        // fetchPriceFault();
    }, []);
    /*--------------*/
    // console.log("faultList :>> ", faultList);

    // Create a storage reference from our storage service
    // var storageRef = firebase.storage().ref();
    // var listRef = storageRef.child("image/test");
    // var listRefUpdate = storageRef.child("image/test/T051.jpg");

    // let newMetadata = {
    //     customMetadata: {
    //         'sizeTW': '300x300'
    //     },
    // };

    // listRefUpdate
    //     .updateMetadata(newMetadata)
    //     .then(function (metadata) {
    //         // Updated metadata for 'images/forest.jpg' is returned in the Promise
    //         console.log("metadata :>> ", metadata);
    //     })
    //     .catch(function (error) {
    //         // Uh-oh, an error occurred!
    //     });

    // listRef
    //     .listAll()
    //     .then(function (res) {
    //         res.items.forEach(function (itemRef) {
    //             // All the items under listRef.
    //             // console.log('itemRef :>> ', itemRef);
    //             let url = itemRef.getDownloadURL();
    //             console.log("url :>> ", url);
    //             let metaData = itemRef.getMetadata();
    //             console.log("metaData :>> ", metaData);
    //         });
    //     })
    //     .catch(function (error) {
    //         console.log("error :>> ", error);
    //     });

    return (
        <div>
            <img
                style={{ width: "100px", height: "100px" }}
                src={test300x300}
                alt=""
            />
            <button onClick={onClick}>Click</button>
        </div>
        // <ul style={{ minHeight: "100vh" }}>
        //     {faultList.map((item, index) => {
        //         return <li key={index}>{item.productID}</li>;
        //     })}
        // </ul>
    );
}

export default TestFix;
