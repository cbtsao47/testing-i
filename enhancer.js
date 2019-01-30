module.exports = {
  success,
  fail,
  repair
};

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
function success(item) {
  if (item.enhancementLvl < 15 && item.durability < 25) {
    throw new Error("repair your item");
  } else if (item.enhancementLvl < 15 && item.durability >= 25) {
    enhance(item);
  } else if (item.enhancementLvl >= 15 && item.durability < 10) {
    throw new Error("repair your item");
  } else if (item.enhancementLvl >= 15 && item.durability >= 10) {
    enhance(item);
  }
  return item;
}

function disenchant(item) {
  console.log("original", item);
  switch (item.enhancementLvl) {
    case 17:
      item.name = `[PRI] ${item.originalName}`;
      break;
    case 18:
      item.name = `[DUO] ${item.originalName}`;
      break;
    case 19:
      item.name = `[TRI] ${item.originalName}`;
      break;
    default:
      console.log("item", item.name);
      item.name = `[+${item.enhancementLvl}] ${item.originalName}`;
  }
}
function fail(item) {
  console.log("fail", item);
  if (item.enhancementLvl < 15) {
    disenchant(item);
    item.durability -= 5;
  } else if (item.enhancementLvl < 20) {
    disenchant(item);
    item.durability -= 10;
  }
  return item;
}

function repair(item) {
  item.durability = 100;
  return item;
}
