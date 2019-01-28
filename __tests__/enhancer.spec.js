const enhancer = require("../enhancer");
const item = {
  originalName: "Lambda Sword",
  name: `Lambda Sword`,
  type: "Weapon",
  durability: 100,
  enhancementLvl: 15
};
const expected = {
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
  });
  //   describe("enchant fail");
  //   describe("repair");
});
