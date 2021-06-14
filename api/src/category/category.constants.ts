export enum CategoryType {
  FOOD = 'FOOD',
  DRINK = 'DRINK',
}

export const summaries = {
  DELETE_ITEM: `Permanatly deletes the item from the database and removes its reference from all categories`,
  REORDER_ITEMS: `change the order of the items in this category from the "from" to "to" rank. Ranks is the index in the array`,
};
