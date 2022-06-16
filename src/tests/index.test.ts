const sum = (a: number, b: number) => a + b;

describe("Mock test 1", () => {
  it("should pass always", () => {
    return expect(sum(1, 2)).toBe(3);
  });
});
