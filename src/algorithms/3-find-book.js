// Imagine you are looking for a book in a library with a Dewey Decimal index.
// How would you go about it? Can you express this process as a searching algorithm?

// How deep should our algorithm support dewey's love?
/*
  500 Natural sciences and mathematics
  510 Mathematics
  516 Geometry
  516.3 Analytic geometries
  516.37 Metric differential geometries
  516.375 Finsler geometry
 */

// Input: e.g. 516.375
// Output: Title ?
/*
  hash table for the first significant digit 0, 1, 2, 3, ..., 9
  
*/

const library = [
  { author: "Cowlishaw, Mike", dewey: "005.133", title: "The REXX Language" },
  { author: "Sams", dewey: "005.133", title: "Teach Yourself C++ In 21 Days" },
  {
    author: "Stroustrup., Bjarne",
    dewey: "005.133",
    title: "The C++ Programming Language"
  },
  {
    author: "Crockford, Douglas",
    dewey: "005.2762",
    title: "JavaScript: The Good Parts"
  },
  {
    author: "Flanagan, David",
    dewey: "005.2762",
    title: "JavaScript: The Definitive Guide"
  },
  {
    author: "Schmidt, Meinhard",
    dewey: "005.44684",
    title: "Windows Vista for Dummies"
  },
  { author: "Zondervan", dewey: "220.52081", title: "NIV Study Bible" },
  {
    author: "Humphries, Russell, Dr.",
    dewey: "231.7652",
    title: "Starlight and Time"
  },
  {
    author: "Jane, Frederick Thomas",
    dewey: "623.82509051",
    title: "Jane's Fighting Ships"
  },
  {
    author: "Norris, Chuck",
    dewey: "796.8092",
    title: "The Official Chuck Norris Fact Book"
  }
];

/**
 * Used to find a book.
 * @param {*} arr - here is another description
 * @param {String} decimalString - here is a description
 * @returns {*} an array of books at this decimal number
 */
function findBook(arr, decimalString) {
  let start = 0;
  let end = arr.length - 1;

  const decimalNumber = Number(decimalString);

  let targetIndex = null;
  // Find the first occurance of a decimal `bucket`
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid].dewey === decimalString) {
      // If the value to the left is also the same decimal value, treat this value as one greater than the value we are looking for
      if (arr[mid - 1] && arr[mid - 1].dewey === decimalString) {
        end = mid - 1;
      }
      // Break once we reach the first occurance in the array
      else {
        targetIndex = mid;
        break;
      }
    } else if (Number(arr[mid].dewey) > decimalNumber) end = mid - 1;
    else if (Number(arr[mid].dewey) < decimalNumber) start = mid + 1;
  }

  // Iterate from the first occurance and build an array of each book that
  // Shares the target decimal value
  if (targetIndex !== null) {
    const result = [];
    while (arr[targetIndex].dewey === decimalString) {
      result.push(arr[targetIndex]);
      targetIndex++;
    }
    return result;
  } else return -1;
}

function main() {
  console.log(findBook(library, "005.133")); // expect => [{first 3 books}]
  console.log(findBook(library, "505.133")); // expect => -1
}

main();
