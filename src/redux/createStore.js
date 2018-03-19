import { createStore as _createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from "./modules";

export default function createStore() {
    return _createStore(rootReducer, applyMiddleware(logger, thunk));
}
