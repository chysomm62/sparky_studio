import axios from "axios";

export const getCustomers = () => {
  return axios.get("https://dummyjson.com/users").then((res) => res.data);
};
