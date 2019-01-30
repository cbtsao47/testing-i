const enhancer = require("../enhancer");
const item = {
  originalName: "Lambda Sword",
  name: `[+15]Lambda Sword`,
  type: "Weapon",
  durability: 100,
  enhancementLvl: 15
};
const failItem = {
  originalName: "Lambda Sword",
  name: `Lambda Sword`,
  type: "Weapon",
  durability: 20,
  enhancementLvl: 14
};
const expected = {
  originalName: "Lambda Sword",
  name: `[PRI] Lambda Sword`,
  type: "Weapon",
  durability: 100,
  enhancementLvl: 16
};
const expectedFail = {
  originalName: "Lambda Sword",
  name: `[+15] Lambda Sword`,
  type: "Weapon",
  durability: 90,
  enhancementLvl: 15
};
const repaired = {
  originalName: "Lambda Sword",
  name: `[PRI] Lambda Sword`,
  type: "Weapon",
  durability: 100,
  enhancementLvl: 16
};
describe("enchanting system", () => {
  describe("success method", () => {
    test("adds 1 to enhancement", () => {
      expect(enhancer.success(item)).toEqual(expected);
    });
    it("should throw an error if durability is not enough", () => {
      expect(() => enhancer.success(failItem)).toThrow();
    });
  });

  describe("enchant fail", () => {
    const failedItem = { ...item };
    test("decreases durability if fails", () => {
      expect(enhancer.fail(failedItem)).toEqual(expectedFail);
    });
  });
  describe("repair", () => {
    test("repair to full durability", () => {
      expect(enhancer.repair(expected)).toEqual(repaired);
    });
  });
});
