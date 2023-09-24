import { configureStore, combineReducers } from "@reduxjs/toolkit";
import orderReducer from "./orderReducer";
import languageReduces from "./languageReducer";
export const rootReducers = combineReducers({
    order: orderReducer,
    language:languageReduces,
});
