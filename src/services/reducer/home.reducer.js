import { INCREEMENT, DECREEMENT } from "../constant";

const initailstate = {
  number: [],
};

export default function Counter(state = [], action) {
  switch (action.type) {
    case INCREEMENT:
      //console.warn("reducer", action);
      return [...state, { number: action.data }];
    case DECREEMENT:
      //console.warn("reducer", action);
      return [...state, { number: action.data }];
    default:
      return state;
  }
}
