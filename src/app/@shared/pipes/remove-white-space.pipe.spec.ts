import { RemoveWhiteSpacePipe } from "./remove-white-space.pipe";

describe("[SHARED]: RemoveWhiteSpacePipe", () => {
  let removeWhiteSpacePipe: RemoveWhiteSpacePipe;

  beforeEach(() => {
    removeWhiteSpacePipe = new RemoveWhiteSpacePipe();
  });

  it("should be instanciated", () => {
    expect(removeWhiteSpacePipe).toBeDefined();
  });

  it("should return 'undefined' if no string given", () => {
    const undefinedResult = removeWhiteSpacePipe.transform(undefined);

    expect(undefinedResult).toBe("undefined");
  });

  it("should return string without spaces", () => {
    const result = removeWhiteSpacePipe.transform("test test");

    expect(result).toBe("testtest");
  });
});
