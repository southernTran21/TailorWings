import { updateRenderFilteredPatterns } from "actions/fabrics";
import ListLoader from "components/Loader/List";
import Fabrics from "components/Pages/Fabrics";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LIMIT = 12;

function ListContainer() {
    /*--------------*/
    const isListLoading = useSelector((state) => state.fabrics.isListLoading);
    const renderFilteredPatterns = useSelector((state) => state.fabrics.renderFilteredPatterns);
    const filteredPatterns = useSelector(
        (state) => state.fabrics.filteredPatterns
    );

    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        let endIndex = LIMIT;
        /*--------------*/
        let newRenderPatterns = [...filteredPatterns.slice(0, endIndex)];
        let isMax =
            (renderFilteredPatterns.length >= filteredPatterns.length &&
                filteredPatterns.length > 0) ||
            newRenderPatterns.length < LIMIT;
        /*--------------*/
        let updatedRenderPatterns = {
            isMax: isMax,
            patterns: newRenderPatterns ? [...newRenderPatterns] : [],
        };
        /*--------------*/
        const action_updateRenderFilteredPatterns = updateRenderFilteredPatterns(
            updatedRenderPatterns
        );
        dispatch(action_updateRenderFilteredPatterns);
        /*--------------*/
    }, [filteredPatterns]);
    /*********************************
     *  Description: handle load more
     *
     *
     *  Call by:
     */
    function onLoadMore() {
        /*--------------*/
        if (renderFilteredPatterns.patterns.length > 0 && filteredPatterns.length > 0) {
            /*--------------*/
            let udpatedRenderPatterns = [...renderFilteredPatterns.patterns];
            /*--------------*/
            udpatedRenderPatterns = filteredPatterns.slice(
                0,
                LIMIT + udpatedRenderPatterns.length
            );
            /*--------------*/
            let isMax = udpatedRenderPatterns.length >= filteredPatterns.length;
            /*--------------*/
            const action_updateRenderFilteredPatterns = updateRenderFilteredPatterns(
                {
                    isMax: isMax,
                    patterns: udpatedRenderPatterns,
                }
            );
            dispatch(action_updateRenderFilteredPatterns);
            /*--------------*/
        }
    }
    /************_END_****************/
    if (!renderFilteredPatterns) return <Fragment />;
    if (isListLoading) return <ListLoader />;
    /*--------------*/
    console.log("renderFilteredPatterns :>> ", renderFilteredPatterns);
    return (
        <section className="l-fabrics__list">
            <Fabrics
                title={`${filteredPatterns.length} mẫu vải`}
                renderPatterns={renderFilteredPatterns}
                onLoadMore={onLoadMore}
                isLoadMore={!renderFilteredPatterns.patterns.length <= LIMIT}
            />
        </section>
    );
}

export default ListContainer;
