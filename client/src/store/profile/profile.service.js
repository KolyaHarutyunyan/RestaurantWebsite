import axios from "axios";

export const profileService = {
    signIn: (credentials) => axios.post("/auth/signin", credentials),
    signUp: (data) => axios.post("/owners", data),

    signUpSocialGoogle: () => axios.get('/owners/socials/google'),
    signUpSocialFace: () => axios.get('/owners/socials/facebook'),
    signUpSocialApple: () => axios.get('/owners/socials/apple'),

    userInfo: () => axios.get("/owners/profile", {auth: true}),
    deleteProfile: () => axios.delete("/user", {auth: true}),
    forgotPassword: (email) => axios.get(`/auth/forgotPassword/${email}`),
    changePassword: (data) =>
        axios.patch(`/auth/${data.id}/changePassword`, {
            password: data.password,
            newPassword: data.newPassword,
            confirmation: data.confirmation,
        }, {auth: true}),
    updateProfileInfo: (data) => axios.patch("/owners", data, {auth: true}),
    resetPassword: (data, token) =>
        axios.post("/auth/resetPassword", data, {
            headers: {"reset-token": token},
            auth: false,
        }),
};
