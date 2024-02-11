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

console.log("___________________________________________________________");

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const isAnagram = (s, t) => {
    const collectCharS = {}, collectCharT = {};

    for (const sChar of s) {
        collectCharS[sChar] = collectCharS[sChar] ? collectCharS[sChar] + 1 : 1;
    }

    for (const tChar of s) {
        collectCharT[tChar] = collectCharT[tChar] ? collectCharT[tChar] + 1 : 1;
    }

    return JSON.stringify(collectCharS) === JSON.stringify(collectCharT);
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

console.log("___________________________________________________________");
