function findURLInString(str) {
  var matches = str.match(/\bhttps?:\/\/\S+/gi);

  return matches;
}

// const c = "sdjkfhaskfhjsakdlflsdjf https://www.google.com sakjhadjksjhdjk";

// const match = findURLInString(c);

// // var ret = c.replace(match[0], match[0].anchor());

// console.log(c.indexOf(match[0]));

export { findURLInString };
