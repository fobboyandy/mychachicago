function sortAlpha(a, b) {
  return a.localeCompare(b);
}

function sortAlphaName(a, b) {
  return a.name.localeCompare(b.name);
}

export { sortAlpha, sortAlphaName };
