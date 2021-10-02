import {
    ADMIN_CATEGORIES_LIST, ADMIN_ORDERS_LIST,
    ADMIN_PRODUCT_LIST,
    ADMIN_ROUTE, ADMIN_USERS_LIST,
    CART_ROUTE,
    CREATE_CATEGORY_ROUTE, CREATE_ORDER_ROUTE,
    CREATE_PRODUCT_ROUTE, EDIT_CATEGORY_ROUTE, EDIT_ORDER_ROUTE, EDIT_PRODUCT_ROUTE, EDIT_USER_ROUTE,
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
import AdminProducts from "./Pages/Admin/AdminProducts";
import AdminProductsCreate from "./Pages/Admin/AdminProductsCreate";
import AdminProductsEdit from "./Pages/Admin/AdminProductsEdit";
import AdminUsers from "./Pages/Admin/AdminUsers";
import AdminOrders from "./Pages/Admin/AdminOrders";
import AdminOrderInfo from "./Components/Admin/Orders/AdminOrderInfo";

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
        path: ADMIN_CATEGORIES_LIST,
        Component: AdminCategories
    },
    // admin products
    {
        path: ADMIN_PRODUCT_LIST,
        Component: AdminProducts
    },
    {
        path: CREATE_PRODUCT_ROUTE,
        Component: AdminProductsCreate
    },
    {
        path: EDIT_PRODUCT_ROUTE + '/:id/edit',
        Component: AdminProductsEdit
    },
    // admin users
    {
        path: ADMIN_USERS_LIST,
        Component: AdminUsers
    },
    {
        path: REGISTRATION_ROUTE,
        Component: SignUp
    },
    {
        path: EDIT_USER_ROUTE + '/:id/edit',
        Component: AdminProductsEdit
    },

    // admin orders
    {
        path: ADMIN_ORDERS_LIST,
        Component: AdminOrders
    },
    {
        path: CREATE_ORDER_ROUTE,
        Component: AdminProductsCreate
    },
    {
        path: EDIT_ORDER_ROUTE + '/:id/edit',
        Component: AdminProductsEdit
    },
    {
        path: EDIT_ORDER_ROUTE + '/:id/info',
        Component: AdminOrderInfo
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