/*
The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. 
If you had to buy shares in the company on one day, and sell the shares on one of the following days, 
write an algorithm to work out what the maximum profit you could make would be.
*/
// [128, 97, 121, 123, 98, 97, 105]
// [12, 11, 10, 9, 8]
function maxProfit(arr) {
  // Iterating from the back
  let max = arr[arr.length - 1];
  let maxEV = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    max = Math.max(arr[i], max);
    maxEV = Math.max(max - arr[i], maxEV);
  }
  return maxEV;
}

function main() {
  console.log(maxProfit([12, 11, 10, 9, 8]));
}

main();

/*
Test cases:
normal case with given data
an array with all descending values
an empty array
an invalid array
a single value array



[128, 97, 121, 123, 98, 97, 105] => 123 - 97 = 26
[97, 123]
[121, 123]
[123, 105]
[98, 105]
[97, 105]
[105]

[12, 11, 10, 9] => -1 => 0

We need to buy before we sell
In any given set, the maximum max - min


Math.max()
*/
