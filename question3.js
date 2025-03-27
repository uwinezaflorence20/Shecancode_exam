// a. Recursive function to sum an array
function sumArray(arr) {
    // Base case: If the array is empty, return 0
    if (arr.length === 0) {
      return 0;
    }
    // Recursive case: Sum the first element and the result of sumArray on the rest of the array
    return arr[0] + sumArray(arr.slice(1));
  }
  
  // b. Recursive function for factorial
  function factorial(n) {
    // Base case: If n is 0 or 1, return 1 (since factorial of 0 and 1 is 1)
    if (n <= 1) {
      return 1;
    }
    // Recursive case: n * factorial of (n-1)
    return n * factorial(n - 1);
  }
  
  // c. Recursive function to reverse a string
  function reverseString(str) {
    // Base case: If the string is empty or has one character, return the string
    if (str.length <= 1) {
      return str;
    }
    // Recursive case: Reverse the substring excluding the first character and add the first character at the end
    return reverseString(str.slice(1)) + str[0];
  }
  
  // d. Why recursion might be less efficient than iteration
  // Recursion can be less efficient due to the overhead of function calls and the risk of stack overflow errors for deep recursion.
  // For large inputs, recursion may lead to excessive memory usage and slow performance, while iteration is generally more efficient.
  // Example: Iteration is preferred when summing a large array as recursion can lead to stack overflow.
  
  
  // e. Iterative version of sumArray for comparison
  function sumArrayIterative(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  // Example usage:
  console.log("Recursive Sum of Array:", sumArray([1, 2, 3, 4, 5])); // Output: 15
  console.log("Factorial of 5:", factorial(5)); // Output: 120
  console.log("Reversed String 'hello':", reverseString("hello")); // Output: "olleh"
  console.log("Iterative Sum of Array:", sumArrayIterative([1, 2, 3, 4, 5])); // Output: 15
  