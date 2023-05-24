import { types } from "./types";

export function add(num1, num2) {
  return {
    type: types.ADD,
    payload: { num1, num2 }
  };
}

export function subtract(num1, num2) {
  return {
    type: types.SUBTRACT,
    payload: { num1, num2 }
  };
}

export function multiply(num1, num2) {
  return {
    type: types.MULTIPLY,
    payload: { num1, num2 }
  };
}

export function divide(num1, num2) {
  return {
    type: types.DIVIDE,
    payload: { num1, num2 }
  };
}
