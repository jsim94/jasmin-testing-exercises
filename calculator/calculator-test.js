describe("Calculate Monthly Payment", () => {
  it("should calculate the monthly rate correctly", function () {
    expect(calculateMonthlyPayment({ amount: 250000, years: 20, rate: 4 })).toEqual("1514.95");
    expect(calculateMonthlyPayment({ amount: 250000, years: 20, rate: "a" })).toEqual(false);
  });
});

/// etc
