const record = [
   { year: "2018", result: "L" },
   { year: "2017", result: "W" },
   { year: "2016", result: "N/A" },
   // ...
];

function superbowlWin(records) {
   const winningYear = records.find(record => record.result === "W");
   return winningYear ? winningYear.year : undefined;
}

const winYear = superbowlWin(record);
console.log(winYear); // Output: "2017" (assuming the record shows a win in 2017)

if (winYear) {
   console.log("Super Bowl win year:", winYear);
} else {
   console.log("No Super Bowl wins found in the record.");
}
