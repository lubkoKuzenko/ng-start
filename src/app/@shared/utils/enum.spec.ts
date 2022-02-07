import { enumToEntries, enumToKeys, enumToValues, enumValueToKey, fromEnum, isEnumKey, isEnumValue } from ".";

enum DayOfWeek {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}

describe("[Utils] isEnumKey function", () => {
  const TEST_CASES = [
    {
      value: DayOfWeek,
      key: DayOfWeek[DayOfWeek.Friday],
      result: true,
    },
    {
      value: DayOfWeek,
      key: "NotExistingDay",
      result: false,
    },
  ];

  TEST_CASES.forEach(({ value, key, result }) => {
    it(`should return if enum has this specific key`, () => {
      expect(isEnumKey(value, key)).toEqual(result);
    });
  });
});

describe("[Utils] isEnumValue function", () => {
  const TEST_CASES = [
    {
      value: DayOfWeek,
      key: DayOfWeek.Monday,
      result: true,
    },
    {
      value: DayOfWeek,
      key: 77,
      result: false,
    },
  ];

  TEST_CASES.forEach(({ value, key, result }) => {
    it(`should return if enum has this specific value`, () => {
      expect(isEnumValue(value, key)).toEqual(result);
    });
  });
});

describe("[Utils] enumToKeys function", () => {
  const TEST_CASES = [
    {
      value: DayOfWeek,
      result: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
  ];

  TEST_CASES.forEach(({ value, result }) => {
    it(`should convert enum to enum keys array`, () => {
      expect(enumToKeys(value)).toEqual(result);
    });
  });
});

describe("[Utils] enumToValues function", () => {
  const TEST_CASES = [
    {
      value: DayOfWeek,
      result: [1, 2, 3, 4, 5, 6, 7],
    },
  ];

  TEST_CASES.forEach(({ value, result }) => {
    it(`should convert enum to enum values array`, () => {
      expect(enumToValues(value)).toEqual(result);
    });
  });
});

describe("[Utils] enumValueToKey function", () => {
  const TEST_CASES = [
    {
      value: DayOfWeek,
      key: DayOfWeek.Friday,
      result: "Friday",
    },
    {
      value: DayOfWeek,
      key: 11,
      result: undefined,
    },
  ];

  TEST_CASES.forEach(({ value, key, result }) => {
    it(`should convert enum to enum values array`, () => {
      expect(enumValueToKey(value, key)).toEqual(result);
    });
  });
});

describe("[Utils] enumToEntries function", () => {
  const TEST_CASES = [
    {
      value: DayOfWeek,
      result: [
        ["Monday", 1],
        ["Tuesday", 2],
        ["Wednesday", 3],
        ["Thursday", 4],
        ["Friday", 5],
        ["Saturday", 6],
        ["Sunday", 7],
      ],
    },
  ];

  TEST_CASES.forEach(({ value, result }) => {
    it(`should convert enum to enum values array`, () => {
      expect(enumToEntries(value)).toEqual(result);
    });
  });
});

describe("[Utils] enumToEntries function", () => {
  const TEST_CASES = [
    {
      value: DayOfWeek,
      result: [
        { label: "Monday", value: 1 },
        { label: "Tuesday", value: 2 },
        { label: "Wednesday", value: 3 },
        { label: "Thursday", value: 4 },
        { label: "Friday", value: 5 },
        { label: "Saturday", value: 6 },
        { label: "Sunday", value: 7 },
      ],
    },
  ];

  TEST_CASES.forEach(({ value, result }) => {
    it(`should convert enum to enum values array`, () => {
      interface Option<T> {
        label: keyof T;
        value: T[keyof T];
      }

      const options: Option<typeof DayOfWeek>[] = fromEnum(
        value,
        ([label, value]: [keyof typeof DayOfWeek, DayOfWeek]) => ({
          label,
          value,
        }),
      );

      expect(options).toEqual(result);
    });
  });
});
