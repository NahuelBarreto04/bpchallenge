import axios from "axios";
import { useQuery } from "react-query";
const fetchIdols = () => {
  return axios.get("https://635f4c223e8f65f283b02b0d.mockapi.io/idols");
};
export const useIdolsData = () => {
  return useQuery("idols", fetchIdols);
};
