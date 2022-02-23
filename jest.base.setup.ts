import "jest-preset-angular/setup-jest"; // commented out due to issue in latest jest-preset-angular

Error.stackTraceLimit = 2;
const CI = process.env["CI"] === "true";

/**
 * GLOBAL MOCKS
 */

Object.defineProperty(window, "CSS", { value: null });
Object.defineProperty(document, "doctype", {
  value: "<!DOCTYPE html>",
});

Object.defineProperty(window, "getComputedStyle", {
  value: () => ({
    display: "none",
    appearance: ["-webkit-appearance"],
  }),
});
Object.defineProperty(
  window.navigator,
  "userAgent",
  ((value) => ({
    get() {
      return value;
    },
    set(v: string) {
      value = v;
    },
  }))(window.navigator["userAgent"]),
);

if (CI) {
  const consoleMethods: string[] = ["trace", "debug", "warn", "log", "group", "groupCollapsed"];

  consoleMethods.forEach((methodName: string) => {
    jest.spyOn(global.console, methodName as any).mockImplementation(() => jest.fn());
  });
}

// https://github.com/angular/angular/issues/20827#issuecomment-394487432
(window as any)["__zone_symbol__supportWaitUnResolvedChainedPromise"] = true;
