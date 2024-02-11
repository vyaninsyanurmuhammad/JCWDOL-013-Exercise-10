// Create a function to convert Excel sheet column title to its corresponding column number.


// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one

const findSingleOne = (nums) => {
    const seen = {};

    for (const num of nums) {
        seen[num] = seen[num] ? seen[num] + 1 : 1;
    }

    for (const key in seen) {
        if (seen[key] == 1) return key;
    }
}

console.log(findSingleOne([2, 2, 1]));
console.log(findSingleOne([4, 1, 2, 1, 2]));
console.log(findSingleOne([1]));