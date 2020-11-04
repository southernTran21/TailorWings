import React, { useState, useEffect } from "react";
import {
    fetchWithCondition,
    fetchAll,
    fetchDocument,
    setDocument,
} from "../../services/FirebaseAPI/basic";
import { productPriceCalculate } from "../../services/CommonFunctions";
import { storage } from "../../firebase";
// import firebase, { functions } from "firebase/app";
import firebase from "firebase/app";
import "firebase/functions";

import test300x300 from "../../assets/Image/test.jpg";

import D001000001_C from "assets/Test/D001000001-vai-chim-hac-fp-2-C.jpg";
import D001000001_T from "assets/Test/D001000001-vai-chim-hac-fp-2-T.jpg";
import D001000001_N from "assets/Test/D001000001-vai-chim-hac-fp-2-N.jpg";
import D001000135_C from "assets/Test/D001000135-vai-hoa-den-la-trang-fp-380-C.jpg";
import D001000135_T from "assets/Test/D001000135-vai-hoa-den-la-trang-fp-380-T.jpg";
import D001000135_N from "assets/Test/D001000135-vai-hoa-den-la-trang-fp-380-N.jpg";
import D001000145_C from "assets/Test/D001000145-vai-tem-thu-fp-599-C.jpg";
import D001000145_T from "assets/Test/D001000145-vai-tem-thu-fp-599-T.jpg";
import D001000145_N from "assets/Test/D001000145-vai-tem-thu-fp-599-N.jpg";
import D001000156_C from "assets/Test/D001000156-vai-hoa-tiet-tao-cach-dieu-fp-761-C.jpg";
import D001000156_T from "assets/Test/D001000156-vai-hoa-tiet-tao-cach-dieu-fp-761-T.jpg";
import D001000156_N from "assets/Test/D001000156-vai-hoa-tiet-tao-cach-dieu-fp-761-N.jpg";
import D001000198_C from "assets/Test/D001000198-vai-mau-ngau-hung-fp-1505-C.jpg";
import D001000198_T from "assets/Test/D001000198-vai-mau-ngau-hung-fp-1505-T.jpg";
import D001000198_N from "assets/Test/D001000198-vai-mau-ngau-hung-fp-1505-N.jpg";

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
        const sayHello = firebase
            .app()
            .functions("asia-south1")
            .httpsCallable("sayHello");
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
        /*--------------*/
        /*-------this is for BACKUP 0 PHASE DATA-------*/
        // async function fetchDataToBackUp() {
        //     try {
        //         let categories = await fetchAll("categories");
        //         let collections = await fetchAll("collections");
        //         let customers = await fetchAll("customers");
        //         let designers = await fetchAll("designers");
        //         let designs = await fetchAll("designs");
        //         let fabrics = await fetchAll("fabrics");
        //         let orderDetail = await fetchAll("orderDetail");
        //         let orders = await fetchAll("orders");
        //         let products = await fetchAll("products");
        //         let welcomeLandingPage = await fetchAll("welcomeLandingPage");
        //         /*--------------*/
        //         const backup = {
        //             categories,
        //             collections,
        //             customers,
        //             designers,
        //             designs,
        //             fabrics,
        //             orderDetail,
        //             orders,
        //             products,
        //             welcomeLandingPage,
        //         };
        //         /*--------------*/
        //         console.log('backup :>> ', JSON.stringify(backup));
        //     } catch (error) {
        //         console.log('error :>> ', error);
        //     }
        // }
        /*--------------*/
        // fetchDataToBackUp();
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

    const CAN = [
        D001000001_C,
        D001000135_C,
        D001000145_C,
        D001000156_C,
        D001000198_C,
    ];
    const TRUOC = [
        D001000001_T,
        D001000135_T,
        D001000145_T,
        D001000156_T,
        D001000198_T,
    ];
    const NGHIENG = [
        D001000001_N,
        D001000135_N,
        D001000145_N,
        D001000156_N,
        D001000198_N,
    ];

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    margin: "2rem 0",
                }}
            >
                {CAN.map((item, index) => {
                    return (
                        <img
                            key={index}
                            src={item}
                            alt=""
                            style={{ width: "48rem", height: "60rem" }}
                        />
                    );
                })}
            </div>
            {/* <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "2rem 0",
                }}
            >
                {CAN.map((item, index) => {
                    return (
                        <img
                            key={index}
                            src={item}
                            alt=""
                            style={{ width: "26rem", height: "40rem" }}
                        />
                    );
                })}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "2rem 0",
                }}
            >
                {CAN.map((item, index) => {
                    return (
                        <img
                            key={index}
                            src={item}
                            alt=""
                            style={{ width: "17rem", height: "21rem" }}
                        />
                    );
                })}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "2rem 0",
                }}
            >
                {CAN.map((item, index) => {
                    return (
                        <img
                            key={index}
                            src={item}
                            alt=""
                            style={{ width: "10rem", height: "10rem" }}
                        />
                    );
                })}
            </div> */}
        </div>
    );
}

export default TestFix;
