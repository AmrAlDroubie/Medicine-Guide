import { reactive } from "vue";
import { loginData } from "./SignUp.vue";
import { ref } from "vue";
export const checkLogin = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const header = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    };
    try {
      const request = await fetch(
        "http://127.0.0.1:8000/api/checktoken",
        header
      );
      const res = await request.json();
      if (res.token_status == true) {
        loginData.loginStatus = true;
        loginData.pharmacy = res.pharmacy;
        loginData.token = token;
      } else {
        loginData.checkCount++;
      }
    } catch (e) {
      console.log(e);
    }
  }
  return loginData;
};
