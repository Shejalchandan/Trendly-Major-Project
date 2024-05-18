import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk";
import authReducer from "./Auth/Reducer";
import customerProductReducer from "./Customers/Product/Reducer";
import productReducer from "./Admin/Product/Reducer";
import cartReducer from "./Customers/Cart/Reducer";
import { orderReducer } from "./Customers/Order/Reducer";
import adminOrderReducer from "./Admin/Orders/Reducer";
import ReviewReducer from "./Customers/Review/Reducer";
import customersReducer from "./Customers/Customer/Reducer";
import searchReducer from "./Customers/Search/Reducer";





const rootReducers=combineReducers({

    auth:authReducer,
    customersProduct:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    review:ReviewReducer,
    customer:customersReducer,
    search: searchReducer,


    // admin
    adminsProduct:productReducer,
    adminsOrder:adminOrderReducer,


});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))