import { createStore } from "redux";

import rootReducer from "./reducers/todoRoot";

const store = createStore(rootReducer);

export default store;
