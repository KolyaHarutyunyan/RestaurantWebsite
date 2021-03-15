import axios from 'axios'

const mode = ["local", "prod", "dev"][0]
export const APIUrl = {
  local: "http://192.168.43.10:9232/api",
  dev: "https://menuz.eachbase.com/api",
  prod: "https://menuz.eachbase.com/api"
}[mode];


export const api = {
  // getCode: body => axios.post(`${APIUrl}/otp/getCode`, body),
  // verifyCode: body => axios.post(`${APIUrl}/otp/verifyCode`, body),
  // signIn: body => axios.post(`${APIUrl}/auth/signin`, body),
  // signUp: (body, token) => axios.post(`${APIUrl}/auth/signup`, body, {headers: {"otp-token": token}}),
  // updateUserData: (id, body, token) => axios.post(`${APIUrl}/users/${id}`, body, {headers: {"auth-token": token}}),
  // updateAvatar:(id, token, body) => axios.post(`${APIUrl}/users/${id}/addAvatar`, body, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //     "auth-token": token
  //   }
  // }),
}