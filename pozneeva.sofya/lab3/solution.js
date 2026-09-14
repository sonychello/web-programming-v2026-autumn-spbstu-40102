export function findEquilibriumIndex(arr) {
  let sum = 0;

  for (const number of arr) {
    sum += number;
  }
  let leftSum = arr[0];
  sum -= arr[0];

  for (let i = 1; i < arr.length - 1; i++) {
    sum -= arr[i];

    if (leftSum === sum) {
      return i;
    }

    leftSum += arr[i];
  }
  if (sum === arr[arr.length - 1]) {
    return -1;
  }
}
