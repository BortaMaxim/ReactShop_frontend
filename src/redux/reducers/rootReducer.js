import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'
import {authReducer} from "./authReducer";
import {profileReducer} from "./profileReducer";
import {categoriesReducer} from "./categoriesReducer";
import {productsReducer} from "./productsReducer";
import {cartReducer} from "./cartReducer";

export const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    profile: profileReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer
})