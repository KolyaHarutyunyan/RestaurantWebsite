const initialState = {

  name: '',
  description: "",
  logoUrl: "",
  QRImageUrl: "",
  email: '',
  location: "",
  phone: "",
  hours: {},
  webSite: "",
  activeMenuId: 0,
  menus: [  ]

};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
