import axios from "axios"
const BASE_URL = 'https://jsonplaceholder.typicode.com';


export function getTotalTransactions() {
    return axios.get(BASE_URL + "/posts")
}

export function getAmount() {
    return axios.get(BASE_URL + "/posts")
}