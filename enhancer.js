module.exports = {
  success,
  fail,
  repair
};

function success(item) {
  item.enhancementLvl++;
  item.name = `[+${item.enhancementLvl}] ${item.originalName}`;
  return item;
}

function fail() {}

function repair() {}
