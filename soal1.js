// function pairNumber(array) {
//   var numberOfPairs = 0,
//     counts = {};

//   for (let v of array) {
//     if (!counts[v]) counts[v] = 0;
//     console.log(v);
//     ++counts[v];
//   }
//   for (let count of Object.values(counts)) numberOfPairs += count >> 1;
//   return numberOfPairs;
// }

// console.log(pairNumber([10, 20, 20, 10, 10, 30, 50, 10, 20]));
// console.log(pairNumber([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
// console.log(pairNumber([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
// // count_duplicate(a);

const ex = [5, 7, 7, 9, 10, 4, 5, 10, 6, 5];
const a = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const b = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
const c = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

const findSocks = (arr) => {
  let result = 0;
  const setArr = [...new Set(arr)];
  const totalPerNumber = setArr.map((item) => {
    let total = 0;
    arr.map((sock) => {
      if (item === sock) total += 1;
    });
    return total;
  });
  totalPerNumber.map((item) => {
    if (item > 1) result += Math.floor(item / 2);
  });
  return result;
};

console.log('Result EX', findSocks(ex));
console.log('Result A', findSocks(a));
console.log('Result B', findSocks(b));
console.log('Result C', findSocks(c));
