import { combineReducers } from "redux";
import commonReducer from "./common";
import homeReducer from "./home";

const rootReducer = combineReducers({
    common: commonReducer,
    home: homeReducer,
});

export default rootReducer;
