export const isNull = (x: any): x is null => x === null;

export function isNullOrUndefined<T extends any>(value: T): value is NonNullable<T> {
  return value === undefined || value === null || value === "undefined" || value === "null";
}

export const isObject = (x: any): x is object => Object.prototype.toString.call(x) === "[object Object]";

export const isArray = <T>(item: T[] | any): item is T[] => !!(item && item.constructor === Array);

export const isFunction = (x: any): x is Function => !!(x && x.constructor && x.call && x.apply);

export function isEmpty(value: any): boolean {
  if (isNullOrUndefined(value)) {
    return true;
  }
  if (!Array.isArray(value)) {
    value = Object.getOwnPropertyNames(value);
  }
  return value.length === 0;
}
