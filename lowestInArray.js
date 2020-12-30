function getlowestValue(input) {
    var lowest = input[0];
    for (i = 0; i < input.length; i++) {
      if (input[i] <lowest) {
        lowest = input[i];
      }
    }
    return lowest;
  }