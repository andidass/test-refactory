function LeapYear(year1, year2) {
  let start;
  let years = [];
  let add = 4;
  let temp = 0;
  for (let i = 1; i <= 4; i++) {
    if (year1 % 4 !== 0) {
      year1 += 1;
    }
  }
  // if ((year1 % 4 === 0 && year1 % 100 !== 0) || year1 % 400 === 0) {
  if (year1 % 4 === 0) {
    start = year1;
  }
  console.log("Start Year Leap : ", start);

  for (temp = start; temp + 4 < year2; start) {
    temp += add;
    years.push(temp);
  }
  console.log("Year Leap : ", years);
}

LeapYear(1995, 2021);
