import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com";

export function getTotalTransactions() {
  return axios.get(BASE_URL + "/posts");
}

export function getAmount() {
  return axios.get(BASE_URL + "/posts");
}

export function recharge(params) {
    console.log(params)
  return axios
    .post("/user", {
      firstName: "Fred",
      lastName: "Flintstone",
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
}
