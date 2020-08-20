import { updateRenderDesigns } from "actions";
import Designs from "components/Designs";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ListContainer() {
    /*--------------*/
    const renderDesigns = useSelector((state) => state.common.renderDesigns);
    const isListLoading = useSelector((state) => state.designs.isListLoading);
    const filteredDesigns = useSelector(
        (state) => state.common.filteredDesigns
    );
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        const action_updateRenderDesigns = updateRenderDesigns(false);
        dispatch(action_updateRenderDesigns);
    }, [filteredDesigns]);
    /*********************************
     *  Description: handle loading more data for render designs
     *
     *
     *  Call by:
     */
    function loadMore() {
        /*--------------*/
        const action_updateRenderDesigns = updateRenderDesigns(true);
        dispatch(action_updateRenderDesigns);
    }
    /************_END_****************/

    if (!renderDesigns) return <Fragment />;
    if (isListLoading) return <div className="">loading</div>;
    /*--------------*/
    let updatedLinkInfo = renderDesigns.designs.map((design) => {
        let linkInfo = {
            pathname: "/selection",
            search: `?id=${design.productID}`,
        };
        return { ...design, linkInfo: linkInfo };
    });
    let modifiedRenderDesigns = { ...renderDesigns, designs: updatedLinkInfo };
    /*--------------*/
    return (
        <div className="l-designs__list">
            <Designs
                title="Sản Phẩm Nổi Bật"
                renderDesigns={modifiedRenderDesigns}
                isLoadMore={true}
                loadMore={loadMore}
            />
        </div>
    );
}

export default ListContainer;
