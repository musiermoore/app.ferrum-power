export const ADMIN_ROUTE = '/admin'

/*
 *  Auth
 */
export const LOGIN_ROUTE = ADMIN_ROUTE + '/login'

/*
 *  Categories
 */
export const ADMIN_CATEGORIES_LIST = ADMIN_ROUTE + '/categories'
export const CREATE_CATEGORY_ROUTE = ADMIN_ROUTE + '/category/create'
export const EDIT_CATEGORY_ROUTE = ADMIN_ROUTE + '/category'

/*
 *  Products
 */
export const ADMIN_PRODUCT_LIST = ADMIN_ROUTE + '/products'
export const CREATE_PRODUCT_ROUTE = ADMIN_ROUTE + '/product/create'
export const EDIT_PRODUCT_ROUTE = ADMIN_ROUTE + '/product'

/*
 *  Users
 */
export const ADMIN_USERS_LIST = ADMIN_ROUTE + '/users'
export const REGISTRATION_ROUTE = ADMIN_ROUTE + '/registration'
export const EDIT_USER_ROUTE = ADMIN_ROUTE + '/user'

/*
 *  Orders
 */
export const ADMIN_ORDERS_LIST = ADMIN_ROUTE + '/orders'
export const CREATE_ORDER_ROUTE = ADMIN_ROUTE + '/order/create'
export const EDIT_ORDER_ROUTE = ADMIN_ROUTE + '/order'

/*
 *  Clients (Shop)
 */
export const SHOP_ROUTE = '/'
export const SHOP_CATEGORY_ROUTE = '/shop/category'
export const CART_ROUTE = '/cart'
export const PRODUCT_ROUTE = '/shop/product'
