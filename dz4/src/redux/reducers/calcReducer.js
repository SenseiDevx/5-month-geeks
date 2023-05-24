import { types } from "../types";

const initialState = {
  num1: "",
  num2: "",
  result: "",
  error: ""
};

export default function calcReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        result: action.payload.num1 + action.payload.num2,
      };
    case types.SUBTRACT:
      return {
        ...state,
        result: action.payload.num1 - action.payload.num2,
      };
    case types.MULTIPLY:
      return {
        ...state,
        result: action.payload.num1 * action.payload.num2,
      };
    case types.DIVIDE:
      if (action.payload.num2 === 0) {
        return {
          ...state,
          result: "",
          error: 'Нельзя делить на ноль'
        };
      } else {
        return {
          ...state,
          result: action.payload.num1 / action.payload.num2,
        };
      }

    default:
      return state;
  }
}
