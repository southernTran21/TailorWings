import { combineReducers } from "redux";
import commonReducer from "./common";
import homeReducer from "./home";
import designsReducer from "./designs";

const rootReducer = combineReducers({
    common: commonReducer,
    home: homeReducer,
    designs: designsReducer
});

export default rootReducer;
