import axios from "axios";

export let accessToken;
export const LoginHack = axios
  .post(`${""}/auth/login`, {
    username: "hduc",

    password: "123456",
  })
  .then(function (response) {
    accessToken = response.data.accessToken;
  })
  .catch(function (error) {
    console.log(error);
  });
