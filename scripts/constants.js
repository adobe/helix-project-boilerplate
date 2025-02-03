import { localizeLink } from './scripts.js';

export const SUPPORT_PATH = localizeLink('/support');

// GUEST
export const ORDER_STATUS_PATH = localizeLink('/order-status');
export const ORDER_DETAILS_PATH = localizeLink('/order-details');
export const RETURN_DETAILS_PATH = localizeLink('/return-details');
export const CREATE_RETURN_PATH = localizeLink('/create-return');
export const SALES_GUEST_VIEW_PATH = localizeLink('/sales/guest/view/');

// CUSTOMER
export const CUSTOMER_PATH = localizeLink('/customer');
export const CUSTOMER_ORDER_DETAILS_PATH = `${CUSTOMER_PATH}${ORDER_DETAILS_PATH}`;
export const CUSTOMER_RETURN_DETAILS_PATH = `${CUSTOMER_PATH}${RETURN_DETAILS_PATH}`;
export const CUSTOMER_CREATE_RETURN_PATH = `${CUSTOMER_PATH}${CREATE_RETURN_PATH}`;
export const CUSTOMER_ORDERS_PATH = `${CUSTOMER_PATH}/orders`;
export const CUSTOMER_RETURNS_PATH = `${CUSTOMER_PATH}/returns`;
export const CUSTOMER_ADDRESS_PATH = `${CUSTOMER_PATH}/address`;
export const CUSTOMER_LOGIN_PATH = `${CUSTOMER_PATH}/login`;
export const CUSTOMER_ACCOUNT_PATH = `${CUSTOMER_PATH}/account`;
export const CUSTOMER_FORGOTPASSWORD_PATH = `${CUSTOMER_PATH}/forgotpassword`;
export const SALES_ORDER_VIEW_PATH = localizeLink('/sales/order/view/');

// TRACKING
export const UPS_TRACKING_URL = 'https://www.ups.com/track';
