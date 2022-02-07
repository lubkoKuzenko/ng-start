import { removeEmptyValues, removeFalsy, removeEmptyStrings } from "./remove-empty-values";

describe("[Utils] removeEmptyValues function", () => {
  const TEST_CASES = [
    {
      value: {
        key1: 0,
        key2: "",
        key3: false,
        key4: "hello!",
        key7: { key8: "" }, // nested value won't be removed
      },
      result: { key1: 0, key3: false, key4: "hello!", key7: {} },
    },
  ];

  TEST_CASES.forEach(({ value, result }) => {
    it(`should return object without empty values`, () => {
      expect(removeEmptyValues(value)).toEqual(result);
    });
  });
});

describe("[Utils] removeFalsy function", () => {
  const TEST_CASES = [
    {
      value: {
        key1: 0,
        key2: "",
        key3: false,
        key4: "hello!",
        key7: { key8: "" }, // nested value won't be removed
      },
      result: { key4: "hello!", key7: { key8: "" } },
    },
  ];

  TEST_CASES.forEach(({ value, result }) => {
    it(`should return object without false values`, () => {
      expect(removeFalsy(value)).toEqual(result);
    });
  });
});

describe("[Utils] removeEmptyStrings function", () => {
  const TEST_CASES = [
    {
      value: {
        key1: 0,
        key2: "",
        key3: false,
        key4: "hello!",
        key7: { key8: "" }, // nested value won't be removed
      },
      result: { key1: 0, key3: false, key4: "hello!", key7: { key8: "" } },
    },
  ];

  TEST_CASES.forEach(({ value, result }) => {
    it(`should return object without empty strings values`, () => {
      expect(removeEmptyStrings(value)).toEqual(result);
    });
  });
});
