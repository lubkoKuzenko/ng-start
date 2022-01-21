import { OrderByPipe } from "./order-by.pipe";

describe("OrderByPipe", () => {
  const pipe = new OrderByPipe();
  it("should create a pipe instance", () => {
    expect(pipe).toBeTruthy();
  });

  it(`should sort array by 'name' property`, () => {
    expect(pipe.transform([{ name: "Haresh" }, { name: "Paresh" }, { name: "Amit" }], "name")).toEqual([
      { name: "Amit" },
      { name: "Haresh" },
      { name: "Paresh" },
    ]);
  });
});
