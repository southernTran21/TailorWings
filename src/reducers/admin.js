const adminID = [
    "YWw8mBeRocdLbq9wNZcRf0kuLXA2",
    "KTFGO7trJleAnBu8lL3zT5YpMab2",
];

var initialState = {
    isAdmin: false,
    userInfo: {
        name: "",
        image: "",
    },
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        /****************************************************/
        case "UPDATE_ADMIN_STATUS":
            if (!action.user) return { ...initialState };
            let isAdminLoggined = adminID.includes(action.user.uid);
            let updatedUserInfo = {
                name: action.user.displayName,
                image: action.user.photoURL,
            };
            return { ...state, isAdmin: isAdminLoggined, userInfo: updatedUserInfo };
        /****************************************************/
        default:
            return { ...state };
    }
};

export default adminReducer;
