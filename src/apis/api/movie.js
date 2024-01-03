import { instance } from "../index.js";

export const getMovieDatas = (title) => {
  console.log(title);
  return instance.get("", { params: { apikey: "6c6fb4", s: title } });
};
