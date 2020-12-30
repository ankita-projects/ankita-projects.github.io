function getHighestValue(check) {
  var highest = check[0];
  for (i = 0; i < check.length; i++) {
    if (check[i] >highest) {
      highest = check[i];
    }
  }
  return highest;
}

