//sort sizes by small, large

function sortBySize(a, b) {
  if (a?.name.toLowerCase() === "small") {
    return -2;
  }

  if (a?.name.toLowerCase() === "large") return 2;

  return 0;
}

export { sortBySize };
