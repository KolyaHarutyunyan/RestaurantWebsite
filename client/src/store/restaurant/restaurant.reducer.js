const initialState = {

  name: '',
  description: "",
  logoUrl: "",
  QRImageUrl: "dvggsdfgsdf",
  email: '',
  location: "",
  phone: "",
  hours: {},
  webSite: "",
  activeMenuId: 0,
  menus: [
    {
      id:"879879",
      title:"Happy Hour Menu",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
      status:false,
      backgroundImage:"https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      items:[]
    },
    {
      id:"8798sd79",
      title:"Happy Hour Menu",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
      status:false,
      backgroundImage:"https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      items:[]
    },
    {
      id:"879879sdf",
      title:"Happy Hour Menu",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
      status:false,
      backgroundImage:"https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      items:[]
    },
    {
      id:"879879dfs",
      title:"Happy Hour Menu",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
      status:false,
      backgroundImage:"https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      items:[]
    }
  ]

};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
