let friends = ["Stephen", "Joe", "Quinton", "Chuy", "Alex"];

let currentFriendNumber = 0;

for (j = 0; j < 5; j++) {
  let currentFriend = friends[currentFriendNumber];
  console.log(currentFriend);
  let numberOfLines = 99;
  let numberOfLinesReduced = 98;

  for (i = 0; i < 99; i++) {
    if (numberOfLinesReduced == 1) {
      console.log(
        numberOfLines +
          " " +
          "lines of code in the file. " +
          numberOfLines +
          " lines of code; " +
          currentFriend +
          " strikes one out, clears it all out, " +
          numberOfLinesReduced +
          " line of code in the file."
      );

      --numberOfLines;
      --numberOfLinesReduced;
    } else if (numberOfLines == 1) {
      console.log(
        numberOfLines +
          " " +
          "line of code in the file. " +
          numberOfLines +
          " line of code; " +
          currentFriend +
          " strikes one out, clears it all out, no more lines of code in the file."
      );
    } else {
      console.log(
        numberOfLines +
          " " +
          "lines of code in the file. " +
          numberOfLines +
          " lines of code; " +
          currentFriend +
          " strikes one out, clears it all out, " +
          numberOfLinesReduced +
          " lines of code in the file."
      );

      --numberOfLines;
      --numberOfLinesReduced;
    }
  }

  ++currentFriendNumber;
}
