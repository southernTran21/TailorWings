export const updateCurrentFilter = (filter) => {
    return {
        type: "UPDATE_CURRENT_FILTER",
        filter,
    };
};

export const updateFilterStatus = (filterStatus) => {
    return {
        type: "UPDATE_FILTER_STATUS",
        filterStatus,
    };
};

export const setListLoading = (status) => {
    return {
        type: "SET_LIST_LOADING",
        status,
    };
};

export const updateFilteredPatterns = (filteredPatterns) => {
    return {
        type: "UPDATE_FILTERED_PATTERNS",
        filteredPatterns,
    };
};

export const updateRenderFilteredPatterns = (renderFilteredPatterns) => {
    return {
        type: "UPDATE_RENDER_FILTERED_PATTERNS",
        renderFilteredPatterns,
    };
};