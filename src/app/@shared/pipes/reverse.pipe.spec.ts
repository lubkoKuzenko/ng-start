import { ReverseStrPipe } from "./reverse.pipe";

describe("[SHARED]: ReverseStrPipe", () => {
  let reversStringPipe: ReverseStrPipe;

  beforeEach(() => {
    reversStringPipe = new ReverseStrPipe();
  });

  it("should be instanciated", () => {
    expect(reversStringPipe).toBeDefined();
  });

  it("should return empty string if no string given", () => {
    const undefinedResult = reversStringPipe.transform(undefined);

    expect(undefinedResult).toBe("");
  });

  it("should return reverse string", () => {
    const reverced = reversStringPipe.transform("test");

    expect(reverced).toBe("tset");
  });
});
