import axios from "axios";

export let accessToken;
export const LoginHack = axios
  .post(`${"http://16.176.227.107:3000"}/auth/login`, {
    username: "hduc",

    password: "123456",
  })
  .then(function (response) {
    accessToken = response.data.accessToken;
  })
  .catch(function (error) {
    console.log(error);
  });
