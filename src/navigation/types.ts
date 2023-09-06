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
};

export type DrawerParamList = {
  Main: undefined;
  MyProfile: {profileImage: string};
  MyWishList: undefined;
  MyCart: undefined;
  MyOrders: undefined;
};
