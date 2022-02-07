import { isNull, isEmpty, isArray, isObject, isFunction } from "./typeguards";

describe("[Utils] Typequard functions", () => {
  const TEST_CASES = [
    { value: null, result: true },
    { value: undefined, result: false },
    { value: {}, result: false },
    { value: [], result: false },
    { value: "", result: false },
    { value: !null, result: false },
  ];

  TEST_CASES.forEach(({ value, result }) => {
    it(`should check if value isNull`, () => {
      expect(isNull(value)).toBe(result);
    });
  });
});

describe("[Utils] Typequard functions", () => {
  const TEST_CASES = [
    { value: null, result: false },
    { value: undefined, result: false },
    { value: {}, result: true },
    { value: [], result: false },
    { value: new Object(), result: true },
    { value: { ...{} }, result: true },
  ];

  TEST_CASES.forEach(({ value, result }) => {
    it(`should check if value isObject`, () => {
      expect(isObject(value)).toBe(result);
    });
  });
});

describe("[Utils] Typequard functions", () => {
  const TEST_CASES = [
    { value: null, result: false },
    { value: undefined, result: false },
    { value: {}, result: false },
    { value: [], result: true },
    { value: new Array(), result: true },
    { value: [...[]], result: true },
  ];

  TEST_CASES.forEach(({ value, result }) => {
    it(`should check if value isArray`, () => {
      expect(isArray(value)).toBe(result);
    });
  });
});

describe("[Utils] Typequard functions", () => {
  const TEST_CASES = [
    { value: null, result: false },
    { value: undefined, result: false },
    { value: {}, result: false },
    { value: [], result: false },
    { value: new Function(), result: true },
    { value: () => {}, result: true },
  ];

  TEST_CASES.forEach(({ value, result }) => {
    it(`should check if value isFunction`, () => {
      expect(isFunction(value)).toBe(result);
    });
  });
});

describe("[Utils] Typequard functions", () => {
  const TEST_CASES = [
    { value: null, result: true },
    { value: undefined, result: true },
    { value: {}, result: true },
    { value: [], result: true },
    { value: "", result: false },
    { value: new Array(), result: true },
    { value: [...[]], result: true },
  ];

  TEST_CASES.forEach(({ value, result }) => {
    it(`should check if value isEmpty`, () => {
      expect(isEmpty(value)).toBe(result);
    });
  });
});
