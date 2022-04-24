import {
    CREATE_ITEM,
    UPDATE_ITEM,
    GET_ITEMS,
    DELETE_ITEM,
} from "./items.types";

export const itemActions = {
    get: (categoryId) => ({
        type: GET_ITEMS,
        payload: categoryId,
    }),
    create: (data, menuId, categoryId, categoryType) => ({
        type: CREATE_ITEM,
        payload: {data, menuId, categoryId, categoryType},
    }),
    update: (info, id, menuId) => ({
        type: UPDATE_ITEM,
        payload: {info, id, menuId},
    }),
    delete: (itemId, menuId) => ({
        type: DELETE_ITEM,
        payload: {itemId, menuId},
    }),
};
