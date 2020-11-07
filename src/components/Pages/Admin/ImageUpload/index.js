import { updateInitialImageUploadData } from "actions";
import { PATTERNS, PRODUCTS, DESIGNS } from "../../../../constants";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllRealTime } from "services/FirebaseAPI/basic";
import AdminContentSection from "./ContentSection";
import AdminImageSelectionModal from "./ImageSelectionModal";
import AdminSelectionSection from "./SelectionSection";

function AdminImageUpload() {
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    const [patterns, setPatterns] = useState(null);
    const [products, setProducts] = useState(null);
    const [designs, setDesigns] = useState(null);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        fetchAllRealTime(PATTERNS, (result) => setPatterns(result));
        fetchAllRealTime(PRODUCTS, (result) => setProducts(result));
        fetchAllRealTime(DESIGNS, (result) => setDesigns(result));
        /*--------------*/
    }, []);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        if (patterns && products && designs) {
            const action_updateInitialImageUploadData = updateInitialImageUploadData(
                patterns,
                products,
                designs
            );
            dispatch(action_updateInitialImageUploadData);
        }
        /*--------------*/
    }, [patterns, products, designs]);
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
