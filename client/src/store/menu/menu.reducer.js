const initialState = {
  id: "879879",
  title: "Happy Hour Menu",
  tag: "happy_hour_menu_1",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
  status: false,
  imageUrl: "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",

  categories: {
    drinks: ["879ddf8as79"],
    foods: ["879ddf879", "879ddf8sd79"],
  },
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
