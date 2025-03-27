// Function to count the number of each role
function countRoles(users) {
    let roleCounts = { admin: 0, instructor: 0, student: 0 };
    
    for (let user of users) {
        if (user.role === "admin") {
            roleCounts.admin++;
        } else if (user.role === "instructor") {
            roleCounts.instructor++;
        } else if (user.role === "student") {
            roleCounts.student++;
        }
    }
    
    return roleCounts;
}

// Function to find all admins
function findAdmins(users) {
    const admins = users.filter(user => user.role === "admin").map(user => user.name);
    return admins.length > 0 ? admins : "No admins found";
}

// Function to generate welcome messages
function generateWelcomeMessages(users) {
    return users.map(user => `Welcome, ${user.name}! You are an ${user.role}.`);
}

// Example usage
const users = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "student" },
    { name: "Charlie", role: "instructor" },
    { name: "David", role: "student" },
    { name: "Eve", role: "admin" },
    { name: "Frank", role: "student" }
];

console.log(countRoles(users));
console.log(findAdmins(users));
console.log(generateWelcomeMessages(users));


