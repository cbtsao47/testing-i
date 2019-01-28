module.exports = {
  success,
  fail,
  repair
};

function success(item) {
  function enhance(item) {
    item.enhancementLvl++;
    switch (item.enhancementLvl) {
      case 16:
        item.name = `[PRI] ${item.originalName}`;
        break;
      case 17:
        item.name = `[DUO] ${item.originalName}`;
        break;
      case 18:
        item.name = `[TRI] ${item.originalName}`;
        break;
      case 19:
        item.name = `[TET] ${item.originalName}`;
        break;
      case 20:
        item.name = `[PEN] ${item.originalName}`;
        break;
      default:
        item.name = `[+${item.enhancementLvl}] ${item.originalName}`;
    }
  }
  if (item.type === "Weapon") {
    if (item.enhancementLvl <= 7) {
      enhance(item);
    } else if (item.enhancementLvl <= 20) {
      enhance(item);
    }
  }
  return item;
}

function fail() {}

function repair() {}
