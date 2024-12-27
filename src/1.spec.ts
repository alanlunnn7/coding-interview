import { dataProcessor } from "./1";

describe("Test dataProcessor", () => {
  it("Case 1", () => {
    const input = [
      "Alan",
      { name: " Alice ", age: "25", email: " alice@example.com " },
      { name: " Bob ", age: "30", email: " bob@example.com " },
    ];

    const expected = [
      { NAME: "Alice", AGE: "25", EMAIL: "alice@example.com" },
      { NAME: "Bob", AGE: "30", EMAIL: "bob@example.com" },
    ];
    expect(dataProcessor(input)).toEqual(expected);
  });

  it("Case 2", () => {
    const input = [
      { name: " Alice ", age: "25", email: " alice@example.com " },
      { name: " Bob ", age: "30", email: " bob@example.com " },
      { name: "Cindy ", age: 16, email: "cindy @example.com " },
    ];
    const expected = [
      { name: " Alice ", age: "25", email: " alice@example.com " },
      { name: " Bob ", age: "30", email: " bob@example.com " },
      { name: "Cindy ", age: 16, email: "cindy @example.com " },
    ];
    expect(dataProcessor(input)).toEqual(expected);
  });
});
