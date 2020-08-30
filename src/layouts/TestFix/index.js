import React, { useState, useEffect } from "react";
import { fetchWithCondition } from "../../services/Firebase API/basic";

function TestFix() {
    /*--------------*/
    const [faultList, setFaultList] = useState([]);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        async function fetchFault() {
            try {
                const fetchedFaults = await fetchWithCondition(
                    "products",
                    "name",
                    ""
                );
                /*--------------*/
                setFaultList(fetchedFaults);
            } catch (error) {
                console.log("error :>> ", error);
            }
        }
        /*--------------*/
        fetchFault();
    }, []);
    /*--------------*/
    console.log('faultList :>> ', faultList);
    return (
        <ul style={{ minHeight: "100vh" }}>
            {faultList.map((item, index) => {
                return <li key={index}>{item.productID}</li>;
            })}
        </ul>
    );
}

export default TestFix;
