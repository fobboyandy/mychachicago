function findURLInString(str) {
  var matches = str.match(/\bhttps?:\/\/\S+/gi);

  return matches;
}

export { findURLInString };
