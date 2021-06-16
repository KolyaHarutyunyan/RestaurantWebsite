export enum CategoryType {
  FOOD = 'FOOD',
  DRINK = 'DRINK',
}

export const summaries = {
  CREATE_CATEGORY: `Create a new category    ------DONE`,
  EDIT_CATEGORY: `Edit the category information    -----DONE`,
  GET_CATEGORY: `Get the category without its items   ---DONE`,
  GET_BUSINESS_CATEGORY: ` Get all categories belonging to a business   ---DONE`,
  ADD_ITEM: `Adds an existing item to this category    -------DONE`,
  REMOVE_ITEM: `Removes the item from this category only    -------DONE`,
  DELETE_ITEM: `Permanatly deletes the item from the database and removes its reference from all categories        ------DONE`,
  REORDER_ITEMS: `change the order of the items in this category from the "from" to "to" rank. Ranks is the index in the array        ------DONE`,
  GET_ITEMS: `returns the items that are in this category    ------DONE`,
};
