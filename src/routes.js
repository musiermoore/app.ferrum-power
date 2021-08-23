import {
    ADMIN_CATEGORIES_LIST,
    ADMIN_PRODUCT_LIST,
    ADMIN_ROUTE,
    CART_ROUTE,
    CREATE_CATEGORY_ROUTE,
    CREATE_PRODUCT_ROUTE, EDIT_CATEGORY_ROUTE,
    LOGIN_ROUTE,
    PRODUCT_ROUTE,
    REGISTRATION_ROUTE, SHOP_CATEGORY_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";

import Admin from "./Pages/Admin/Admin";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import AdminCategoriesCreate from "./Pages/Admin/AdminCategoriesCreate";
import AdminCategories from "./Pages/Admin/AdminCategories";
import AdminCategoriesEdit from "./Pages/Admin/AdminCategoriesEdit";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CREATE_CATEGORY_ROUTE,
        Component: AdminCategoriesCreate
    },
    {
        path: EDIT_CATEGORY_ROUTE + '/:id/edit',
        Component: AdminCategoriesEdit
    },
    {
        path: REGISTRATION_ROUTE,
        Component: SignUp
    },
    {
        path: ADMIN_CATEGORIES_LIST,
        Component: AdminCategories
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: SHOP_CATEGORY_ROUTE + '/:id',
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: SignIn
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: Product
    },
    {
        path: CART_ROUTE,
        Component: Cart
    },
]