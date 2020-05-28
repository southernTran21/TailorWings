const initialState = {
    admin: false,
};

const firebaseAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        /****************************************************/
        case "UPDATE_ADMIN_AUTH":
            return { ...state, admin: action.isAdmin };

        default:
            return { ...state };
    }
};

export default firebaseAuthReducer;
