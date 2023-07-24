export type RootStackParamList = {
  Drawer: {screen: string};
  ProductDetails: {productId: string};
  Search: undefined;
};

export type DrawerParamList = {
  Main: {isDrawerLink: boolean};
  MyProfile: {isDrawerLink: boolean};
  MyWishList: {isDrawerLink: boolean};
  MyCart: {isDrawerLink: boolean};
  MyOrders: {isDrawerLink: boolean};
};
