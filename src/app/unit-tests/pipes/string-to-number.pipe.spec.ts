import { ToNumberPipe } from "./string-to-number.pipe";

// const TEST_CASES = [
//   { value: 12, result: 12 },
//   { value: 12.2, result: 12.2 },
//   { value: "12", result: 12 },
//   { value: "", result: NaN },
//   { value: " ", result: NaN },
//   { value: "12a", result: NaN },
//   { value: "vv12", result: NaN },
// ];

// describe("ToNumberPipe", () => {
//   const pipe = new ToNumberPipe();
//   it("should create a pipe instance", () => {
//     expect(pipe).toBeTruthy();
//   });

//   TEST_CASES.forEach(({ value, result }) => {
//     it(`should match the ${value} with to ${result}`, () => {
//       expect(pipe.transform(value)).toEqual(result);
//     });
//   });
// });

const pipe = new ToNumberPipe();
describe("ToNumberPipe", () => {
  test.each`
    value     | result
    ${12}     | ${12}
    ${12.2}   | ${12.2}
    ${"12"}   | ${12}
    ${""}     | ${NaN}
    ${" "}    | ${NaN}
    ${"12a"}  | ${NaN}
    ${"vv12"} | ${NaN}
  `("should match the $value with to $result", ({ value, result }) => {
    expect(pipe).toBeTruthy();
    expect(pipe.transform(value)).toEqual(result);
  });
});
