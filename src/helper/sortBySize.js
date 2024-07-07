//sort sizes by small, large

function sortBySize(a, b) {
  if (a?.name === "small") {
    return -2;
  }

  if (a?.name === "large") return 2;

  return 0;
}

export { sortBySize };
