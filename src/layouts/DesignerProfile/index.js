import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchDocument } from "../../services/Firebase API/basic";
import BackgroundContainer from "./Background";
import DesignListContainer from "./DesignList";
import InfoContainer from "./Info";
import OptionsContainer from "./Options";
import { updateSRC } from "actions";

const FILTER_INFO = [
    { id: "all", name: "Tất Cả", isActive: true },
    { id: "damom", name: "Đầm Ôm", isActive: false },
    { id: "damxoe", name: "Đầm Xòe", isActive: false },
    { id: "damsuong", name: "Đầm Suông", isActive: false },
];

function DesignerProfileContainer() {
    let urlSearch = window.location.search.match(/id=(.*)\b/);
    const designerID = urlSearch ? urlSearch[1] : null;
    /*--------------*/
    const defaultProducts = useSelector(
        (state) => state.common.defaultProducts
    );
    const selectionSrc = useSelector((state) => state.selection.src);
    /*--------------*/
    const [designerInfo, setDesignerInfo] = useState(null);
    const [allRelatedDesigns, setAllRelatedDesigns] = useState(null);
    const [renderDesigns, setRenderDesigns] = useState(null);
    const [filterInfo, setFilterInfo] = useState(FILTER_INFO);
    const [isListLoading, setIsListLoading] = useState(false);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        /*--------------*/
        async function _fetchDesignerInfo() {
            try {
                /*--------------*/
                const fetchedDesignerInfo = await fetchDocument(
                    "designers",
                    designerID
                );
                /*--------------*/
                if (fetchedDesignerInfo) {
                    const allDesignsInfo = fetchedDesignerInfo.designs.map(
                        (design) => {
                            /*--------------*/
                            let info =
                                defaultProducts.find(
                                    (product) => product.designID === design
                                ) || "";
                            /*--------------*/
                            return info;
                        }
                    );
                    /*--------------*/
                    setAllRelatedDesigns(allDesignsInfo);
                    setRenderDesigns(allDesignsInfo);
                    setDesignerInfo(fetchedDesignerInfo);
                }
            } catch (error) {
                console.log("error :>> ", error);
            }
        }
        /*--------------*/
        if (designerID && defaultProducts.length > 0) {
            _fetchDesignerInfo();
        }
        if (selectionSrc.pathname !== "/designer-profile") {
            const action_updateSrc = updateSRC({
                pathname: "/designer-profile",
                search: `?id=${designerID}`,
            });
            dispatch(action_updateSrc);
        }
    }, [designerID]);
    /*--------------*/
    /*********************************
     *  Description: handle filter change
     *
     *
     *  Call by:
     */
    function onFilterChange(catID, activeIndex) {
        setIsListLoading(true);
        /*--------------*/
        let updatedFilterInfo = filterInfo.map((info, index) => {
            let isActive = activeIndex === index;
            return { ...info, isActive: isActive };
        });
        /*--------------*/
        let updatedRenderDesigns = [...allRelatedDesigns];
        if (catID !== "all") {
            updatedRenderDesigns = allRelatedDesigns.filter(
                (design) => design.catID === catID
            );
        }
        /*--------------*/
        if (updatedFilterInfo) {
            setFilterInfo(updatedFilterInfo);
        }
        if (updatedRenderDesigns) {
            setRenderDesigns(updatedRenderDesigns);
        }
        /*--------------*/
        setTimeout(() => {
            setIsListLoading(false);
        }, 1000);
    }
    /************_END_****************/
    /*--------------*/
    if (!defaultProducts.length > 0) return <Redirect to="/" />;
    if (!designerInfo) return <Fragment />;
    const {
        address,
        avatar,
        introduction,
        name,
        stars,
        designs,
        background,
    } = designerInfo;
    return (
        <div className="l-designer">
            <BackgroundContainer avatar={avatar} background={background} />
            <InfoContainer
                starNumber={stars}
                name={name}
                description={introduction}
                address={address}
                designNumber={designs.length}
            />
            <OptionsContainer
                filterInfo={filterInfo}
                onFilterChange={onFilterChange}
            />
            <DesignListContainer
                renderDesigns={renderDesigns}
                isListLoading={isListLoading}
            />
        </div>
    );
}

export default DesignerProfileContainer;
