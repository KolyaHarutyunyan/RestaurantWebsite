import { GET_RESTAURANTS } from "./restaurants.types";

const initialState = [
  {
    id: 1,
    name: "Restaurant_1",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 2,
    name: "Restaurant_2",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 3,
    name: "Restaurant_3",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 4,
    name: "Restaurant_5",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 5,
    name: "Restaurant_6",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 7,
    name: "Restaurant_7",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 8,
    name: "Restaurant_8",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 9,
    name: "Restaurant_8",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 10,
    name: "Restaurant_8",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 11,
    name: "Restaurant_8",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 12,
    name: "Restaurant_8",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 14,
    name: "Restaurant_8",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 15,
    name: "Restaurant_8",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 16,
    name: "Restaurant_8",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 17,
    name: "Restaurant_8",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 19,
    name: "Restaurant_8",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 20,
    name: "Restaurant_8",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 21,
    name: "Restaurant_8",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 22,
    name: "Restaurant_8",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 23,
    name: "Restaurant_8",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
  {
    id: 24,
    name: "Restaurant_8",
    description: "",
    logo:
      "https://i.pinimg.com/originals/86/8a/9f/868a9f7df2081e7e16e1709e3034fa5d.png",
    QRImageUrl: "",
    extraDetails: {
      location: "7035 Brickell St. Flemington, NJ 08822",
      phone: "",
      hours: {
        mon: ["11:00 am - 02:00 pm", "05:00 pm - 12:00 am"],
        tue: ["11:00 am - 02:00 pm"],
        wed: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
        thu: [],
        fri: [],
        sat: [],
        sun: ["11:00 am - 02:00 pm", "11:00 am - 02:00 pm"],
      },
      webSite: "",
    },
    menus: [
      {
        id: "879879",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "8798sd79",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
      },
      {
        id: "879879sdf",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
      {
        id: "879879dfs",
        title: "Happy Hour Menu",
        tag: "happy_hour_menu_4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: false,
        backgroundImage:
          "https://www.gastronom.ru/binfiles/images/20151002/bc4c6ff2.jpg",
        categories: [],
      },
    ],
  },
];

export const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return action.payload;
    default:
      return state;
  }
};
