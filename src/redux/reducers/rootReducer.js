import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'
import {authReducer} from "./authReducer";
import {profileReducer} from "./profileReducer";
import {categoriesReducer} from "./categoriesReducer";
import {productsReducer} from "./productsReducer";
import {cartReducer} from "./cartReducer";
import {sortReducer} from "./sortReducer";
import {adminUsersManagementReducer} from "./adminUsers/adminUsersManagementReducer";
import {adminEditUserReducer} from "./adminUsers/adminEditUserReducer";
import {adminUpdateUserReducer} from "./adminUsers/adminUpdateUserReducer";
import {adminDeleteUserReducer} from "./adminUsers/adminDeleteUserReducer";
import {adminCreateUserReducer} from "./adminUsers/adminCreateUserReducer";
import {adminCreateCategoryReducer} from "./adminCategories/adminCreateCategoryReducer";
import {adminViewCategoryReducer} from "./adminCategories/adminViewCategoryReducer";
import {adminUpdateCategoryReducer} from "./adminCategories/adminUpdateCategoryReducer";
import {adminDeleteCategoryReducer} from "./adminCategories/adminDeleteCategoryReducer";
import {adminProductsManagementReducer} from "./adminProducts/adminProductsManagementReducer";
import {adminProductsManagementCreateReducer} from "./adminProducts/adminProductsManagementCreateReducer";
import {adminProductsManagementEditReducer} from "./adminProducts/adminProductsManagementEditReducer";
import {adminProductsManagementDeleteReducer} from "./adminProducts/adminProductsManagementDeleteReducer";
import {checkoutReducer} from "./checkoutReducer";
import {likesReducer} from "./likesReducer";
import {commentsReducer} from "./commentsReducer";

export const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    profile: profileReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    sort: sortReducer,
    adminUsers: adminUsersManagementReducer,
    adminEditUsers: adminEditUserReducer,
    adminUpdateUsers: adminUpdateUserReducer,
    adminDeleteUsers: adminDeleteUserReducer,
    adminCreateUsers: adminCreateUserReducer,
    adminCreateCategory: adminCreateCategoryReducer,
    adminViewCategory: adminViewCategoryReducer,
    adminUpdateCategory: adminUpdateCategoryReducer,
    adminDeleteCategory: adminDeleteCategoryReducer,
    adminProducts: adminProductsManagementReducer,
    adminCreateProduct: adminProductsManagementCreateReducer,
    adminUpdateProduct: adminProductsManagementEditReducer,
    adminDeleteProduct: adminProductsManagementDeleteReducer,
    checkout: checkoutReducer,
    likesDislikes: likesReducer,
    comments: commentsReducer,
})