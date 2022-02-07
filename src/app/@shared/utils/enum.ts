type Enum = { [s: number]: string };

/* Check if a key is property of enum
console.log(isEnumKey(DayOfWeek, DayOfWeek[DayOfWeek.Friday])); // true
console.log(isEnumKey(DayOfWeek, DayOfWeek[DayOfWeek.Monday])); // true
console.log(isEnumKey(DayOfWeek, "NotExistingDay");             // false
*/
export function isEnumKey<T extends Enum>(enumSrc: T, key: unknown): key is keyof T {
  return Number.isInteger(enumSrc[key as keyof T]);
}

/* Check if enum has a given value
console.log(isEnumValue(DayOfWeek, DayOfWeek.Friday)); // true
console.log(isEnumValue(DayOfWeek, DayOfWeek.Monday)); // true
console.log(isEnumValue(DayOfWeek, 77));               // false
*/

export function isEnumValue<T extends Enum>(enumSrc: T, value: unknown): value is T[keyof T] {
  return Number.isInteger(enumSrc[enumSrc[value as keyof T] as any as keyof T]);
}

/* Transform enum to list of keys */

export function enumToKeys<T extends Enum>(enumSrc: T): (keyof T)[] {
  return Object.keys(enumSrc).filter((key: keyof T | any) => isEnumKey(enumSrc, key)) as (keyof T)[];
}

/* Transform enum to list of values */

export function enumToValues<T extends Enum>(enumSrc: T): T[keyof T][] {
  return enumToKeys(enumSrc).map((key: keyof T) => enumSrc[key]);
}

/* Transform enum value to its appropriate key
console.log(enumValueToKey(DayOfWeek, DayOfWeek.Friday)); // Friday
console.log(enumValueToKey(DayOfWeek, DayOfWeek.Monday)); // Monday
console.log(enumValueToKey(DayOfWeek, 44));               // undefined
*/

export function enumValueToKey<T extends Enum>(enumSrc: T, value: T[keyof T]): keyof T | undefined {
  return (enumSrc as any)[value];
}

/* Transform enum to entries */

export function enumToEntries<T extends Enum>(enumSrc: T): [keyof T, T[keyof T]][] {
  return enumToValues(enumSrc).map((value: T[keyof T]) => [enumValueToKey(enumSrc, value) as keyof T, value]);
}

/* Project the list of objects from an enum 
    interface Option<T> {
        label: keyof T;
        value: T[keyof T];
    }

    const options: Option<typeof DayOfWeek>[] = fromEnum(
        DayOfWeek,
        ([label, value]: [keyof typeof DayOfWeek, DayOfWeek]) => ({ label, value })
    );

    console.log(options);
*/

export function fromEnum<T extends Enum, C>(
  enumSrc: T,
  projection: (item: [keyof T, T[keyof T]], index: number, array: [keyof T, T[keyof T]][]) => C,
  skip?: (value: [keyof T, T[keyof T]], index: number, array: [keyof T, T[keyof T]][]) => boolean,
) {
  let entries = enumToEntries(enumSrc);

  if (skip) entries = entries.filter(skip);

  return entries.map(projection);
}
