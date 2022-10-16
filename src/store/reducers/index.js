import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

import rootReducer from "./rootReducer"


const reducer = combineReducers({ 
    rootReducer,
    loginReducer,
  })

export default reducer