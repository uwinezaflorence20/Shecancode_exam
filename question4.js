// a. Find top scorers using filter
function findTopScorers(students, threshold) {
    return students
        .filter(student => student.score > threshold)
        .map(student => student.name);
}

// b. Sort students by score in descending order
function sortStudentsByScore(students) {
    return [...students].sort((a, b) => b.score - a.score);
}

// c. Remove duplicate numbers from an array without using Set
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let num of arr) {
        if (!uniqueArr.includes(num)) {
            uniqueArr.push(num);
        }
    }
    return uniqueArr;
}

// d. Get the median score
function getMedianScore(scores) {
    if (scores.length === 0) return null; // Handle empty array case

    let sortedScores = [...scores].sort((a, b) => a - b);
    let mid = Math.floor(sortedScores.length / 2);

    if (sortedScores.length % 2 === 0) {
        return (sortedScores[mid - 1] + sortedScores[mid]) / 2; // Average of middle elements
    } else {
        return sortedScores[mid]; // Middle element
    }
}

// Example usage:
const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "David", score: 90 },
];

console.log(findTopScorers(students, 80)); // ['Alice', 'Bob', 'David']
console.log(sortStudentsByScore(students)); // Sorted student objects
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(getMedianScore([70, 80, 90, 60, 85])); // 80
