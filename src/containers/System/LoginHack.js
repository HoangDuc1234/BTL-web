import axios from "axios";

export let accessToken;
export const LoginHack = axios
  .post(
    `${() => {
      if (process.env.NODE_ENV === "production") {
        return `${window.location.protocol}//${window.location.hostname}:3434`;
      }
      return "http://localhost:3434";
    }}/auth/login`,
    {
      username: "hduc",

      password: "123456",
    }
  )
  .then(function (response) {
    accessToken = response.data.accessToken;
  })
  .catch(function (error) {
    console.log(error);
  });
