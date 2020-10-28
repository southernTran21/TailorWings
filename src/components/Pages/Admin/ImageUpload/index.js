import React, { useEffect, useState } from "react";
import AdminContentSection from "./ContentSection";
import AdminImageSelectionModal from "./ImageSelectionModal";
import AdminSelectionSection from "./SelectionSection";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll, fetchAllRealTime } from "services/FirebaseAPI/basic";
import { updateInitialImageUploadData } from "actions";

AdminImageUpload.propTypes = {};

function AdminImageUpload(props) {
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    const [patterns, setPatterns] = useState(null);
    const [products, setProducts] = useState(null);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        fetchAllRealTime("testPatterns", (result) => setPatterns(result));
        fetchAllRealTime("testProducts", (result) => setProducts(result));
        /*--------------*/
    }, []);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        if (patterns && products) {
            const action_updateInitialImageUploadData = updateInitialImageUploadData(
                patterns,
                products
            );
            dispatch(action_updateInitialImageUploadData);
        }
        /*--------------*/
    }, [patterns, products]);
    /*--------------*/
    return (
        <div className="c-admin-image-upload">
            <AdminSelectionSection />
            <AdminContentSection />
            <AdminImageSelectionModal />
        </div>
    );
}

export default AdminImageUpload;
