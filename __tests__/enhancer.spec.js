const enhancer = require("../enhancer");
const item = {
  originalName: "Lambda Sword",
  name: `[+0] Lambda Sword`,
  type: "Weapon",
  durability: 100,
  enhancementLvl: 0
};
const expected = {
  originalName: "Lambda Sword",
  name: `[+1] Lambda Sword`,
  type: "Weapon",
  durability: 100,
  enhancementLvl: 1
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
