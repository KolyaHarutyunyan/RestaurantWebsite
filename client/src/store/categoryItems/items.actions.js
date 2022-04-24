import {
    ADD_CATEGORY_ITEM,
    DELETE_CATEGORY_ITEM,
    GET_CATEGORY_ITEMS,
    REORDER_CATEGORY_ITEM,
} from "./items.types";

export const categoryItemActions = {
    get: (categoryId) => ({
        type: GET_CATEGORY_ITEMS,
        payload: categoryId,
    }),
    reorder: (menuId, categoryId, categType, move) => ({
        type: REORDER_CATEGORY_ITEM,
        payload: {menuId, categoryId, categType, move},
    }),

    add: (menuId, categoryId, itemId, categoryType) => ({
        type: ADD_CATEGORY_ITEM,
        payload: {menuId, categoryId, itemId, categoryType},
    }),
    delete: (menuId, categoryId, itemId, type) => ({
        type: DELETE_CATEGORY_ITEM,
        payload: {menuId, categoryId, itemId, type},
    }),
};
