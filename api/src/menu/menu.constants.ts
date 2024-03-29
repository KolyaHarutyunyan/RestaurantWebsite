export enum CategoryType {
  FOOD = 'FOOD',
  DRINK = 'DRINK',
}

export const summaries = {
  ACTIVATE: `Toggles the menu status. If the menu was active, it inactives it. 
  If the menu was inactive, it activates it and inactivates all other menus that are acive`,
  REMOVE_CATEGORY: `Remove a category from this menus`,
  DELETE_CATEGORY: `Permanantly delete a category from all menus and the system`,
  ADD_CATEGORY: `Add an existing category to this menu, will add the category with all its menu items`,
  DELETE_MENU: `Permanantly deletes the menu from the system`,
  REORDER_CATEGORIES: `Change the order of the categories in this menu`,
  GET_CATEGORIES: `Get the categories of the menu`,
  GET_ACTIVE: `Gets the active menu of the business`,
  GET_FULL: `Gets a menu with an id with all items and categories populated`,
};
