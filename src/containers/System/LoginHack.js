import axios from "axios";

export let accessToken;
export const LoginHack = axios
  .post(`${"http://3.107.79.11:3434"}/auth/login`, {
    username: "hduc",

    password: "123456",
  })
  .then(function (response) {
    accessToken = response.data.accessToken;
  })
  .catch(function (error) {
    console.log(error);
  });
