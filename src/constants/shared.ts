export const REFRESHING_DELAY = 2000;

export const MOBILE_BREAKPOINT = 768;

export const ORIENTATION_TYPES = {LANDSCAPE: 'landscape', PORTRAIT: 'portrait'};

export const PERCENTAGE_FILLED_BY_DRAWER = 80;

export const PERCENTAGE_FILLED_BY_PRODUCT_ITEMS = 100;

export const PORTRAIT_LIST_COLUMNS = 2;

export const LANDSCAPE_LIST_COLUMNS = 4;

export const PRODUCT_ITEMS_PER_PAGE = 20;

export const PICSUM_PHOTOS_ID_LIMIT = 1084;

export const PRODUCT_ITEM_IMAGE_SIZE = 150;

export const PURCHASE_ITEM_IMAGE_SIZE = 120;

export const ORDER_PURCHASE_IMAGE_SIZE = 90;

export const SLIDER_SIZE = 300;

export const SLIDER_BOTTOM_INDENT = 130;

export const PAGINATION_DOT_SCALE = 1;

export const DEFAULT_ICON_SIZE = 30;

export const BUTTON_ICON_SIZE = 20;

export const DRAWER_ICON_SIZE = 25;

export const MODAL_ICON_SIZE = 60;

export const PROFILE_AVATAR_SIZE = 120;

export const MAP_REGION_DELTA = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export const IMAGE_PICKER_OPTIONS = {
  mediaType: 'photo',
  includeBase64: false,
  maxHeight: 2000,
  maxWidth: 2000,
};

export const MODAL_OPTIONS = {
  error: {
    iconName: 'closecircleo',
    iconColor: 'redAccent',
  },
  warning: {
    iconName: 'exclamationcircleo',
    iconColor: 'orangeAccent',
  },
  success: {
    iconName: 'checkcircleo',
    iconColor: 'greenAccent',
  },
};

export const MODAL_TYPES = {
  confirm: 'confirm',
  auth: 'auth',
  logout: 'logout',
  login: 'login',
  avatar: 'avatar',
};

export const NOTIFICATIONS = {
  selectColorModal: {
    title: 'Select color',
    message: 'Please select your color to add this item in your cart',
  },
  productAddedModal: {
    title: 'Product added to your cart',
  },
  productNotAddedModal: {
    title: 'Product not added',
    message: 'Product not available, please try again later',
  },
  productNotRemovedModal: {
    title: 'Product not removed',
    message: 'Product not deleted, please try again later',
  },
  productQuantityNotChangedModal: {
    title: 'Product quantity not changed',
    message: 'Product quantity not changed, please try again later',
  },
  notAuthorizedModal: {
    title: 'Login To Continue',
    message: 'Please login to add product in your cart',
  },
  profileUpdatedModal: {
    title: 'Profile updated',
  },
  profileNotUpdatedModal: {
    title: 'Profile not updated',
    message: 'Profile not updated, please try again later',
  },
  chooseAvatarModal: {
    title: 'Choose uploading method',
  },
  logoutModal: {
    title: 'Are you sure you want to logout?',
  },
  signUpModal: {
    title: 'Sign Up Successful',
  },
  emptyFieldsModal: {
    title: 'Validation Failed',
    message: 'Please fill all the fields',
  },
  passwordConfirmationModal: {
    title: 'Validation Failed',
    message: 'Password and confirm password must be same',
  },
  signUpFailedModal: {
    title: 'Sign Up Failed',
    message: 'Something went wrong. Please try again later',
  },
  loginFailedModal: {
    title: 'Login Failed',
    message: 'Something went wrong. Please try again later',
  },
  loadingFailedNotification: {
    title: 'Loading Failed',
    message: 'Something went wrong. Please try again later',
  },
  emptyProductDetailsNotification: {
    title: 'No Product Details',
    message: 'No product details received',
  },
  emptyProductsNotification: {
    title: 'No Products',
    message: 'No products received',
  },
  emptyOrdersNotification: {
    title: 'No Orders',
    message: 'No orders received',
  },
  emptyCartNotification: {
    title: 'Your Cart is Empty',
    message: 'Add product to your cart now',
  },
  notLoggedNotification: {
    title: 'Login First',
    message: 'Login first to view your cart',
  },
};
