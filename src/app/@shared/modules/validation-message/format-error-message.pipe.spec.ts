import { FormatErrorMessagePipe } from "./format-error-message.pipe";

describe("FormatErrorMessagePipe", () => {
  const pipe = new FormatErrorMessagePipe();
  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("formats error required", () => {
    expect(pipe.transform({ key: "required", value: true })).toEqual("This field cannot be left blank");
  });

  it("formats error maxlength", () => {
    expect(
      pipe.transform({
        key: "maxlength",
        value: {
          actualLength: 20,
          requiredLength: 10,
        },
      }),
    ).toEqual("Maximum length 10");
  });
});
