import * as types from './profile.types';

export const updateAvatar = (data) => {
    return {
        type: types.UPDATE_AVATAR,
        payload: data,
    };
};

export const editProfile = (data) => {
    return {
        type: types.EDIT_PROFILE,
        payload: data,
    };
};
