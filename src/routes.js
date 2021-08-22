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

// import Admin from "./pages/Admin";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
// import Auth from "./pages/Auth";
// import Cart from "./pages/Cart";
// import Registration from "./pages/Registration";
// import AdminCategoriesCreate from "./pages/AdminCategoriesCreate";
// import AdminCategories from "./pages/AdminCategories";
// import AdminCategoriesEdit from "./pages/AdminCategoriesEdit";

export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE,
    //     Component: Admin
    // },
    // {
    //     path: CREATE_CATEGORY_ROUTE,
    //     Component: AdminCategoriesCreate
    // },
    // {
    //     path: EDIT_CATEGORY_ROUTE + '/:id/edit',
    //     Component: AdminCategoriesEdit
    // },
    // {
    //     path: REGISTRATION_ROUTE,
    //     Component: Registration
    // },
    // {
    //     path: REGISTRATION_ROUTE,
    //     Component: Registration
    // },
    // {
    //     path: ADMIN_CATEGORIES_LIST,
    //     Component: AdminCategories
    // },
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
    // {
    //     path: LOGIN_ROUTE,
    //     Component: Auth
    // },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: Product
    },
    // {
    //     path: CART_ROUTE,
    //     Component: Cart
    // },
]