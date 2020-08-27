import { combineReducers } from "redux";
import commonReducer from "./common";
import homeReducer from "./home";
import designsReducer from "./designs";
import selectionReducer from "./selection";
import sizeReducer from "./size";
import cartReducer from "./cart";

const rootReducer = combineReducers({
    common: commonReducer,
    home: homeReducer,
    designs: designsReducer,
    selection: selectionReducer,
    size: sizeReducer,
    cart: cartReducer,
});

export default rootReducer;
