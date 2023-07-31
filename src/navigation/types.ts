export type RootStackParamList = {
  Root: undefined;
  Modal: {
    type: string;
    title: string;
    message?: string;
    options: {
      iconName: string;
      iconColor: string;
    };
  };
};

export type MainStackParamList = {
  Drawer: {screen: string};
  ProductDetails: {productId: string};
  Search: undefined;
  SignUp: undefined;
  Login: undefined;
  ForgotPassword: undefined;
};

export type DrawerParamList = {
  Main: undefined;
  MyProfile: undefined;
  MyWishList: undefined;
  MyCart: undefined;
  MyOrders: undefined;
};
