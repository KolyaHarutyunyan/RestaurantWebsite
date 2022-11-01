export { menusActions } from "./menus.actions";
export { menusReducer } from "./menus.reducer";
export { watchMenus } from "./menus.saga";

function moveItem(arr, fromIndex, toIndex) {
  let itemRemoved = arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, itemRemoved[0]);
  return arr;
}

export const handleReorderCategory = (move, info, type, changeType, catId) => {
  if (changeType === "items") {
    const anotherArr = { ...info };
    const selectedCategory = anotherArr[type].find((i) => i.id === catId)
    selectedCategory.items = moveItem(selectedCategory.items, move.from, move.to);
    return anotherArr;
  } else {
    const anotherArr = { ...info };
    anotherArr[type] = moveItem(info[type], move.from, move.to);
    return anotherArr;
  }
};