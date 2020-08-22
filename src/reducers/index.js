import { combineReducers } from "redux";
import commonReducer from "./common";
import homeReducer from "./home";
import designsReducer from "./designs";
import selectionReducer from "./selection";

const rootReducer = combineReducers({
    common: commonReducer,
    home: homeReducer,
    designs: designsReducer,
    selection: selectionReducer
});

export default rootReducer;
