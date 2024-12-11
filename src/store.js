import { combineReducers, createStore } from "redux";
import accountreducer from "./features/accounts/accountSlice";
import customerreducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountreducer,
  customer: customerreducer,
});

const store = createStore(rootReducer);

export default store;
