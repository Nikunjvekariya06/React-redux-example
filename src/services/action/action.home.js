import { INCREEMENT, DECREEMENT } from "../constant";

export const Increement = (data) => {
  //console.warn("action", data);
  return {
    type: INCREEMENT,
    data: data,
  };
};

export const Decreement = (data) => {
  //console.warn("action", data);
  return {
    type: DECREEMENT,
    data: data,
  };
};
