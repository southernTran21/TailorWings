import { updateRenderPatterns } from "actions/fabrics";
import ListLoader from "components/Loader/List";
import Fabrics from "components/Pages/Fabrics";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LIMIT = 12;

function ListContainer() {
    /*--------------*/
    const isListLoading = useSelector((state) => state.fabrics.isListLoading);
    const renderPatterns = useSelector((state) => state.fabrics.renderPatterns);
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
            (renderPatterns.length >= filteredPatterns.length &&
                filteredPatterns.length > 0) ||
            newRenderPatterns.length < LIMIT;
        /*--------------*/
        let updatedRenderPatterns = {
            isMax: isMax,
            patterns: newRenderPatterns,
        };
        /*--------------*/
        const action_updateRenderPatterns = updateRenderPatterns(
            updatedRenderPatterns
        );
        dispatch(action_updateRenderPatterns);
    }, [filteredPatterns]);
    /*********************************
     *  Description: handle load more
     *
     *
     *  Call by:
     */
    function onLoadMore() {
        /*--------------*/
        if (renderPatterns.patterns.length > 0 && filteredPatterns.length > 0) {
            /*--------------*/
            let udpatedRenderPatterns = [...renderPatterns.patterns];
            /*--------------*/
            udpatedRenderPatterns = filteredPatterns.slice(
                0,
                LIMIT + udpatedRenderPatterns.length
            );
            /*--------------*/
            let isMax = udpatedRenderPatterns.length >= filteredPatterns.length;
            /*--------------*/
            const action_updateRenderPatterns = updateRenderPatterns({
                isMax: isMax,
                patterns: udpatedRenderPatterns,
            });
            dispatch(action_updateRenderPatterns);
            /*--------------*/
        }
    }
    /************_END_****************/
    if (!renderPatterns) return <Fragment />;
    if (isListLoading) return <ListLoader />;
    /*--------------*/
    let updatedLinkInfo = renderPatterns.patterns.map((pattern) => {
        let linkInfo = {
            pathname: "/fabric-detail",
            search: `?id=${pattern.id}`,
        };
        return { ...pattern, linkInfo: linkInfo };
    });
    /*--------------*/
    let modifiedRenderPatterns = {
        ...renderPatterns,
        patterns: [...updatedLinkInfo],
    };
    /*--------------*/
    return (
        <section className="l-fabrics__list">
            <Fabrics
                title={`${filteredPatterns.length} mẫu vải`}
                renderPatterns={modifiedRenderPatterns}
                onLoadMore={onLoadMore}
                isLoadMore={!modifiedRenderPatterns.patterns.length <= LIMIT}
            />
        </section>
    );
}

export default ListContainer;
