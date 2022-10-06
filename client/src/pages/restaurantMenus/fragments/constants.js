import moment from "moment";

export const menusBreadcrumbs = [{ path: "/menus", text: "Menus" }];

export const dummyMenus = [
  {
    id: Date.now(),
    name: "Menu Name",
    about: "About Menu!",
    items: new Array(35),
    lastUpdate: new Date(),
    isActive: true,
  },
  {
    id: Date.now(),
    name: "Longer menu name name nameee",
    about: "About Menu!",
    items: new Array(35),
    lastUpdate: new Date(),
    isActive: false,
  },
  {
    id: Date.now(),
    name: "Longer menu name name nameee",
    about: "About Menu!",
    items: new Array(35),
    lastUpdate: new Date(),
  },
  {
    id: Date.now(),
    name: "Menu Name",
    about: "About Menu!",
    items: new Array(35),
    lastUpdate: new Date(),
    isActive: true,
  },
  {
    id: Date.now(),
    name: "Longer menu name name nameee",
    about: "About Menu!",
    items: new Array(35),
    lastUpdate: new Date(),
    isActive: false,
  },
  {
    id: Date.now(),
    name: "Longer menu name name nameee",
    about: "About Menu!",
    items: new Array(35),
    lastUpdate: new Date(),
    isActive: false,
  },
];

export const formatDate = (date = new Date()) => moment(date).format("ll");
