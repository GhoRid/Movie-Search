import { posterInstance } from "../index.js";

export const getPosters = () => {
  return posterInstance.get("");
};
