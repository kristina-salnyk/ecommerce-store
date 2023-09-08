export type RootStackParamList = {
  Root: {screen: string};
  Modal: {
    type: string;
    title: string;
    message?: string;
    options?: {
      iconName: string;
      iconColor: string;
    };
  };
};

export type MainStackParamList = {
  Drawer: {screen: string};
  ProductDetails: {productSlug: string};
  Search: undefined;
  SignUp: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  OrderDetails: {orderNumber: string};
  Map: {address: string};
};

export type DrawerParamList = {
  Main: undefined;
  MyProfile: {profileImage: string} | undefined;
  MyWishList: undefined;
  MyCart: undefined;
  MyOrders: undefined;
};
