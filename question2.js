// Function to count the number of each role
function countRoles(users) {
    return users.reduce((acc, { role }) => {
        acc[role] = (acc[role] || 0) + 1;
        return acc;
    }, { admin: 0, instructor: 0, student: 0 });
}

// Function to find all admins
function findAdmins(users) {
    const admins = users.filter(({ role }) => role === "admin").map(({ name }) => name);
    return admins.length ? admins : ["No admins found"];
}

// Function to generate welcome messages
function generateWelcomeMessages(users) {
    return users.map(({ name, role }) => 
        `Welcome, ${name}! You are ${role === "admin" ? "an" : "a"} ${role}.`
    );
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
