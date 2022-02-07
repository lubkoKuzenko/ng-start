import { isNullOrUndefined, isObject } from "./typeguards";

/**
 * @tutorial https://coderwall.com/p/urxpsa/remove-falsy-values-or-empty-strings-from-javascript-objects
 */
export function removeEmptyValues<T extends object>(obj: T): Partial<T> {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    const value = (obj as any)[key];
    if (isObject(value)) {
      (newObj as any)[key] = removeEmptyValues(value);
    } else if (!isNullOrUndefined(value) && value !== "") {
      (newObj as any)[key] = value;
    }
  });
  return newObj;
}

export const removeFalsy = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((prop) => {
    if (obj[prop]) {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};

export const removeEmptyStrings = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((prop) => {
    if (obj[prop] !== "") {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};
